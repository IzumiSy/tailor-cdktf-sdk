import { describe, expect, it } from "vitest";
import { TailorDBTypeSpecCompiler } from "./compiler";
import { resolve } from "path";

describe("compiler", () => {
  it("compiles the main file", async () => {
    const filePath = resolve(__dirname, "../tests/file/main.tsp");
    const tailorDBCompiler = new TailorDBTypeSpecCompiler(filePath);
    const compiledResult = await tailorDBCompiler.compile();

    expect(compiledResult.models).toEqual([
      {
        name: "User",
        properties: {},
      },
    ]);
  });
});
