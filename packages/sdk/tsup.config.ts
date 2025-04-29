/// <reference types="node" />
import { defineConfig } from "tsup";

const devOpts =
  process.env.NODE_ENV === "development"
    ? {
        minify: false,
        splitting: false,
        sourcemap: true,
      }
    : {};

export default defineConfig({
  format: ["cjs"],
  entry: ["src/provider/index.ts", "src/sdk/index.ts"],
  clean: true,
  minify: true,
  dts: true,
  ...devOpts,
});
