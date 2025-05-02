import type { DecoratorContext, Type } from "@typespec/compiler";
import { keyRequiredFields } from "./symbols";

export const $required = (context: DecoratorContext, type: Type) => {
  context.program.stateMap(keyRequiredFields).set(type, {
    required: true,
  });
};
