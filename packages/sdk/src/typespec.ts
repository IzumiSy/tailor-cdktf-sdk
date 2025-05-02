import type { Namespace } from "@typespec/compiler";
import { resolve } from "path";

const main = async () => {
  const typeSpecCompiler = await import("@typespec/compiler");
  const program = await typeSpecCompiler.compile(
    typeSpecCompiler.NodeHost,
    resolve("main.tsp")
  );

  const { diagnostics } = program;
  if (diagnostics.length > 0) {
    throw new Error("Compilation failed");
  }

  const [untypedNamespace] = program.resolveTypeReference("TailorDB");
  if (!untypedNamespace) {
    throw new Error("TailorDB namespace not found");
  }

  const namespace = untypedNamespace as Namespace;
  for (const [name, modelDef] of namespace.models) {
    console.log(name);

    for (const [propName, propDef] of modelDef.properties) {
      console.log(" - ", propName);
    }
  }
};

main().catch((error) => {
  console.error(error);
});
