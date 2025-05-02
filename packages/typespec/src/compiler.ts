import type { Namespace } from "@typespec/compiler";
import { resolve } from "path";

const compile = async (props: { filePath: string }) => {
  const typeSpecCompiler = await import("@typespec/compiler");
  const program = await typeSpecCompiler.compile(
    typeSpecCompiler.NodeHost,
    props.filePath
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
      console.log("*", propName);
    }
  }
};

compile({
  filePath: resolve("main.tsp"),
}).catch((error) => {
  console.error(error);
});
