// https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TailordbTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of this TailorDBType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#description TailordbType#description}
  */
  readonly description?: string;
  /**
  * The list of GraphQL directives for this TailorDBType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#directives TailordbType#directives}
  */
  readonly directives?: TailordbTypeDirectives[] | cdktf.IResolvable;
  /**
  * Enable GraphQL type extension for this TailorDBType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#extends TailordbType#extends}
  */
  readonly extends?: boolean | cdktf.IResolvable;
  /**
  * Fields for this TailorDBType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#fields TailordbType#fields}
  */
  readonly fields: { [key: string]: TailordbTypeFields } | cdktf.IResolvable;
  /**
  * Define indexes for this TailorDBType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#indexes TailordbType#indexes}
  */
  readonly indexes?: { [key: string]: TailordbTypeIndexes } | cdktf.IResolvable;
  /**
  * The name of this TailorDBType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#name TailordbType#name}
  */
  readonly name: string;
  /**
  * Namespace name for this TailorDBType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#namespace TailordbType#namespace}
  */
  readonly namespace: string;
  /**
  * Define record-level permissions for this TailorDBType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#record_permission TailordbType#record_permission}
  */
  readonly recordPermission?: TailordbTypeRecordPermission;
  /**
  * Miscellaneous settings for this TailorDBType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#settings TailordbType#settings}
  */
  readonly settings?: TailordbTypeSettings;
  /**
  * Define type-level permissions for this TailorDBType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#type_permission TailordbType#type_permission}
  */
  readonly typePermission?: TailordbTypeTypePermission;
  /**
  * The ID of the workspace that the TailorDBType belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#workspace_id TailordbType#workspace_id}
  */
  readonly workspaceId: string;
}
export interface TailordbTypeDirectivesArgs {
  /**
  * The name of the argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#name TailordbType#name}
  */
  readonly name: string;
  /**
  * The value of the argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#value TailordbType#value}
  */
  readonly value: string;
}

export function tailordbTypeDirectivesArgsToTerraform(struct?: TailordbTypeDirectivesArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function tailordbTypeDirectivesArgsToHclTerraform(struct?: TailordbTypeDirectivesArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeDirectivesArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TailordbTypeDirectivesArgs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeDirectivesArgs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TailordbTypeDirectivesArgsList extends cdktf.ComplexList {
  public internalValue? : TailordbTypeDirectivesArgs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TailordbTypeDirectivesArgsOutputReference {
    return new TailordbTypeDirectivesArgsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TailordbTypeDirectives {
  /**
  * The list of arguments for the directive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#args TailordbType#args}
  */
  readonly args?: TailordbTypeDirectivesArgs[] | cdktf.IResolvable;
  /**
  * The name of the directive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#name TailordbType#name}
  */
  readonly name: string;
}

export function tailordbTypeDirectivesToTerraform(struct?: TailordbTypeDirectives | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(tailordbTypeDirectivesArgsToTerraform, false)(struct!.args),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function tailordbTypeDirectivesToHclTerraform(struct?: TailordbTypeDirectives | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(tailordbTypeDirectivesArgsToHclTerraform, false)(struct!.args),
      isBlock: true,
      type: "list",
      storageClassType: "TailordbTypeDirectivesArgsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeDirectivesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TailordbTypeDirectives | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeDirectives | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args.internalValue = value.args;
      this._name = value.name;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args = new TailordbTypeDirectivesArgsList(this, "args", false);
  public get args() {
    return this._args;
  }
  public putArgs(value: TailordbTypeDirectivesArgs[] | cdktf.IResolvable) {
    this._args.internalValue = value;
  }
  public resetArgs() {
    this._args.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class TailordbTypeDirectivesList extends cdktf.ComplexList {
  public internalValue? : TailordbTypeDirectives[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TailordbTypeDirectivesOutputReference {
    return new TailordbTypeDirectivesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TailordbTypeFieldsAllowedValues {
  /**
  * The description of the allowed value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#description TailordbType#description}
  */
  readonly description?: string;
  /**
  * The value of the allowed value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#value TailordbType#value}
  */
  readonly value: string;
}

export function tailordbTypeFieldsAllowedValuesToTerraform(struct?: TailordbTypeFieldsAllowedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function tailordbTypeFieldsAllowedValuesToHclTerraform(struct?: TailordbTypeFieldsAllowedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeFieldsAllowedValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TailordbTypeFieldsAllowedValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeFieldsAllowedValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TailordbTypeFieldsAllowedValuesList extends cdktf.ComplexList {
  public internalValue? : TailordbTypeFieldsAllowedValues[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TailordbTypeFieldsAllowedValuesOutputReference {
    return new TailordbTypeFieldsAllowedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TailordbTypeFieldsFieldsAllowedValues {
  /**
  * The description of the allowed value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#description TailordbType#description}
  */
  readonly description?: string;
  /**
  * The value of the allowed value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#value TailordbType#value}
  */
  readonly value: string;
}

export function tailordbTypeFieldsFieldsAllowedValuesToTerraform(struct?: TailordbTypeFieldsFieldsAllowedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function tailordbTypeFieldsFieldsAllowedValuesToHclTerraform(struct?: TailordbTypeFieldsFieldsAllowedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeFieldsFieldsAllowedValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TailordbTypeFieldsFieldsAllowedValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeFieldsFieldsAllowedValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TailordbTypeFieldsFieldsAllowedValuesList extends cdktf.ComplexList {
  public internalValue? : TailordbTypeFieldsFieldsAllowedValues[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TailordbTypeFieldsFieldsAllowedValuesOutputReference {
    return new TailordbTypeFieldsFieldsAllowedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TailordbTypeFieldsFieldsForeignKey {
  /**
  * The field of the foreign key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#field TailordbType#field}
  */
  readonly field?: string;
  /**
  * The type of the foreign key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#type TailordbType#type}
  */
  readonly type: string;
}

export function tailordbTypeFieldsFieldsForeignKeyToTerraform(struct?: TailordbTypeFieldsFieldsForeignKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function tailordbTypeFieldsFieldsForeignKeyToHclTerraform(struct?: TailordbTypeFieldsFieldsForeignKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeFieldsFieldsForeignKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TailordbTypeFieldsFieldsForeignKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeFieldsFieldsForeignKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._type = value.type;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface TailordbTypeFieldsFieldsHooks {
  /**
  * The JavaScript code to evaluate for create hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#create TailordbType#create}
  */
  readonly create?: string;
  /**
  * The CEL expression to evaluate for create hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#create_expr TailordbType#create_expr}
  */
  readonly createExpr?: string;
  /**
  * The JavaScript code to evaluate for update hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#update TailordbType#update}
  */
  readonly update?: string;
  /**
  * The CEL expression to evaluate for update hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#update_expr TailordbType#update_expr}
  */
  readonly updateExpr?: string;
}

export function tailordbTypeFieldsFieldsHooksToTerraform(struct?: TailordbTypeFieldsFieldsHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    create_expr: cdktf.stringToTerraform(struct!.createExpr),
    update: cdktf.stringToTerraform(struct!.update),
    update_expr: cdktf.stringToTerraform(struct!.updateExpr),
  }
}


export function tailordbTypeFieldsFieldsHooksToHclTerraform(struct?: TailordbTypeFieldsFieldsHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_expr: {
      value: cdktf.stringToHclTerraform(struct!.createExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_expr: {
      value: cdktf.stringToHclTerraform(struct!.updateExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeFieldsFieldsHooksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TailordbTypeFieldsFieldsHooks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._createExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.createExpr = this._createExpr;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    if (this._updateExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateExpr = this._updateExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeFieldsFieldsHooks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._createExpr = undefined;
      this._update = undefined;
      this._updateExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._createExpr = value.createExpr;
      this._update = value.update;
      this._updateExpr = value.updateExpr;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // create_expr - computed: false, optional: true, required: false
  private _createExpr?: string; 
  public get createExpr() {
    return this.getStringAttribute('create_expr');
  }
  public set createExpr(value: string) {
    this._createExpr = value;
  }
  public resetCreateExpr() {
    this._createExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createExprInput() {
    return this._createExpr;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }

  // update_expr - computed: false, optional: true, required: false
  private _updateExpr?: string; 
  public get updateExpr() {
    return this.getStringAttribute('update_expr');
  }
  public set updateExpr(value: string) {
    this._updateExpr = value;
  }
  public resetUpdateExpr() {
    this._updateExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateExprInput() {
    return this._updateExpr;
  }
}
export interface TailordbTypeFieldsFieldsSerial {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#format TailordbType#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#max_value TailordbType#max_value}
  */
  readonly maxValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#start TailordbType#start}
  */
  readonly start: number;
}

export function tailordbTypeFieldsFieldsSerialToTerraform(struct?: TailordbTypeFieldsFieldsSerial | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    max_value: cdktf.numberToTerraform(struct!.maxValue),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function tailordbTypeFieldsFieldsSerialToHclTerraform(struct?: TailordbTypeFieldsFieldsSerial | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_value: {
      value: cdktf.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeFieldsFieldsSerialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TailordbTypeFieldsFieldsSerial | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeFieldsFieldsSerial | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._maxValue = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._maxValue = value.maxValue;
      this._start = value.start;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface TailordbTypeFieldsFieldsValidate {
  /**
  * Action type. Supported values are 'allow', 'deny'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#action TailordbType#action}
  */
  readonly action: string;
  /**
  * The error message to return when validation fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#error_message TailordbType#error_message}
  */
  readonly errorMessage?: string;
  /**
  * The CEL expression to evaluate for validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#expr TailordbType#expr}
  */
  readonly expr?: string;
  /**
  * The JavaScript code to evaluate for validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#script TailordbType#script}
  */
  readonly script?: string;
}

export function tailordbTypeFieldsFieldsValidateToTerraform(struct?: TailordbTypeFieldsFieldsValidate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    error_message: cdktf.stringToTerraform(struct!.errorMessage),
    expr: cdktf.stringToTerraform(struct!.expr),
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function tailordbTypeFieldsFieldsValidateToHclTerraform(struct?: TailordbTypeFieldsFieldsValidate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_message: {
      value: cdktf.stringToHclTerraform(struct!.errorMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expr: {
      value: cdktf.stringToHclTerraform(struct!.expr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeFieldsFieldsValidateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TailordbTypeFieldsFieldsValidate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._errorMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorMessage = this._errorMessage;
    }
    if (this._expr !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeFieldsFieldsValidate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._errorMessage = undefined;
      this._expr = undefined;
      this._script = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._errorMessage = value.errorMessage;
      this._expr = value.expr;
      this._script = value.script;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // error_message - computed: false, optional: true, required: false
  private _errorMessage?: string; 
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
  public set errorMessage(value: string) {
    this._errorMessage = value;
  }
  public resetErrorMessage() {
    this._errorMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMessageInput() {
    return this._errorMessage;
  }

  // expr - computed: false, optional: true, required: false
  private _expr?: string; 
  public get expr() {
    return this.getStringAttribute('expr');
  }
  public set expr(value: string) {
    this._expr = value;
  }
  public resetExpr() {
    this._expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr;
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }
}

export class TailordbTypeFieldsFieldsValidateList extends cdktf.ComplexList {
  public internalValue? : TailordbTypeFieldsFieldsValidate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TailordbTypeFieldsFieldsValidateOutputReference {
    return new TailordbTypeFieldsFieldsValidateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TailordbTypeFieldsFields {
  /**
  * Allowed values for enum fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#allowed_values TailordbType#allowed_values}
  */
  readonly allowedValues?: TailordbTypeFieldsFieldsAllowedValues[] | cdktf.IResolvable;
  /**
  * Whether the field is an array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#array TailordbType#array}
  */
  readonly array?: boolean | cdktf.IResolvable;
  /**
  * The description of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#description TailordbType#description}
  */
  readonly description?: string;
  /**
  * Foreign key settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#foreign_key TailordbType#foreign_key}
  */
  readonly foreignKey?: TailordbTypeFieldsFieldsForeignKey;
  /**
  * Hooks settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#hooks TailordbType#hooks}
  */
  readonly hooks?: TailordbTypeFieldsFieldsHooks;
  /**
  * Whether the field is indexed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#index TailordbType#index}
  */
  readonly index?: boolean | cdktf.IResolvable;
  /**
  * Whether the field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#required TailordbType#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#serial TailordbType#serial}
  */
  readonly serial?: TailordbTypeFieldsFieldsSerial;
  /**
  * The source of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#source TailordbType#source}
  */
  readonly source?: string;
  /**
  * The type of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#type TailordbType#type}
  */
  readonly type: string;
  /**
  * Whether the field is unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#unique TailordbType#unique}
  */
  readonly unique?: boolean | cdktf.IResolvable;
  /**
  * Validation settings for fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#validate TailordbType#validate}
  */
  readonly validate?: TailordbTypeFieldsFieldsValidate[] | cdktf.IResolvable;
  /**
  * Whether the field is a vector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#vector TailordbType#vector}
  */
  readonly vector?: boolean | cdktf.IResolvable;
}

export function tailordbTypeFieldsFieldsToTerraform(struct?: TailordbTypeFieldsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_values: cdktf.listMapper(tailordbTypeFieldsFieldsAllowedValuesToTerraform, false)(struct!.allowedValues),
    array: cdktf.booleanToTerraform(struct!.array),
    description: cdktf.stringToTerraform(struct!.description),
    foreign_key: tailordbTypeFieldsFieldsForeignKeyToTerraform(struct!.foreignKey),
    hooks: tailordbTypeFieldsFieldsHooksToTerraform(struct!.hooks),
    index: cdktf.booleanToTerraform(struct!.index),
    required: cdktf.booleanToTerraform(struct!.required),
    serial: tailordbTypeFieldsFieldsSerialToTerraform(struct!.serial),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    unique: cdktf.booleanToTerraform(struct!.unique),
    validate: cdktf.listMapper(tailordbTypeFieldsFieldsValidateToTerraform, false)(struct!.validate),
    vector: cdktf.booleanToTerraform(struct!.vector),
  }
}


export function tailordbTypeFieldsFieldsToHclTerraform(struct?: TailordbTypeFieldsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_values: {
      value: cdktf.listMapperHcl(tailordbTypeFieldsFieldsAllowedValuesToHclTerraform, false)(struct!.allowedValues),
      isBlock: true,
      type: "list",
      storageClassType: "TailordbTypeFieldsFieldsAllowedValuesList",
    },
    array: {
      value: cdktf.booleanToHclTerraform(struct!.array),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    foreign_key: {
      value: tailordbTypeFieldsFieldsForeignKeyToHclTerraform(struct!.foreignKey),
      isBlock: true,
      type: "struct",
      storageClassType: "TailordbTypeFieldsFieldsForeignKey",
    },
    hooks: {
      value: tailordbTypeFieldsFieldsHooksToHclTerraform(struct!.hooks),
      isBlock: true,
      type: "struct",
      storageClassType: "TailordbTypeFieldsFieldsHooks",
    },
    index: {
      value: cdktf.booleanToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    serial: {
      value: tailordbTypeFieldsFieldsSerialToHclTerraform(struct!.serial),
      isBlock: true,
      type: "struct",
      storageClassType: "TailordbTypeFieldsFieldsSerial",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique: {
      value: cdktf.booleanToHclTerraform(struct!.unique),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate: {
      value: cdktf.listMapperHcl(tailordbTypeFieldsFieldsValidateToHclTerraform, false)(struct!.validate),
      isBlock: true,
      type: "list",
      storageClassType: "TailordbTypeFieldsFieldsValidateList",
    },
    vector: {
      value: cdktf.booleanToHclTerraform(struct!.vector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeFieldsFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TailordbTypeFieldsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues?.internalValue;
    }
    if (this._array !== undefined) {
      hasAnyValues = true;
      internalValueResult.array = this._array;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._foreignKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreignKey = this._foreignKey?.internalValue;
    }
    if (this._hooks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hooks = this._hooks?.internalValue;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._serial?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial?.internalValue;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unique !== undefined) {
      hasAnyValues = true;
      internalValueResult.unique = this._unique;
    }
    if (this._validate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate?.internalValue;
    }
    if (this._vector !== undefined) {
      hasAnyValues = true;
      internalValueResult.vector = this._vector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeFieldsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues.internalValue = undefined;
      this._array = undefined;
      this._description = undefined;
      this._foreignKey.internalValue = undefined;
      this._hooks.internalValue = undefined;
      this._index = undefined;
      this._required = undefined;
      this._serial.internalValue = undefined;
      this._source = undefined;
      this._type = undefined;
      this._unique = undefined;
      this._validate.internalValue = undefined;
      this._vector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues.internalValue = value.allowedValues;
      this._array = value.array;
      this._description = value.description;
      this._foreignKey.internalValue = value.foreignKey;
      this._hooks.internalValue = value.hooks;
      this._index = value.index;
      this._required = value.required;
      this._serial.internalValue = value.serial;
      this._source = value.source;
      this._type = value.type;
      this._unique = value.unique;
      this._validate.internalValue = value.validate;
      this._vector = value.vector;
    }
  }

  // allowed_values - computed: false, optional: true, required: false
  private _allowedValues = new TailordbTypeFieldsFieldsAllowedValuesList(this, "allowed_values", false);
  public get allowedValues() {
    return this._allowedValues;
  }
  public putAllowedValues(value: TailordbTypeFieldsFieldsAllowedValues[] | cdktf.IResolvable) {
    this._allowedValues.internalValue = value;
  }
  public resetAllowedValues() {
    this._allowedValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues.internalValue;
  }

  // array - computed: false, optional: true, required: false
  private _array?: boolean | cdktf.IResolvable; 
  public get array() {
    return this.getBooleanAttribute('array');
  }
  public set array(value: boolean | cdktf.IResolvable) {
    this._array = value;
  }
  public resetArray() {
    this._array = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // foreign_key - computed: false, optional: true, required: false
  private _foreignKey = new TailordbTypeFieldsFieldsForeignKeyOutputReference(this, "foreign_key");
  public get foreignKey() {
    return this._foreignKey;
  }
  public putForeignKey(value: TailordbTypeFieldsFieldsForeignKey) {
    this._foreignKey.internalValue = value;
  }
  public resetForeignKey() {
    this._foreignKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreignKeyInput() {
    return this._foreignKey.internalValue;
  }

  // hooks - computed: false, optional: true, required: false
  private _hooks = new TailordbTypeFieldsFieldsHooksOutputReference(this, "hooks");
  public get hooks() {
    return this._hooks;
  }
  public putHooks(value: TailordbTypeFieldsFieldsHooks) {
    this._hooks.internalValue = value;
  }
  public resetHooks() {
    this._hooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hooksInput() {
    return this._hooks.internalValue;
  }

  // index - computed: false, optional: true, required: false
  private _index?: boolean | cdktf.IResolvable; 
  public get index() {
    return this.getBooleanAttribute('index');
  }
  public set index(value: boolean | cdktf.IResolvable) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // serial - computed: false, optional: true, required: false
  private _serial = new TailordbTypeFieldsFieldsSerialOutputReference(this, "serial");
  public get serial() {
    return this._serial;
  }
  public putSerial(value: TailordbTypeFieldsFieldsSerial) {
    this._serial.internalValue = value;
  }
  public resetSerial() {
    this._serial.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unique - computed: false, optional: true, required: false
  private _unique?: boolean | cdktf.IResolvable; 
  public get unique() {
    return this.getBooleanAttribute('unique');
  }
  public set unique(value: boolean | cdktf.IResolvable) {
    this._unique = value;
  }
  public resetUnique() {
    this._unique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueInput() {
    return this._unique;
  }

  // validate - computed: false, optional: true, required: false
  private _validate = new TailordbTypeFieldsFieldsValidateList(this, "validate", false);
  public get validate() {
    return this._validate;
  }
  public putValidate(value: TailordbTypeFieldsFieldsValidate[] | cdktf.IResolvable) {
    this._validate.internalValue = value;
  }
  public resetValidate() {
    this._validate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate.internalValue;
  }

  // vector - computed: false, optional: true, required: false
  private _vector?: boolean | cdktf.IResolvable; 
  public get vector() {
    return this.getBooleanAttribute('vector');
  }
  public set vector(value: boolean | cdktf.IResolvable) {
    this._vector = value;
  }
  public resetVector() {
    this._vector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorInput() {
    return this._vector;
  }
}

export class TailordbTypeFieldsFieldsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: TailordbTypeFieldsFields } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): TailordbTypeFieldsFieldsOutputReference {
    return new TailordbTypeFieldsFieldsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TailordbTypeFieldsForeignKey {
  /**
  * The field of the foreign key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#field TailordbType#field}
  */
  readonly field?: string;
  /**
  * The type of the foreign key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#type TailordbType#type}
  */
  readonly type: string;
}

export function tailordbTypeFieldsForeignKeyToTerraform(struct?: TailordbTypeFieldsForeignKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function tailordbTypeFieldsForeignKeyToHclTerraform(struct?: TailordbTypeFieldsForeignKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeFieldsForeignKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TailordbTypeFieldsForeignKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeFieldsForeignKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._type = value.type;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface TailordbTypeFieldsHooks {
  /**
  * The JavaScript code to evaluate for create hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#create TailordbType#create}
  */
  readonly create?: string;
  /**
  * The CEL expression to evaluate for create hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#create_expr TailordbType#create_expr}
  */
  readonly createExpr?: string;
  /**
  * The JavaScript code to evaluate for update hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#update TailordbType#update}
  */
  readonly update?: string;
  /**
  * The CEL expression to evaluate for update hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#update_expr TailordbType#update_expr}
  */
  readonly updateExpr?: string;
}

export function tailordbTypeFieldsHooksToTerraform(struct?: TailordbTypeFieldsHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    create_expr: cdktf.stringToTerraform(struct!.createExpr),
    update: cdktf.stringToTerraform(struct!.update),
    update_expr: cdktf.stringToTerraform(struct!.updateExpr),
  }
}


export function tailordbTypeFieldsHooksToHclTerraform(struct?: TailordbTypeFieldsHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_expr: {
      value: cdktf.stringToHclTerraform(struct!.createExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_expr: {
      value: cdktf.stringToHclTerraform(struct!.updateExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeFieldsHooksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TailordbTypeFieldsHooks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._createExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.createExpr = this._createExpr;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    if (this._updateExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateExpr = this._updateExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeFieldsHooks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._createExpr = undefined;
      this._update = undefined;
      this._updateExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._createExpr = value.createExpr;
      this._update = value.update;
      this._updateExpr = value.updateExpr;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // create_expr - computed: false, optional: true, required: false
  private _createExpr?: string; 
  public get createExpr() {
    return this.getStringAttribute('create_expr');
  }
  public set createExpr(value: string) {
    this._createExpr = value;
  }
  public resetCreateExpr() {
    this._createExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createExprInput() {
    return this._createExpr;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }

  // update_expr - computed: false, optional: true, required: false
  private _updateExpr?: string; 
  public get updateExpr() {
    return this.getStringAttribute('update_expr');
  }
  public set updateExpr(value: string) {
    this._updateExpr = value;
  }
  public resetUpdateExpr() {
    this._updateExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateExprInput() {
    return this._updateExpr;
  }
}
export interface TailordbTypeFieldsSerial {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#format TailordbType#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#max_value TailordbType#max_value}
  */
  readonly maxValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#start TailordbType#start}
  */
  readonly start: number;
}

export function tailordbTypeFieldsSerialToTerraform(struct?: TailordbTypeFieldsSerial | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    max_value: cdktf.numberToTerraform(struct!.maxValue),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function tailordbTypeFieldsSerialToHclTerraform(struct?: TailordbTypeFieldsSerial | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_value: {
      value: cdktf.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeFieldsSerialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TailordbTypeFieldsSerial | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeFieldsSerial | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._maxValue = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._maxValue = value.maxValue;
      this._start = value.start;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface TailordbTypeFieldsValidate {
  /**
  * Action type. Supported values are 'allow', 'deny'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#action TailordbType#action}
  */
  readonly action: string;
  /**
  * The error message to return when validation fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#error_message TailordbType#error_message}
  */
  readonly errorMessage?: string;
  /**
  * The CEL expression to evaluate for validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#expr TailordbType#expr}
  */
  readonly expr?: string;
  /**
  * The JavaScript code to evaluate for validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#script TailordbType#script}
  */
  readonly script?: string;
}

export function tailordbTypeFieldsValidateToTerraform(struct?: TailordbTypeFieldsValidate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    error_message: cdktf.stringToTerraform(struct!.errorMessage),
    expr: cdktf.stringToTerraform(struct!.expr),
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function tailordbTypeFieldsValidateToHclTerraform(struct?: TailordbTypeFieldsValidate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_message: {
      value: cdktf.stringToHclTerraform(struct!.errorMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expr: {
      value: cdktf.stringToHclTerraform(struct!.expr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeFieldsValidateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TailordbTypeFieldsValidate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._errorMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorMessage = this._errorMessage;
    }
    if (this._expr !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeFieldsValidate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._errorMessage = undefined;
      this._expr = undefined;
      this._script = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._errorMessage = value.errorMessage;
      this._expr = value.expr;
      this._script = value.script;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // error_message - computed: false, optional: true, required: false
  private _errorMessage?: string; 
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
  public set errorMessage(value: string) {
    this._errorMessage = value;
  }
  public resetErrorMessage() {
    this._errorMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMessageInput() {
    return this._errorMessage;
  }

  // expr - computed: false, optional: true, required: false
  private _expr?: string; 
  public get expr() {
    return this.getStringAttribute('expr');
  }
  public set expr(value: string) {
    this._expr = value;
  }
  public resetExpr() {
    this._expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr;
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }
}

export class TailordbTypeFieldsValidateList extends cdktf.ComplexList {
  public internalValue? : TailordbTypeFieldsValidate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TailordbTypeFieldsValidateOutputReference {
    return new TailordbTypeFieldsValidateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TailordbTypeFields {
  /**
  * Allowed values for enum fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#allowed_values TailordbType#allowed_values}
  */
  readonly allowedValues?: TailordbTypeFieldsAllowedValues[] | cdktf.IResolvable;
  /**
  * Whether the field is an array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#array TailordbType#array}
  */
  readonly array?: boolean | cdktf.IResolvable;
  /**
  * The description of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#description TailordbType#description}
  */
  readonly description?: string;
  /**
  * Fields for this TailorDBType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#fields TailordbType#fields}
  */
  readonly fields?: { [key: string]: TailordbTypeFieldsFields } | cdktf.IResolvable;
  /**
  * Foreign key settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#foreign_key TailordbType#foreign_key}
  */
  readonly foreignKey?: TailordbTypeFieldsForeignKey;
  /**
  * Hooks settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#hooks TailordbType#hooks}
  */
  readonly hooks?: TailordbTypeFieldsHooks;
  /**
  * Whether the field is indexed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#index TailordbType#index}
  */
  readonly index?: boolean | cdktf.IResolvable;
  /**
  * Whether the field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#required TailordbType#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#serial TailordbType#serial}
  */
  readonly serial?: TailordbTypeFieldsSerial;
  /**
  * The source of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#source TailordbType#source}
  */
  readonly source?: string;
  /**
  * The type of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#type TailordbType#type}
  */
  readonly type: string;
  /**
  * Whether the field is unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#unique TailordbType#unique}
  */
  readonly unique?: boolean | cdktf.IResolvable;
  /**
  * Validation settings for fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#validate TailordbType#validate}
  */
  readonly validate?: TailordbTypeFieldsValidate[] | cdktf.IResolvable;
  /**
  * Whether the field is a vector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#vector TailordbType#vector}
  */
  readonly vector?: boolean | cdktf.IResolvable;
}

export function tailordbTypeFieldsToTerraform(struct?: TailordbTypeFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_values: cdktf.listMapper(tailordbTypeFieldsAllowedValuesToTerraform, false)(struct!.allowedValues),
    array: cdktf.booleanToTerraform(struct!.array),
    description: cdktf.stringToTerraform(struct!.description),
    fields: cdktf.hashMapper(tailordbTypeFieldsFieldsToTerraform)(struct!.fields),
    foreign_key: tailordbTypeFieldsForeignKeyToTerraform(struct!.foreignKey),
    hooks: tailordbTypeFieldsHooksToTerraform(struct!.hooks),
    index: cdktf.booleanToTerraform(struct!.index),
    required: cdktf.booleanToTerraform(struct!.required),
    serial: tailordbTypeFieldsSerialToTerraform(struct!.serial),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    unique: cdktf.booleanToTerraform(struct!.unique),
    validate: cdktf.listMapper(tailordbTypeFieldsValidateToTerraform, false)(struct!.validate),
    vector: cdktf.booleanToTerraform(struct!.vector),
  }
}


export function tailordbTypeFieldsToHclTerraform(struct?: TailordbTypeFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_values: {
      value: cdktf.listMapperHcl(tailordbTypeFieldsAllowedValuesToHclTerraform, false)(struct!.allowedValues),
      isBlock: true,
      type: "list",
      storageClassType: "TailordbTypeFieldsAllowedValuesList",
    },
    array: {
      value: cdktf.booleanToHclTerraform(struct!.array),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktf.hashMapperHcl(tailordbTypeFieldsFieldsToHclTerraform)(struct!.fields),
      isBlock: true,
      type: "map",
      storageClassType: "TailordbTypeFieldsFieldsMap",
    },
    foreign_key: {
      value: tailordbTypeFieldsForeignKeyToHclTerraform(struct!.foreignKey),
      isBlock: true,
      type: "struct",
      storageClassType: "TailordbTypeFieldsForeignKey",
    },
    hooks: {
      value: tailordbTypeFieldsHooksToHclTerraform(struct!.hooks),
      isBlock: true,
      type: "struct",
      storageClassType: "TailordbTypeFieldsHooks",
    },
    index: {
      value: cdktf.booleanToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    serial: {
      value: tailordbTypeFieldsSerialToHclTerraform(struct!.serial),
      isBlock: true,
      type: "struct",
      storageClassType: "TailordbTypeFieldsSerial",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique: {
      value: cdktf.booleanToHclTerraform(struct!.unique),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate: {
      value: cdktf.listMapperHcl(tailordbTypeFieldsValidateToHclTerraform, false)(struct!.validate),
      isBlock: true,
      type: "list",
      storageClassType: "TailordbTypeFieldsValidateList",
    },
    vector: {
      value: cdktf.booleanToHclTerraform(struct!.vector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TailordbTypeFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues?.internalValue;
    }
    if (this._array !== undefined) {
      hasAnyValues = true;
      internalValueResult.array = this._array;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._foreignKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreignKey = this._foreignKey?.internalValue;
    }
    if (this._hooks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hooks = this._hooks?.internalValue;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._serial?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial?.internalValue;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unique !== undefined) {
      hasAnyValues = true;
      internalValueResult.unique = this._unique;
    }
    if (this._validate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate?.internalValue;
    }
    if (this._vector !== undefined) {
      hasAnyValues = true;
      internalValueResult.vector = this._vector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues.internalValue = undefined;
      this._array = undefined;
      this._description = undefined;
      this._fields.internalValue = undefined;
      this._foreignKey.internalValue = undefined;
      this._hooks.internalValue = undefined;
      this._index = undefined;
      this._required = undefined;
      this._serial.internalValue = undefined;
      this._source = undefined;
      this._type = undefined;
      this._unique = undefined;
      this._validate.internalValue = undefined;
      this._vector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues.internalValue = value.allowedValues;
      this._array = value.array;
      this._description = value.description;
      this._fields.internalValue = value.fields;
      this._foreignKey.internalValue = value.foreignKey;
      this._hooks.internalValue = value.hooks;
      this._index = value.index;
      this._required = value.required;
      this._serial.internalValue = value.serial;
      this._source = value.source;
      this._type = value.type;
      this._unique = value.unique;
      this._validate.internalValue = value.validate;
      this._vector = value.vector;
    }
  }

  // allowed_values - computed: false, optional: true, required: false
  private _allowedValues = new TailordbTypeFieldsAllowedValuesList(this, "allowed_values", false);
  public get allowedValues() {
    return this._allowedValues;
  }
  public putAllowedValues(value: TailordbTypeFieldsAllowedValues[] | cdktf.IResolvable) {
    this._allowedValues.internalValue = value;
  }
  public resetAllowedValues() {
    this._allowedValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues.internalValue;
  }

  // array - computed: false, optional: true, required: false
  private _array?: boolean | cdktf.IResolvable; 
  public get array() {
    return this.getBooleanAttribute('array');
  }
  public set array(value: boolean | cdktf.IResolvable) {
    this._array = value;
  }
  public resetArray() {
    this._array = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new TailordbTypeFieldsFieldsMap(this, "fields");
  public get fields() {
    return this._fields;
  }
  public putFields(value: { [key: string]: TailordbTypeFieldsFields } | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // foreign_key - computed: false, optional: true, required: false
  private _foreignKey = new TailordbTypeFieldsForeignKeyOutputReference(this, "foreign_key");
  public get foreignKey() {
    return this._foreignKey;
  }
  public putForeignKey(value: TailordbTypeFieldsForeignKey) {
    this._foreignKey.internalValue = value;
  }
  public resetForeignKey() {
    this._foreignKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreignKeyInput() {
    return this._foreignKey.internalValue;
  }

  // hooks - computed: false, optional: true, required: false
  private _hooks = new TailordbTypeFieldsHooksOutputReference(this, "hooks");
  public get hooks() {
    return this._hooks;
  }
  public putHooks(value: TailordbTypeFieldsHooks) {
    this._hooks.internalValue = value;
  }
  public resetHooks() {
    this._hooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hooksInput() {
    return this._hooks.internalValue;
  }

  // index - computed: false, optional: true, required: false
  private _index?: boolean | cdktf.IResolvable; 
  public get index() {
    return this.getBooleanAttribute('index');
  }
  public set index(value: boolean | cdktf.IResolvable) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // serial - computed: false, optional: true, required: false
  private _serial = new TailordbTypeFieldsSerialOutputReference(this, "serial");
  public get serial() {
    return this._serial;
  }
  public putSerial(value: TailordbTypeFieldsSerial) {
    this._serial.internalValue = value;
  }
  public resetSerial() {
    this._serial.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unique - computed: false, optional: true, required: false
  private _unique?: boolean | cdktf.IResolvable; 
  public get unique() {
    return this.getBooleanAttribute('unique');
  }
  public set unique(value: boolean | cdktf.IResolvable) {
    this._unique = value;
  }
  public resetUnique() {
    this._unique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueInput() {
    return this._unique;
  }

  // validate - computed: false, optional: true, required: false
  private _validate = new TailordbTypeFieldsValidateList(this, "validate", false);
  public get validate() {
    return this._validate;
  }
  public putValidate(value: TailordbTypeFieldsValidate[] | cdktf.IResolvable) {
    this._validate.internalValue = value;
  }
  public resetValidate() {
    this._validate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate.internalValue;
  }

  // vector - computed: false, optional: true, required: false
  private _vector?: boolean | cdktf.IResolvable; 
  public get vector() {
    return this.getBooleanAttribute('vector');
  }
  public set vector(value: boolean | cdktf.IResolvable) {
    this._vector = value;
  }
  public resetVector() {
    this._vector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorInput() {
    return this._vector;
  }
}

export class TailordbTypeFieldsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: TailordbTypeFields } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): TailordbTypeFieldsOutputReference {
    return new TailordbTypeFieldsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TailordbTypeIndexes {
  /**
  * The list of field names to create the index on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#field_names TailordbType#field_names}
  */
  readonly fieldNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#unique TailordbType#unique}
  */
  readonly unique?: boolean | cdktf.IResolvable;
}

export function tailordbTypeIndexesToTerraform(struct?: TailordbTypeIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fieldNames),
    unique: cdktf.booleanToTerraform(struct!.unique),
  }
}


export function tailordbTypeIndexesToHclTerraform(struct?: TailordbTypeIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fieldNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    unique: {
      value: cdktf.booleanToHclTerraform(struct!.unique),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeIndexesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TailordbTypeIndexes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldNames = this._fieldNames;
    }
    if (this._unique !== undefined) {
      hasAnyValues = true;
      internalValueResult.unique = this._unique;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeIndexes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldNames = undefined;
      this._unique = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldNames = value.fieldNames;
      this._unique = value.unique;
    }
  }

  // field_names - computed: false, optional: false, required: true
  private _fieldNames?: string[]; 
  public get fieldNames() {
    return this.getListAttribute('field_names');
  }
  public set fieldNames(value: string[]) {
    this._fieldNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNamesInput() {
    return this._fieldNames;
  }

  // unique - computed: false, optional: true, required: false
  private _unique?: boolean | cdktf.IResolvable; 
  public get unique() {
    return this.getBooleanAttribute('unique');
  }
  public set unique(value: boolean | cdktf.IResolvable) {
    this._unique = value;
  }
  public resetUnique() {
    this._unique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueInput() {
    return this._unique;
  }
}

export class TailordbTypeIndexesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: TailordbTypeIndexes } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): TailordbTypeIndexesOutputReference {
    return new TailordbTypeIndexesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TailordbTypeRecordPermissionDelete {
  /**
  * A single attribute for this permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#attribute TailordbType#attribute}
  */
  readonly attribute?: string;
  /**
  * The list of attributes for this permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#attributes TailordbType#attributes}
  */
  readonly attributes?: string[];
  /**
  * Define permit type, 'allow' or 'deny'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#permit TailordbType#permit}
  */
  readonly permit: string;
}

export function tailordbTypeRecordPermissionDeleteToTerraform(struct?: TailordbTypeRecordPermissionDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributes),
    permit: cdktf.stringToTerraform(struct!.permit),
  }
}


export function tailordbTypeRecordPermissionDeleteToHclTerraform(struct?: TailordbTypeRecordPermissionDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    permit: {
      value: cdktf.stringToHclTerraform(struct!.permit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeRecordPermissionDeleteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TailordbTypeRecordPermissionDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._permit !== undefined) {
      hasAnyValues = true;
      internalValueResult.permit = this._permit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeRecordPermissionDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._attributes = undefined;
      this._permit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._attributes = value.attributes;
      this._permit = value.permit;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return this.getListAttribute('attributes');
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // permit - computed: false, optional: false, required: true
  private _permit?: string; 
  public get permit() {
    return this.getStringAttribute('permit');
  }
  public set permit(value: string) {
    this._permit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permitInput() {
    return this._permit;
  }
}

export class TailordbTypeRecordPermissionDeleteList extends cdktf.ComplexList {
  public internalValue? : TailordbTypeRecordPermissionDelete[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TailordbTypeRecordPermissionDeleteOutputReference {
    return new TailordbTypeRecordPermissionDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TailordbTypeRecordPermissionRead {
  /**
  * A single attribute for this permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#attribute TailordbType#attribute}
  */
  readonly attribute?: string;
  /**
  * The list of attributes for this permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#attributes TailordbType#attributes}
  */
  readonly attributes?: string[];
  /**
  * Define permit type, 'allow' or 'deny'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#permit TailordbType#permit}
  */
  readonly permit: string;
}

export function tailordbTypeRecordPermissionReadToTerraform(struct?: TailordbTypeRecordPermissionRead | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributes),
    permit: cdktf.stringToTerraform(struct!.permit),
  }
}


export function tailordbTypeRecordPermissionReadToHclTerraform(struct?: TailordbTypeRecordPermissionRead | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    permit: {
      value: cdktf.stringToHclTerraform(struct!.permit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeRecordPermissionReadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TailordbTypeRecordPermissionRead | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._permit !== undefined) {
      hasAnyValues = true;
      internalValueResult.permit = this._permit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeRecordPermissionRead | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._attributes = undefined;
      this._permit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._attributes = value.attributes;
      this._permit = value.permit;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return this.getListAttribute('attributes');
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // permit - computed: false, optional: false, required: true
  private _permit?: string; 
  public get permit() {
    return this.getStringAttribute('permit');
  }
  public set permit(value: string) {
    this._permit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permitInput() {
    return this._permit;
  }
}

export class TailordbTypeRecordPermissionReadList extends cdktf.ComplexList {
  public internalValue? : TailordbTypeRecordPermissionRead[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TailordbTypeRecordPermissionReadOutputReference {
    return new TailordbTypeRecordPermissionReadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TailordbTypeRecordPermissionUpdate {
  /**
  * A single attribute for this permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#attribute TailordbType#attribute}
  */
  readonly attribute?: string;
  /**
  * The list of attributes for this permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#attributes TailordbType#attributes}
  */
  readonly attributes?: string[];
  /**
  * Define permit type, 'allow' or 'deny'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#permit TailordbType#permit}
  */
  readonly permit: string;
}

export function tailordbTypeRecordPermissionUpdateToTerraform(struct?: TailordbTypeRecordPermissionUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributes),
    permit: cdktf.stringToTerraform(struct!.permit),
  }
}


export function tailordbTypeRecordPermissionUpdateToHclTerraform(struct?: TailordbTypeRecordPermissionUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    permit: {
      value: cdktf.stringToHclTerraform(struct!.permit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeRecordPermissionUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TailordbTypeRecordPermissionUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._permit !== undefined) {
      hasAnyValues = true;
      internalValueResult.permit = this._permit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeRecordPermissionUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._attributes = undefined;
      this._permit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._attributes = value.attributes;
      this._permit = value.permit;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return this.getListAttribute('attributes');
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // permit - computed: false, optional: false, required: true
  private _permit?: string; 
  public get permit() {
    return this.getStringAttribute('permit');
  }
  public set permit(value: string) {
    this._permit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permitInput() {
    return this._permit;
  }
}

export class TailordbTypeRecordPermissionUpdateList extends cdktf.ComplexList {
  public internalValue? : TailordbTypeRecordPermissionUpdate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TailordbTypeRecordPermissionUpdateOutputReference {
    return new TailordbTypeRecordPermissionUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TailordbTypeRecordPermission {
  /**
  * Permission settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#delete TailordbType#delete}
  */
  readonly delete?: TailordbTypeRecordPermissionDelete[] | cdktf.IResolvable;
  /**
  * Permission settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#read TailordbType#read}
  */
  readonly read?: TailordbTypeRecordPermissionRead[] | cdktf.IResolvable;
  /**
  * Permission settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#update TailordbType#update}
  */
  readonly update?: TailordbTypeRecordPermissionUpdate[] | cdktf.IResolvable;
}

export function tailordbTypeRecordPermissionToTerraform(struct?: TailordbTypeRecordPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.listMapper(tailordbTypeRecordPermissionDeleteToTerraform, false)(struct!.delete),
    read: cdktf.listMapper(tailordbTypeRecordPermissionReadToTerraform, false)(struct!.read),
    update: cdktf.listMapper(tailordbTypeRecordPermissionUpdateToTerraform, false)(struct!.update),
  }
}


export function tailordbTypeRecordPermissionToHclTerraform(struct?: TailordbTypeRecordPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.listMapperHcl(tailordbTypeRecordPermissionDeleteToHclTerraform, false)(struct!.delete),
      isBlock: true,
      type: "list",
      storageClassType: "TailordbTypeRecordPermissionDeleteList",
    },
    read: {
      value: cdktf.listMapperHcl(tailordbTypeRecordPermissionReadToHclTerraform, false)(struct!.read),
      isBlock: true,
      type: "list",
      storageClassType: "TailordbTypeRecordPermissionReadList",
    },
    update: {
      value: cdktf.listMapperHcl(tailordbTypeRecordPermissionUpdateToHclTerraform, false)(struct!.update),
      isBlock: true,
      type: "list",
      storageClassType: "TailordbTypeRecordPermissionUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeRecordPermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TailordbTypeRecordPermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete?.internalValue;
    }
    if (this._read?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read?.internalValue;
    }
    if (this._update?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeRecordPermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete.internalValue = undefined;
      this._read.internalValue = undefined;
      this._update.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete.internalValue = value.delete;
      this._read.internalValue = value.read;
      this._update.internalValue = value.update;
    }
  }

  // delete - computed: false, optional: true, required: false
  private _delete = new TailordbTypeRecordPermissionDeleteList(this, "delete", false);
  public get delete() {
    return this._delete;
  }
  public putDelete(value: TailordbTypeRecordPermissionDelete[] | cdktf.IResolvable) {
    this._delete.internalValue = value;
  }
  public resetDelete() {
    this._delete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete.internalValue;
  }

  // read - computed: false, optional: true, required: false
  private _read = new TailordbTypeRecordPermissionReadList(this, "read", false);
  public get read() {
    return this._read;
  }
  public putRead(value: TailordbTypeRecordPermissionRead[] | cdktf.IResolvable) {
    this._read.internalValue = value;
  }
  public resetRead() {
    this._read.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read.internalValue;
  }

  // update - computed: false, optional: true, required: false
  private _update = new TailordbTypeRecordPermissionUpdateList(this, "update", false);
  public get update() {
    return this._update;
  }
  public putUpdate(value: TailordbTypeRecordPermissionUpdate[] | cdktf.IResolvable) {
    this._update.internalValue = value;
  }
  public resetUpdate() {
    this._update.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update.internalValue;
  }
}
export interface TailordbTypeSettings {
  /**
  * enable aggregation for this TailorDBType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#aggregation TailordbType#aggregation}
  */
  readonly aggregation?: boolean | cdktf.IResolvable;
  /**
  * enable bulk upsert for this TailorDBType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#bulk_upsert TailordbType#bulk_upsert}
  */
  readonly bulkUpsert?: boolean | cdktf.IResolvable;
  /**
  * The default query limit size for this TailorDBType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#default_query_limit_size TailordbType#default_query_limit_size}
  */
  readonly defaultQueryLimitSize?: number;
  /**
  * enable draft for this TailorDBType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#draft TailordbType#draft}
  */
  readonly draft?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of records to upsert in a single bulk upsert operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#max_bulk_upsert_size TailordbType#max_bulk_upsert_size}
  */
  readonly maxBulkUpsertSize?: number;
  /**
  * The plural form of this TailorDBType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#plural_form TailordbType#plural_form}
  */
  readonly pluralForm?: string;
  /**
  * enable publish record events for this TailorDBType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#publish_record_events TailordbType#publish_record_events}
  */
  readonly publishRecordEvents?: boolean | cdktf.IResolvable;
}

export function tailordbTypeSettingsToTerraform(struct?: TailordbTypeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.booleanToTerraform(struct!.aggregation),
    bulk_upsert: cdktf.booleanToTerraform(struct!.bulkUpsert),
    default_query_limit_size: cdktf.numberToTerraform(struct!.defaultQueryLimitSize),
    draft: cdktf.booleanToTerraform(struct!.draft),
    max_bulk_upsert_size: cdktf.numberToTerraform(struct!.maxBulkUpsertSize),
    plural_form: cdktf.stringToTerraform(struct!.pluralForm),
    publish_record_events: cdktf.booleanToTerraform(struct!.publishRecordEvents),
  }
}


export function tailordbTypeSettingsToHclTerraform(struct?: TailordbTypeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.booleanToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bulk_upsert: {
      value: cdktf.booleanToHclTerraform(struct!.bulkUpsert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_query_limit_size: {
      value: cdktf.numberToHclTerraform(struct!.defaultQueryLimitSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    draft: {
      value: cdktf.booleanToHclTerraform(struct!.draft),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_bulk_upsert_size: {
      value: cdktf.numberToHclTerraform(struct!.maxBulkUpsertSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    plural_form: {
      value: cdktf.stringToHclTerraform(struct!.pluralForm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publish_record_events: {
      value: cdktf.booleanToHclTerraform(struct!.publishRecordEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TailordbTypeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._bulkUpsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.bulkUpsert = this._bulkUpsert;
    }
    if (this._defaultQueryLimitSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultQueryLimitSize = this._defaultQueryLimitSize;
    }
    if (this._draft !== undefined) {
      hasAnyValues = true;
      internalValueResult.draft = this._draft;
    }
    if (this._maxBulkUpsertSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBulkUpsertSize = this._maxBulkUpsertSize;
    }
    if (this._pluralForm !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluralForm = this._pluralForm;
    }
    if (this._publishRecordEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishRecordEvents = this._publishRecordEvents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._bulkUpsert = undefined;
      this._defaultQueryLimitSize = undefined;
      this._draft = undefined;
      this._maxBulkUpsertSize = undefined;
      this._pluralForm = undefined;
      this._publishRecordEvents = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._bulkUpsert = value.bulkUpsert;
      this._defaultQueryLimitSize = value.defaultQueryLimitSize;
      this._draft = value.draft;
      this._maxBulkUpsertSize = value.maxBulkUpsertSize;
      this._pluralForm = value.pluralForm;
      this._publishRecordEvents = value.publishRecordEvents;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: boolean | cdktf.IResolvable; 
  public get aggregation() {
    return this.getBooleanAttribute('aggregation');
  }
  public set aggregation(value: boolean | cdktf.IResolvable) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // bulk_upsert - computed: false, optional: true, required: false
  private _bulkUpsert?: boolean | cdktf.IResolvable; 
  public get bulkUpsert() {
    return this.getBooleanAttribute('bulk_upsert');
  }
  public set bulkUpsert(value: boolean | cdktf.IResolvable) {
    this._bulkUpsert = value;
  }
  public resetBulkUpsert() {
    this._bulkUpsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkUpsertInput() {
    return this._bulkUpsert;
  }

  // default_query_limit_size - computed: false, optional: true, required: false
  private _defaultQueryLimitSize?: number; 
  public get defaultQueryLimitSize() {
    return this.getNumberAttribute('default_query_limit_size');
  }
  public set defaultQueryLimitSize(value: number) {
    this._defaultQueryLimitSize = value;
  }
  public resetDefaultQueryLimitSize() {
    this._defaultQueryLimitSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultQueryLimitSizeInput() {
    return this._defaultQueryLimitSize;
  }

  // draft - computed: false, optional: true, required: false
  private _draft?: boolean | cdktf.IResolvable; 
  public get draft() {
    return this.getBooleanAttribute('draft');
  }
  public set draft(value: boolean | cdktf.IResolvable) {
    this._draft = value;
  }
  public resetDraft() {
    this._draft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get draftInput() {
    return this._draft;
  }

  // max_bulk_upsert_size - computed: false, optional: true, required: false
  private _maxBulkUpsertSize?: number; 
  public get maxBulkUpsertSize() {
    return this.getNumberAttribute('max_bulk_upsert_size');
  }
  public set maxBulkUpsertSize(value: number) {
    this._maxBulkUpsertSize = value;
  }
  public resetMaxBulkUpsertSize() {
    this._maxBulkUpsertSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBulkUpsertSizeInput() {
    return this._maxBulkUpsertSize;
  }

  // plural_form - computed: false, optional: true, required: false
  private _pluralForm?: string; 
  public get pluralForm() {
    return this.getStringAttribute('plural_form');
  }
  public set pluralForm(value: string) {
    this._pluralForm = value;
  }
  public resetPluralForm() {
    this._pluralForm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluralFormInput() {
    return this._pluralForm;
  }

  // publish_record_events - computed: false, optional: true, required: false
  private _publishRecordEvents?: boolean | cdktf.IResolvable; 
  public get publishRecordEvents() {
    return this.getBooleanAttribute('publish_record_events');
  }
  public set publishRecordEvents(value: boolean | cdktf.IResolvable) {
    this._publishRecordEvents = value;
  }
  public resetPublishRecordEvents() {
    this._publishRecordEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishRecordEventsInput() {
    return this._publishRecordEvents;
  }
}
export interface TailordbTypeTypePermissionAdmin {
  /**
  * A single attribute for this permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#attribute TailordbType#attribute}
  */
  readonly attribute?: string;
  /**
  * The list of attributes for this permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#attributes TailordbType#attributes}
  */
  readonly attributes?: string[];
  /**
  * Define permit type, 'allow' or 'deny'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#permit TailordbType#permit}
  */
  readonly permit: string;
}

export function tailordbTypeTypePermissionAdminToTerraform(struct?: TailordbTypeTypePermissionAdmin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributes),
    permit: cdktf.stringToTerraform(struct!.permit),
  }
}


export function tailordbTypeTypePermissionAdminToHclTerraform(struct?: TailordbTypeTypePermissionAdmin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    permit: {
      value: cdktf.stringToHclTerraform(struct!.permit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeTypePermissionAdminOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TailordbTypeTypePermissionAdmin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._permit !== undefined) {
      hasAnyValues = true;
      internalValueResult.permit = this._permit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeTypePermissionAdmin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._attributes = undefined;
      this._permit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._attributes = value.attributes;
      this._permit = value.permit;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return this.getListAttribute('attributes');
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // permit - computed: false, optional: false, required: true
  private _permit?: string; 
  public get permit() {
    return this.getStringAttribute('permit');
  }
  public set permit(value: string) {
    this._permit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permitInput() {
    return this._permit;
  }
}

export class TailordbTypeTypePermissionAdminList extends cdktf.ComplexList {
  public internalValue? : TailordbTypeTypePermissionAdmin[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TailordbTypeTypePermissionAdminOutputReference {
    return new TailordbTypeTypePermissionAdminOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TailordbTypeTypePermissionCreate {
  /**
  * A single attribute for this permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#attribute TailordbType#attribute}
  */
  readonly attribute?: string;
  /**
  * The list of attributes for this permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#attributes TailordbType#attributes}
  */
  readonly attributes?: string[];
  /**
  * Define permit type, 'allow' or 'deny'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#permit TailordbType#permit}
  */
  readonly permit: string;
}

export function tailordbTypeTypePermissionCreateToTerraform(struct?: TailordbTypeTypePermissionCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributes),
    permit: cdktf.stringToTerraform(struct!.permit),
  }
}


export function tailordbTypeTypePermissionCreateToHclTerraform(struct?: TailordbTypeTypePermissionCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    permit: {
      value: cdktf.stringToHclTerraform(struct!.permit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeTypePermissionCreateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TailordbTypeTypePermissionCreate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._permit !== undefined) {
      hasAnyValues = true;
      internalValueResult.permit = this._permit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeTypePermissionCreate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._attributes = undefined;
      this._permit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._attributes = value.attributes;
      this._permit = value.permit;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return this.getListAttribute('attributes');
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // permit - computed: false, optional: false, required: true
  private _permit?: string; 
  public get permit() {
    return this.getStringAttribute('permit');
  }
  public set permit(value: string) {
    this._permit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permitInput() {
    return this._permit;
  }
}

export class TailordbTypeTypePermissionCreateList extends cdktf.ComplexList {
  public internalValue? : TailordbTypeTypePermissionCreate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TailordbTypeTypePermissionCreateOutputReference {
    return new TailordbTypeTypePermissionCreateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TailordbTypeTypePermissionDelete {
  /**
  * A single attribute for this permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#attribute TailordbType#attribute}
  */
  readonly attribute?: string;
  /**
  * The list of attributes for this permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#attributes TailordbType#attributes}
  */
  readonly attributes?: string[];
  /**
  * Define permit type, 'allow' or 'deny'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#permit TailordbType#permit}
  */
  readonly permit: string;
}

export function tailordbTypeTypePermissionDeleteToTerraform(struct?: TailordbTypeTypePermissionDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributes),
    permit: cdktf.stringToTerraform(struct!.permit),
  }
}


export function tailordbTypeTypePermissionDeleteToHclTerraform(struct?: TailordbTypeTypePermissionDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    permit: {
      value: cdktf.stringToHclTerraform(struct!.permit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeTypePermissionDeleteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TailordbTypeTypePermissionDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._permit !== undefined) {
      hasAnyValues = true;
      internalValueResult.permit = this._permit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeTypePermissionDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._attributes = undefined;
      this._permit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._attributes = value.attributes;
      this._permit = value.permit;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return this.getListAttribute('attributes');
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // permit - computed: false, optional: false, required: true
  private _permit?: string; 
  public get permit() {
    return this.getStringAttribute('permit');
  }
  public set permit(value: string) {
    this._permit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permitInput() {
    return this._permit;
  }
}

export class TailordbTypeTypePermissionDeleteList extends cdktf.ComplexList {
  public internalValue? : TailordbTypeTypePermissionDelete[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TailordbTypeTypePermissionDeleteOutputReference {
    return new TailordbTypeTypePermissionDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TailordbTypeTypePermissionRead {
  /**
  * A single attribute for this permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#attribute TailordbType#attribute}
  */
  readonly attribute?: string;
  /**
  * The list of attributes for this permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#attributes TailordbType#attributes}
  */
  readonly attributes?: string[];
  /**
  * Define permit type, 'allow' or 'deny'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#permit TailordbType#permit}
  */
  readonly permit: string;
}

export function tailordbTypeTypePermissionReadToTerraform(struct?: TailordbTypeTypePermissionRead | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributes),
    permit: cdktf.stringToTerraform(struct!.permit),
  }
}


export function tailordbTypeTypePermissionReadToHclTerraform(struct?: TailordbTypeTypePermissionRead | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    permit: {
      value: cdktf.stringToHclTerraform(struct!.permit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeTypePermissionReadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TailordbTypeTypePermissionRead | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._permit !== undefined) {
      hasAnyValues = true;
      internalValueResult.permit = this._permit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeTypePermissionRead | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._attributes = undefined;
      this._permit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._attributes = value.attributes;
      this._permit = value.permit;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return this.getListAttribute('attributes');
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // permit - computed: false, optional: false, required: true
  private _permit?: string; 
  public get permit() {
    return this.getStringAttribute('permit');
  }
  public set permit(value: string) {
    this._permit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permitInput() {
    return this._permit;
  }
}

export class TailordbTypeTypePermissionReadList extends cdktf.ComplexList {
  public internalValue? : TailordbTypeTypePermissionRead[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TailordbTypeTypePermissionReadOutputReference {
    return new TailordbTypeTypePermissionReadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TailordbTypeTypePermissionUpdate {
  /**
  * A single attribute for this permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#attribute TailordbType#attribute}
  */
  readonly attribute?: string;
  /**
  * The list of attributes for this permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#attributes TailordbType#attributes}
  */
  readonly attributes?: string[];
  /**
  * Define permit type, 'allow' or 'deny'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#permit TailordbType#permit}
  */
  readonly permit: string;
}

export function tailordbTypeTypePermissionUpdateToTerraform(struct?: TailordbTypeTypePermissionUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributes),
    permit: cdktf.stringToTerraform(struct!.permit),
  }
}


export function tailordbTypeTypePermissionUpdateToHclTerraform(struct?: TailordbTypeTypePermissionUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    permit: {
      value: cdktf.stringToHclTerraform(struct!.permit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeTypePermissionUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TailordbTypeTypePermissionUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._permit !== undefined) {
      hasAnyValues = true;
      internalValueResult.permit = this._permit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeTypePermissionUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._attributes = undefined;
      this._permit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._attributes = value.attributes;
      this._permit = value.permit;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return this.getListAttribute('attributes');
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // permit - computed: false, optional: false, required: true
  private _permit?: string; 
  public get permit() {
    return this.getStringAttribute('permit');
  }
  public set permit(value: string) {
    this._permit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permitInput() {
    return this._permit;
  }
}

export class TailordbTypeTypePermissionUpdateList extends cdktf.ComplexList {
  public internalValue? : TailordbTypeTypePermissionUpdate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TailordbTypeTypePermissionUpdateOutputReference {
    return new TailordbTypeTypePermissionUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TailordbTypeTypePermission {
  /**
  * Permission settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#admin TailordbType#admin}
  */
  readonly admin?: TailordbTypeTypePermissionAdmin[] | cdktf.IResolvable;
  /**
  * Permission settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#create TailordbType#create}
  */
  readonly create?: TailordbTypeTypePermissionCreate[] | cdktf.IResolvable;
  /**
  * Permission settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#delete TailordbType#delete}
  */
  readonly delete?: TailordbTypeTypePermissionDelete[] | cdktf.IResolvable;
  /**
  * Permission settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#read TailordbType#read}
  */
  readonly read?: TailordbTypeTypePermissionRead[] | cdktf.IResolvable;
  /**
  * Permission settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#update TailordbType#update}
  */
  readonly update?: TailordbTypeTypePermissionUpdate[] | cdktf.IResolvable;
}

export function tailordbTypeTypePermissionToTerraform(struct?: TailordbTypeTypePermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin: cdktf.listMapper(tailordbTypeTypePermissionAdminToTerraform, false)(struct!.admin),
    create: cdktf.listMapper(tailordbTypeTypePermissionCreateToTerraform, false)(struct!.create),
    delete: cdktf.listMapper(tailordbTypeTypePermissionDeleteToTerraform, false)(struct!.delete),
    read: cdktf.listMapper(tailordbTypeTypePermissionReadToTerraform, false)(struct!.read),
    update: cdktf.listMapper(tailordbTypeTypePermissionUpdateToTerraform, false)(struct!.update),
  }
}


export function tailordbTypeTypePermissionToHclTerraform(struct?: TailordbTypeTypePermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin: {
      value: cdktf.listMapperHcl(tailordbTypeTypePermissionAdminToHclTerraform, false)(struct!.admin),
      isBlock: true,
      type: "list",
      storageClassType: "TailordbTypeTypePermissionAdminList",
    },
    create: {
      value: cdktf.listMapperHcl(tailordbTypeTypePermissionCreateToHclTerraform, false)(struct!.create),
      isBlock: true,
      type: "list",
      storageClassType: "TailordbTypeTypePermissionCreateList",
    },
    delete: {
      value: cdktf.listMapperHcl(tailordbTypeTypePermissionDeleteToHclTerraform, false)(struct!.delete),
      isBlock: true,
      type: "list",
      storageClassType: "TailordbTypeTypePermissionDeleteList",
    },
    read: {
      value: cdktf.listMapperHcl(tailordbTypeTypePermissionReadToHclTerraform, false)(struct!.read),
      isBlock: true,
      type: "list",
      storageClassType: "TailordbTypeTypePermissionReadList",
    },
    update: {
      value: cdktf.listMapperHcl(tailordbTypeTypePermissionUpdateToHclTerraform, false)(struct!.update),
      isBlock: true,
      type: "list",
      storageClassType: "TailordbTypeTypePermissionUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TailordbTypeTypePermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TailordbTypeTypePermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.admin = this._admin?.internalValue;
    }
    if (this._create?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create?.internalValue;
    }
    if (this._delete?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete?.internalValue;
    }
    if (this._read?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read?.internalValue;
    }
    if (this._update?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TailordbTypeTypePermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._admin.internalValue = undefined;
      this._create.internalValue = undefined;
      this._delete.internalValue = undefined;
      this._read.internalValue = undefined;
      this._update.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._admin.internalValue = value.admin;
      this._create.internalValue = value.create;
      this._delete.internalValue = value.delete;
      this._read.internalValue = value.read;
      this._update.internalValue = value.update;
    }
  }

  // admin - computed: false, optional: true, required: false
  private _admin = new TailordbTypeTypePermissionAdminList(this, "admin", false);
  public get admin() {
    return this._admin;
  }
  public putAdmin(value: TailordbTypeTypePermissionAdmin[] | cdktf.IResolvable) {
    this._admin.internalValue = value;
  }
  public resetAdmin() {
    this._admin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin.internalValue;
  }

  // create - computed: false, optional: true, required: false
  private _create = new TailordbTypeTypePermissionCreateList(this, "create", false);
  public get create() {
    return this._create;
  }
  public putCreate(value: TailordbTypeTypePermissionCreate[] | cdktf.IResolvable) {
    this._create.internalValue = value;
  }
  public resetCreate() {
    this._create.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create.internalValue;
  }

  // delete - computed: false, optional: true, required: false
  private _delete = new TailordbTypeTypePermissionDeleteList(this, "delete", false);
  public get delete() {
    return this._delete;
  }
  public putDelete(value: TailordbTypeTypePermissionDelete[] | cdktf.IResolvable) {
    this._delete.internalValue = value;
  }
  public resetDelete() {
    this._delete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete.internalValue;
  }

  // read - computed: false, optional: true, required: false
  private _read = new TailordbTypeTypePermissionReadList(this, "read", false);
  public get read() {
    return this._read;
  }
  public putRead(value: TailordbTypeTypePermissionRead[] | cdktf.IResolvable) {
    this._read.internalValue = value;
  }
  public resetRead() {
    this._read.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read.internalValue;
  }

  // update - computed: false, optional: true, required: false
  private _update = new TailordbTypeTypePermissionUpdateList(this, "update", false);
  public get update() {
    return this._update;
  }
  public putUpdate(value: TailordbTypeTypePermissionUpdate[] | cdktf.IResolvable) {
    this._update.internalValue = value;
  }
  public resetUpdate() {
    this._update.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type tailor_tailordb_type}
*/
export class TailordbType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailor_tailordb_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TailordbType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TailordbType to import
  * @param importFromId The id of the existing TailordbType that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TailordbType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailor_tailordb_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/tailordb_type tailor_tailordb_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TailordbTypeConfig
  */
  public constructor(scope: Construct, id: string, config: TailordbTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'tailor_tailordb_type',
      terraformGeneratorMetadata: {
        providerName: 'tailor',
        providerVersion: '0.0.25',
        providerVersionConstraint: '~> 0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._directives.internalValue = config.directives;
    this._extends = config.extends;
    this._fields.internalValue = config.fields;
    this._indexes.internalValue = config.indexes;
    this._name = config.name;
    this._namespace = config.namespace;
    this._recordPermission.internalValue = config.recordPermission;
    this._settings.internalValue = config.settings;
    this._typePermission.internalValue = config.typePermission;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // directives - computed: false, optional: true, required: false
  private _directives = new TailordbTypeDirectivesList(this, "directives", false);
  public get directives() {
    return this._directives;
  }
  public putDirectives(value: TailordbTypeDirectives[] | cdktf.IResolvable) {
    this._directives.internalValue = value;
  }
  public resetDirectives() {
    this._directives.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directivesInput() {
    return this._directives.internalValue;
  }

  // extends - computed: false, optional: true, required: false
  private _extends?: boolean | cdktf.IResolvable; 
  public get extends() {
    return this.getBooleanAttribute('extends');
  }
  public set extends(value: boolean | cdktf.IResolvable) {
    this._extends = value;
  }
  public resetExtends() {
    this._extends = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendsInput() {
    return this._extends;
  }

  // fields - computed: false, optional: false, required: true
  private _fields = new TailordbTypeFieldsMap(this, "fields");
  public get fields() {
    return this._fields;
  }
  public putFields(value: { [key: string]: TailordbTypeFields } | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // indexes - computed: false, optional: true, required: false
  private _indexes = new TailordbTypeIndexesMap(this, "indexes");
  public get indexes() {
    return this._indexes;
  }
  public putIndexes(value: { [key: string]: TailordbTypeIndexes } | cdktf.IResolvable) {
    this._indexes.internalValue = value;
  }
  public resetIndexes() {
    this._indexes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexesInput() {
    return this._indexes.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // record_permission - computed: false, optional: true, required: false
  private _recordPermission = new TailordbTypeRecordPermissionOutputReference(this, "record_permission");
  public get recordPermission() {
    return this._recordPermission;
  }
  public putRecordPermission(value: TailordbTypeRecordPermission) {
    this._recordPermission.internalValue = value;
  }
  public resetRecordPermission() {
    this._recordPermission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordPermissionInput() {
    return this._recordPermission.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new TailordbTypeSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: TailordbTypeSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // type_permission - computed: false, optional: true, required: false
  private _typePermission = new TailordbTypeTypePermissionOutputReference(this, "type_permission");
  public get typePermission() {
    return this._typePermission;
  }
  public putTypePermission(value: TailordbTypeTypePermission) {
    this._typePermission.internalValue = value;
  }
  public resetTypePermission() {
    this._typePermission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typePermissionInput() {
    return this._typePermission.internalValue;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      directives: cdktf.listMapper(tailordbTypeDirectivesToTerraform, false)(this._directives.internalValue),
      extends: cdktf.booleanToTerraform(this._extends),
      fields: cdktf.hashMapper(tailordbTypeFieldsToTerraform)(this._fields.internalValue),
      indexes: cdktf.hashMapper(tailordbTypeIndexesToTerraform)(this._indexes.internalValue),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      record_permission: tailordbTypeRecordPermissionToTerraform(this._recordPermission.internalValue),
      settings: tailordbTypeSettingsToTerraform(this._settings.internalValue),
      type_permission: tailordbTypeTypePermissionToTerraform(this._typePermission.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directives: {
        value: cdktf.listMapperHcl(tailordbTypeDirectivesToHclTerraform, false)(this._directives.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TailordbTypeDirectivesList",
      },
      extends: {
        value: cdktf.booleanToHclTerraform(this._extends),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fields: {
        value: cdktf.hashMapperHcl(tailordbTypeFieldsToHclTerraform)(this._fields.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "TailordbTypeFieldsMap",
      },
      indexes: {
        value: cdktf.hashMapperHcl(tailordbTypeIndexesToHclTerraform)(this._indexes.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "TailordbTypeIndexesMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_permission: {
        value: tailordbTypeRecordPermissionToHclTerraform(this._recordPermission.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TailordbTypeRecordPermission",
      },
      settings: {
        value: tailordbTypeSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TailordbTypeSettings",
      },
      type_permission: {
        value: tailordbTypeTypePermissionToHclTerraform(this._typePermission.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TailordbTypeTypePermission",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
