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

export type TableDefiner = (
  name: string,
  input: TableDefInput
) => TailordbTypeConfig;

const defaultDirectives = [
  {
    name: "key",
    args: [
      {
        name: "fields",
        value: "id",
      },
    ],
  },
];

export const defineTable =
  (definition: TableDef): TableDefiner =>
  (name: string, input: TableDefInput) => {
    return {
      workspaceId: input.workspace.id,
      namespace: input.tailordb.namespace,
      name: name,
      fields: definition.fields,
      typePermission: definition.typePermission ?? input.defaultTypePermission,
      directives: definition.directives ?? defaultDirectives,
    };
  };

export const permitByIDs = (opts: {
  create?: (string | undefined)[];
  read?: (string | undefined)[];
  update?: (string | undefined)[];
  delete?: (string | undefined)[];
}) => ({
  create: opts.create.flatMap(createAttr),
  read: opts.read.flatMap(createAttr),
  update: opts.update.flatMap(createAttr),
  delete: opts.delete.flatMap(createAttr),
});

const createAttr = (id: string | undefined) =>
  id ? [{ attribute: id, permit: "allow" }] : [];
