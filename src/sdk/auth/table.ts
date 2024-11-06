import { defineTable } from "../tailordb";

export const userTable = defineTable({
  fields: {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
    },
    roles: {
      type: "uuid",
      array: true,
    },
  },
});
