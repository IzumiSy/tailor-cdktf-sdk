import {
  getDoc,
  type Model,
  type ModelProperty,
  type Namespace,
  type Program,
} from "@typespec/compiler";

type TailorDBModel = {
  name: string;
  description?: string;
  properties: Record<string, TailorDBProperty>;
};

type EnumValue = {
  value: string;
  description?: string;
};

type TailorDBProperty = {
  type: string;
  description?: string;
  isRequired: boolean;
  nested?: TailorDBModel["properties"];
  enumValues?: Array<EnumValue>;
};

export class TailorDBTypeSpecCompiler {
  private filePath: string;
  private program: Program;

  constructor(filePath: string) {
    this.filePath = filePath;
    this.program = null;
  }

  async compile() {
    const typeSpecCompiler = await import("@typespec/compiler");

    this.program = await typeSpecCompiler.compile(
      typeSpecCompiler.NodeHost,
      this.filePath
    );

    const { diagnostics } = this.program;
    if (diagnostics.length > 0) {
      throw new Error("Compilation failed");
    }

    const [untypedNamespace] = this.program.resolveTypeReference("TailorDB");
    if (!untypedNamespace) {
      throw new Error("TailorDB namespace not found");
    }

    const namespace = untypedNamespace as Namespace;
    const models: TailorDBModel[] = [];

    for (const [name, modelDef] of namespace.models) {
      models.push(this.extractModel(name, modelDef));
    }

    return {
      models,
    };
  }

  private extractModel(name: string, t: Model) {
    const modelDoc = getDoc(this.program, t);
    const model: TailorDBModel = {
      name,
      description: modelDoc,
      properties: {},
    };

    for (const [propName, propDef] of t.properties) {
      const {
        name: propType,
        nestedProperties,
        enumValues,
      } = this.extractPropertyType(propName, propDef);

      const propertyDoc = getDoc(this.program, propDef);
      model.properties[propName] = {
        type: propType,
        description: propertyDoc,
        isRequired: !propDef.optional,
        nested: nestedProperties,
        enumValues,
      };
    }

    return model;
  }

  extractPropertyType(name: string, property: ModelProperty) {
    switch (property.type.kind) {
      case "Scalar":
        return {
          name: property.type.name,
        };
      case "Model":
        const { properties } = this.extractModel(
          property.type.name,
          property.type
        );
        return {
          name: property.type.name,
          nestedProperties: properties,
        };
      case "Enum": {
        const enumValues: Array<EnumValue> = [];

        for (const [enumName, enumDef] of property.type.members) {
          const enumDoc = getDoc(this.program, enumDef);
          enumValues.push({
            value: enumName,
            description: enumDoc,
          });
        }

        return {
          name: property.type.name,
          enumValues,
        };
      }
      default:
        throw new Error(
          `Unsupported property type: ${property.type.kind} for property ${name}`
        );
    }
  }
}
