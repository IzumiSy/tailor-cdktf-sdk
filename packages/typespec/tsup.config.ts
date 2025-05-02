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
  entry: ["src/index.ts"],
  clean: true,
  minify: true,
  dts: true,
  ...devOpts,
});
