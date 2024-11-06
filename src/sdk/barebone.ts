import { TerraformStack } from "cdktf";
import * as Tailor from "../../.gen/providers/tailor";
import { AuthInput } from "./auth/idp";
import { defineTable, permitByIDs } from "./tailordb";

export const createBarebone = (
  stack: TerraformStack,
  pat: string | undefined,
  options: {
    workspaceName: string;
    appName: string;
    initialMachineUserID?: string;
    attachIDPConfig?: (source: AuthInput) => Tailor.authIdpConfig.AuthIdpConfig;
  }
) => {
  new Tailor.provider.TailorProvider(stack, "tailor", {
    pat,
  });

  /**
   * Workspaces
   */

  const workspace = new Tailor.workspace.Workspace(stack, "workspace", {
    name: options.workspaceName,
    region: "asia-northeast",
  });

  /**
   * TailorDBs
   */
  const tailordb = new Tailor.tailordb.Tailordb(stack, "tailordb", {
    namespace: "tailordb",
    workspaceId: workspace.id,
  });

  /**
   * Vault
   */

  const vault = new Tailor.secretmanagerVault.SecretmanagerVault(
    stack,
    "default",
    {
      workspaceId: workspace.id,
      name: "default",
    }
  );

  /**
   * Auth
   */

  const auth = new Tailor.auth.Auth(stack, "auth", {
    workspaceId: workspace.id,
    namespace: "auth",
  });

  /**
   * Machine User
   */

  if (options.initialMachineUserID) {
    new Tailor.authMachineUser.AuthMachineUser(stack, "machineUser", {
      workspaceId: workspace.id,
      namespace: auth.namespace,
      name: "machine-user",
      attributes: [options.initialMachineUserID],
    });
  }

  /**
   * IDP Config
   */

  const idpConfig = options.attachIDPConfig?.({
    workspace,
    tailordb,
    vault,
    auth,
  });

  /**
   * Applications
   */

  new Tailor.application.Application(stack, "application", {
    workspaceId: workspace.id,
    name: options.appName,
    subgraphs: [
      {
        type: "tailordb",
        namespace: tailordb.namespace,
      },
    ],
    cors: ["http://localhost:8080", "http://localhost:3000"],
    auth: {
      namespace: auth.namespace,
      ...(idpConfig ? { idpConfigName: idpConfig.name } : {}),
    },
  });

  return new Barebone(stack, options.initialMachineUserID, {
    workspace,
    tailordb,
    vault,
    auth,
  });
};

export class Barebone {
  constructor(
    readonly stack: TerraformStack,
    readonly machineUserID: string | undefined,
    readonly src: {
      workspace: Tailor.workspace.Workspace;
      tailordb: Tailor.tailordb.Tailordb;
      vault: Tailor.secretmanagerVault.SecretmanagerVault;
      auth: Tailor.auth.Auth;
    }
  ) {}

  addTables(definitions: Record<string, ReturnType<typeof defineTable>>) {
    Object.keys(definitions)
      .map((key) =>
        definitions[key](key, {
          workspace: this.src.workspace,
          tailordb: this.src.tailordb,
          defaultTypePermission: permitByIDs({
            create: [this.machineUserID],
            read: [this.machineUserID],
            update: [this.machineUserID],
            delete: [this.machineUserID],
          }),
        })
      )
      .map(
        (table) =>
          new Tailor.tailordbType.TailordbType(
            this.stack,
            `${table.name}Table`,
            table
          )
      );
  }
}
