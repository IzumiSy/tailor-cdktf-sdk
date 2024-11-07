import test from "node:test";
import { permitByIDs } from "./tailordb";
import assert from "node:assert";

test("permitByIDs", async (t) => {
  const r = permitByIDs({
    create: ["role1"],
    read: ["role2", "role3"],
    update: ["role4", "role5"],
    delete: ["role6"],
  });

  assert.deepStrictEqual(r, {
    create: [{ attribute: "role1", permit: "allow" }],
    read: [
      { attribute: "role2", permit: "allow" },
      { attribute: "role3", permit: "allow" },
    ],
    update: [
      { attribute: "role4", permit: "allow" },
      { attribute: "role5", permit: "allow" },
    ],
    delete: [{ attribute: "role6", permit: "allow" }],
  });
});
