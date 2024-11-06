import * as Tailor from "../../.gen/providers/tailor";
import {
  TailordbTypeConfig,
  TailordbTypeTypePermission,
} from "../../.gen/providers/tailor/tailordb-type";

type TableDef = Omit<TailordbTypeConfig, "workspaceId" | "namespace" | "name">;
type TableDefInput = {
  workspace: Tailor.workspace.Workspace;
  tailordb: Tailor.tailordb.Tailordb;
  defaultTypePermission: TailordbTypeTypePermission;
};

export type TableDefiner = ReturnType<typeof defineTable>;

export const defineTable =
  (definition: TableDef) =>
  (name: string, input: TableDefInput): TailordbTypeConfig => {
    return {
      workspaceId: input.workspace.id,
      namespace: input.tailordb.namespace,
      name: name,
      fields: definition.fields,
      typePermission: definition.typePermission || input.defaultTypePermission,
    };
  };

export const permitByIDs = (opts: {
  create: (string | undefined)[];
  read: (string | undefined)[];
  update: (string | undefined)[];
  delete: (string | undefined)[];
}) => ({
  create: opts.create.flatMap(createAttr),
  read: opts.create.flatMap(createAttr),
  update: opts.create.flatMap(createAttr),
  delete: opts.create.flatMap(createAttr),
});

const createAttr = (id: string | undefined) =>
  id ? [{ attribute: id, permit: "allow" }] : [];
