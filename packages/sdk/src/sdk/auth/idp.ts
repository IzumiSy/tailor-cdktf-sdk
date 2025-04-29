import { TerraformStack } from "cdktf";
import * as Tailor from "../../../.gen/providers/tailor";

export type AuthInput = {
  workspace: Tailor.workspace.Workspace;
  tailordb: Tailor.tailordb.Tailordb;
  vault: Tailor.secretmanagerVault.SecretmanagerVault;
  auth: Tailor.auth.Auth;
};

export const addOIDCAuth =
  (
    stack: TerraformStack,
    opts: {
      clientID: string;
      clientSecret: string;
      providerURL: string;
    }
  ) =>
  (input: AuthInput) => {
    const { workspace, tailordb, vault, auth } = input;

    const vaultSecret = new Tailor.secretmanagerSecret.SecretmanagerSecret(
      workspace,
      "default-oidc",
      {
        workspaceId: workspace.id,
        vaultName: vault.name,
        name: "oidc-client-secret",
        value: opts.clientSecret,
      }
    );

    const idpConfig = new Tailor.authIdpConfig.AuthIdpConfig(stack, "oidc", {
      workspaceId: workspace.id,
      namespace: auth.namespace,
      name: "oidc",
      oidcConfig: {
        clientId: opts.clientID,
        clientSecret: {
          vaultName: vault.name,
          secretName: vaultSecret.name,
        },
        providerUrl: opts.providerURL,
      },
    });

    new Tailor.authUserProfileConfig.AuthUserProfileConfig(
      stack,
      "userProfileConfig",
      {
        workspaceId: workspace.id,
        namespace: auth.namespace,
        tailordbConfig: {
          namespace: tailordb.namespace,
          type: "User",
          usernameField: "email",
          attributeFields: ["roles"],
        },
      }
    );

    return idpConfig;
  };
