import { describe, it } from "vitest";
import { compile } from "./compiler";
import { resolve } from "path";

describe("compiler", () => {
  it("compiles the main file", async () => {
    await compile({
      filePath: resolve(__dirname, "../tests/file/main.tsp"),
    });
  });
});
