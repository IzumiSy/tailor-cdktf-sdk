import { defineTable } from "../tailordb";

export const userTable = defineTable({
  fields: {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      index: true,
      unique: true,
    },
    roles: {
      type: "uuid",
      array: true,
    },
  },
});

export const roleTable = defineTable({
  fields: {
    name: {
      type: "string",
      required: true,
      index: true,
      unique: true,
    },
  },
});
