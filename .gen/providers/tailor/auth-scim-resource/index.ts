// https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthScimResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The core schema of the SCIM resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#core_schema AuthScimResource#core_schema}
  */
  readonly coreSchema: AuthScimResourceCoreSchema;
  /**
  * The name of this SCIM resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#name AuthScimResource#name}
  */
  readonly name: string;
  /**
  * The auth namespace of the SCIM resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#namespace AuthScimResource#namespace}
  */
  readonly namespace: string;
  /**
  * The TailorDB config of the SCIM resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#tailordb_config AuthScimResource#tailordb_config}
  */
  readonly tailordbConfig: AuthScimResourceTailordbConfig;
  /**
  * The ID of the workspace that the SCIM resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#workspace_id AuthScimResource#workspace_id}
  */
  readonly workspaceId: string;
}
export interface AuthScimResourceCoreSchemaAttributesSubAttributes {
  /**
  * The canonical values of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#canonical_values AuthScimResource#canonical_values}
  */
  readonly canonicalValues?: string[];
  /**
  * The description of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#description AuthScimResource#description}
  */
  readonly description?: string;
  /**
  * Whether the attribute is multi-valued.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#multi_valued AuthScimResource#multi_valued}
  */
  readonly multiValued?: boolean | cdktf.IResolvable;
  /**
  * The mutability of the attribute. It can be either "readWrite", "readOnly", "writeOnly".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#mutability AuthScimResource#mutability}
  */
  readonly mutability?: string;
  /**
  * The name of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#name AuthScimResource#name}
  */
  readonly name: string;
  /**
  * Whether the attribute is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#required AuthScimResource#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The type of the attribute. It can be either "complex", "string", "number", "boolean", "datetime".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#type AuthScimResource#type}
  */
  readonly type: string;
  /**
  * Whether the attribute is unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#uniqueness AuthScimResource#uniqueness}
  */
  readonly uniqueness?: string;
}

export function authScimResourceCoreSchemaAttributesSubAttributesToTerraform(struct?: AuthScimResourceCoreSchemaAttributesSubAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canonical_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.canonicalValues),
    description: cdktf.stringToTerraform(struct!.description),
    multi_valued: cdktf.booleanToTerraform(struct!.multiValued),
    mutability: cdktf.stringToTerraform(struct!.mutability),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    uniqueness: cdktf.stringToTerraform(struct!.uniqueness),
  }
}


export function authScimResourceCoreSchemaAttributesSubAttributesToHclTerraform(struct?: AuthScimResourceCoreSchemaAttributesSubAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canonical_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.canonicalValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_valued: {
      value: cdktf.booleanToHclTerraform(struct!.multiValued),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mutability: {
      value: cdktf.stringToHclTerraform(struct!.mutability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniqueness: {
      value: cdktf.stringToHclTerraform(struct!.uniqueness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthScimResourceCoreSchemaAttributesSubAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthScimResourceCoreSchemaAttributesSubAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canonicalValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.canonicalValues = this._canonicalValues;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._multiValued !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValued = this._multiValued;
    }
    if (this._mutability !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutability = this._mutability;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uniqueness !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueness = this._uniqueness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthScimResourceCoreSchemaAttributesSubAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canonicalValues = undefined;
      this._description = undefined;
      this._multiValued = undefined;
      this._mutability = undefined;
      this._name = undefined;
      this._required = undefined;
      this._type = undefined;
      this._uniqueness = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canonicalValues = value.canonicalValues;
      this._description = value.description;
      this._multiValued = value.multiValued;
      this._mutability = value.mutability;
      this._name = value.name;
      this._required = value.required;
      this._type = value.type;
      this._uniqueness = value.uniqueness;
    }
  }

  // canonical_values - computed: false, optional: true, required: false
  private _canonicalValues?: string[]; 
  public get canonicalValues() {
    return this.getListAttribute('canonical_values');
  }
  public set canonicalValues(value: string[]) {
    this._canonicalValues = value;
  }
  public resetCanonicalValues() {
    this._canonicalValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalValuesInput() {
    return this._canonicalValues;
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

  // multi_valued - computed: true, optional: true, required: false
  private _multiValued?: boolean | cdktf.IResolvable; 
  public get multiValued() {
    return this.getBooleanAttribute('multi_valued');
  }
  public set multiValued(value: boolean | cdktf.IResolvable) {
    this._multiValued = value;
  }
  public resetMultiValued() {
    this._multiValued = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValuedInput() {
    return this._multiValued;
  }

  // mutability - computed: true, optional: true, required: false
  private _mutability?: string; 
  public get mutability() {
    return this.getStringAttribute('mutability');
  }
  public set mutability(value: string) {
    this._mutability = value;
  }
  public resetMutability() {
    this._mutability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutabilityInput() {
    return this._mutability;
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

  // required - computed: true, optional: true, required: false
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

  // uniqueness - computed: true, optional: true, required: false
  private _uniqueness?: string; 
  public get uniqueness() {
    return this.getStringAttribute('uniqueness');
  }
  public set uniqueness(value: string) {
    this._uniqueness = value;
  }
  public resetUniqueness() {
    this._uniqueness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniquenessInput() {
    return this._uniqueness;
  }
}

export class AuthScimResourceCoreSchemaAttributesSubAttributesList extends cdktf.ComplexList {
  public internalValue? : AuthScimResourceCoreSchemaAttributesSubAttributes[] | cdktf.IResolvable

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
  public get(index: number): AuthScimResourceCoreSchemaAttributesSubAttributesOutputReference {
    return new AuthScimResourceCoreSchemaAttributesSubAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthScimResourceCoreSchemaAttributes {
  /**
  * The canonical values of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#canonical_values AuthScimResource#canonical_values}
  */
  readonly canonicalValues?: string[];
  /**
  * The description of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#description AuthScimResource#description}
  */
  readonly description?: string;
  /**
  * Whether the attribute is multi-valued.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#multi_valued AuthScimResource#multi_valued}
  */
  readonly multiValued?: boolean | cdktf.IResolvable;
  /**
  * The mutability of the attribute. It can be either "readWrite", "readOnly", "writeOnly".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#mutability AuthScimResource#mutability}
  */
  readonly mutability?: string;
  /**
  * The name of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#name AuthScimResource#name}
  */
  readonly name: string;
  /**
  * Whether the attribute is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#required AuthScimResource#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The list of attributes for the core schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#sub_attributes AuthScimResource#sub_attributes}
  */
  readonly subAttributes?: AuthScimResourceCoreSchemaAttributesSubAttributes[] | cdktf.IResolvable;
  /**
  * The type of the attribute. It can be either "complex", "string", "number", "boolean", "datetime".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#type AuthScimResource#type}
  */
  readonly type: string;
  /**
  * Whether the attribute is unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#uniqueness AuthScimResource#uniqueness}
  */
  readonly uniqueness?: string;
}

export function authScimResourceCoreSchemaAttributesToTerraform(struct?: AuthScimResourceCoreSchemaAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canonical_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.canonicalValues),
    description: cdktf.stringToTerraform(struct!.description),
    multi_valued: cdktf.booleanToTerraform(struct!.multiValued),
    mutability: cdktf.stringToTerraform(struct!.mutability),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    sub_attributes: cdktf.listMapper(authScimResourceCoreSchemaAttributesSubAttributesToTerraform, false)(struct!.subAttributes),
    type: cdktf.stringToTerraform(struct!.type),
    uniqueness: cdktf.stringToTerraform(struct!.uniqueness),
  }
}


export function authScimResourceCoreSchemaAttributesToHclTerraform(struct?: AuthScimResourceCoreSchemaAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canonical_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.canonicalValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_valued: {
      value: cdktf.booleanToHclTerraform(struct!.multiValued),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mutability: {
      value: cdktf.stringToHclTerraform(struct!.mutability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sub_attributes: {
      value: cdktf.listMapperHcl(authScimResourceCoreSchemaAttributesSubAttributesToHclTerraform, false)(struct!.subAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "AuthScimResourceCoreSchemaAttributesSubAttributesList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniqueness: {
      value: cdktf.stringToHclTerraform(struct!.uniqueness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthScimResourceCoreSchemaAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthScimResourceCoreSchemaAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canonicalValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.canonicalValues = this._canonicalValues;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._multiValued !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValued = this._multiValued;
    }
    if (this._mutability !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutability = this._mutability;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._subAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subAttributes = this._subAttributes?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uniqueness !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueness = this._uniqueness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthScimResourceCoreSchemaAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canonicalValues = undefined;
      this._description = undefined;
      this._multiValued = undefined;
      this._mutability = undefined;
      this._name = undefined;
      this._required = undefined;
      this._subAttributes.internalValue = undefined;
      this._type = undefined;
      this._uniqueness = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canonicalValues = value.canonicalValues;
      this._description = value.description;
      this._multiValued = value.multiValued;
      this._mutability = value.mutability;
      this._name = value.name;
      this._required = value.required;
      this._subAttributes.internalValue = value.subAttributes;
      this._type = value.type;
      this._uniqueness = value.uniqueness;
    }
  }

  // canonical_values - computed: false, optional: true, required: false
  private _canonicalValues?: string[]; 
  public get canonicalValues() {
    return this.getListAttribute('canonical_values');
  }
  public set canonicalValues(value: string[]) {
    this._canonicalValues = value;
  }
  public resetCanonicalValues() {
    this._canonicalValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalValuesInput() {
    return this._canonicalValues;
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

  // multi_valued - computed: true, optional: true, required: false
  private _multiValued?: boolean | cdktf.IResolvable; 
  public get multiValued() {
    return this.getBooleanAttribute('multi_valued');
  }
  public set multiValued(value: boolean | cdktf.IResolvable) {
    this._multiValued = value;
  }
  public resetMultiValued() {
    this._multiValued = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValuedInput() {
    return this._multiValued;
  }

  // mutability - computed: true, optional: true, required: false
  private _mutability?: string; 
  public get mutability() {
    return this.getStringAttribute('mutability');
  }
  public set mutability(value: string) {
    this._mutability = value;
  }
  public resetMutability() {
    this._mutability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutabilityInput() {
    return this._mutability;
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

  // required - computed: true, optional: true, required: false
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

  // sub_attributes - computed: false, optional: true, required: false
  private _subAttributes = new AuthScimResourceCoreSchemaAttributesSubAttributesList(this, "sub_attributes", false);
  public get subAttributes() {
    return this._subAttributes;
  }
  public putSubAttributes(value: AuthScimResourceCoreSchemaAttributesSubAttributes[] | cdktf.IResolvable) {
    this._subAttributes.internalValue = value;
  }
  public resetSubAttributes() {
    this._subAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subAttributesInput() {
    return this._subAttributes.internalValue;
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

  // uniqueness - computed: true, optional: true, required: false
  private _uniqueness?: string; 
  public get uniqueness() {
    return this.getStringAttribute('uniqueness');
  }
  public set uniqueness(value: string) {
    this._uniqueness = value;
  }
  public resetUniqueness() {
    this._uniqueness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniquenessInput() {
    return this._uniqueness;
  }
}

export class AuthScimResourceCoreSchemaAttributesList extends cdktf.ComplexList {
  public internalValue? : AuthScimResourceCoreSchemaAttributes[] | cdktf.IResolvable

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
  public get(index: number): AuthScimResourceCoreSchemaAttributesOutputReference {
    return new AuthScimResourceCoreSchemaAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthScimResourceCoreSchema {
  /**
  * The list of attributes for the core schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#attributes AuthScimResource#attributes}
  */
  readonly attributes: AuthScimResourceCoreSchemaAttributes[] | cdktf.IResolvable;
  /**
  * The name of the core schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#name AuthScimResource#name}
  */
  readonly name: string;
}

export function authScimResourceCoreSchemaToTerraform(struct?: AuthScimResourceCoreSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(authScimResourceCoreSchemaAttributesToTerraform, false)(struct!.attributes),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function authScimResourceCoreSchemaToHclTerraform(struct?: AuthScimResourceCoreSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.listMapperHcl(authScimResourceCoreSchemaAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "AuthScimResourceCoreSchemaAttributesList",
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

export class AuthScimResourceCoreSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthScimResourceCoreSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthScimResourceCoreSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._name = value.name;
    }
  }

  // attributes - computed: false, optional: false, required: true
  private _attributes = new AuthScimResourceCoreSchemaAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: AuthScimResourceCoreSchemaAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
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
export interface AuthScimResourceTailordbConfigMapping {
  /**
  * The field of the TailorDB Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#field AuthScimResource#field}
  */
  readonly field: string;
  /**
  * The path to the SCIM resource value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#scim_path AuthScimResource#scim_path}
  */
  readonly scimPath: string;
}

export function authScimResourceTailordbConfigMappingToTerraform(struct?: AuthScimResourceTailordbConfigMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    scim_path: cdktf.stringToTerraform(struct!.scimPath),
  }
}


export function authScimResourceTailordbConfigMappingToHclTerraform(struct?: AuthScimResourceTailordbConfigMapping | cdktf.IResolvable): any {
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
    scim_path: {
      value: cdktf.stringToHclTerraform(struct!.scimPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthScimResourceTailordbConfigMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthScimResourceTailordbConfigMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._scimPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.scimPath = this._scimPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthScimResourceTailordbConfigMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._scimPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._scimPath = value.scimPath;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // scim_path - computed: false, optional: false, required: true
  private _scimPath?: string; 
  public get scimPath() {
    return this.getStringAttribute('scim_path');
  }
  public set scimPath(value: string) {
    this._scimPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scimPathInput() {
    return this._scimPath;
  }
}

export class AuthScimResourceTailordbConfigMappingList extends cdktf.ComplexList {
  public internalValue? : AuthScimResourceTailordbConfigMapping[] | cdktf.IResolvable

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
  public get(index: number): AuthScimResourceTailordbConfigMappingOutputReference {
    return new AuthScimResourceTailordbConfigMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthScimResourceTailordbConfig {
  /**
  * The mapping of the TailorDB Type and SCIM resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#mapping AuthScimResource#mapping}
  */
  readonly mapping: AuthScimResourceTailordbConfigMapping[] | cdktf.IResolvable;
  /**
  * The namespace of the TailorDB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#namespace AuthScimResource#namespace}
  */
  readonly namespace: string;
  /**
  * The type of the TailorDB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#type AuthScimResource#type}
  */
  readonly type: string;
}

export function authScimResourceTailordbConfigToTerraform(struct?: AuthScimResourceTailordbConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapping: cdktf.listMapper(authScimResourceTailordbConfigMappingToTerraform, false)(struct!.mapping),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function authScimResourceTailordbConfigToHclTerraform(struct?: AuthScimResourceTailordbConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mapping: {
      value: cdktf.listMapperHcl(authScimResourceTailordbConfigMappingToHclTerraform, false)(struct!.mapping),
      isBlock: true,
      type: "list",
      storageClassType: "AuthScimResourceTailordbConfigMappingList",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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

export class AuthScimResourceTailordbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthScimResourceTailordbConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping?.internalValue;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthScimResourceTailordbConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapping.internalValue = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapping.internalValue = value.mapping;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // mapping - computed: false, optional: false, required: true
  private _mapping = new AuthScimResourceTailordbConfigMappingList(this, "mapping", false);
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: AuthScimResourceTailordbConfigMapping[] | cdktf.IResolvable) {
    this._mapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
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

/**
* Represents a {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource tailor_auth_scim_resource}
*/
export class AuthScimResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailor_auth_scim_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthScimResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthScimResource to import
  * @param importFromId The id of the existing AuthScimResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthScimResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailor_auth_scim_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_resource tailor_auth_scim_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthScimResourceConfig
  */
  public constructor(scope: Construct, id: string, config: AuthScimResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'tailor_auth_scim_resource',
      terraformGeneratorMetadata: {
        providerName: 'tailor',
        providerVersion: '0.0.9',
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
    this._coreSchema.internalValue = config.coreSchema;
    this._name = config.name;
    this._namespace = config.namespace;
    this._tailordbConfig.internalValue = config.tailordbConfig;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // core_schema - computed: false, optional: false, required: true
  private _coreSchema = new AuthScimResourceCoreSchemaOutputReference(this, "core_schema");
  public get coreSchema() {
    return this._coreSchema;
  }
  public putCoreSchema(value: AuthScimResourceCoreSchema) {
    this._coreSchema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coreSchemaInput() {
    return this._coreSchema.internalValue;
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

  // tailordb_config - computed: false, optional: false, required: true
  private _tailordbConfig = new AuthScimResourceTailordbConfigOutputReference(this, "tailordb_config");
  public get tailordbConfig() {
    return this._tailordbConfig;
  }
  public putTailordbConfig(value: AuthScimResourceTailordbConfig) {
    this._tailordbConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tailordbConfigInput() {
    return this._tailordbConfig.internalValue;
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
      core_schema: authScimResourceCoreSchemaToTerraform(this._coreSchema.internalValue),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      tailordb_config: authScimResourceTailordbConfigToTerraform(this._tailordbConfig.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      core_schema: {
        value: authScimResourceCoreSchemaToHclTerraform(this._coreSchema.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthScimResourceCoreSchema",
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
      tailordb_config: {
        value: authScimResourceTailordbConfigToHclTerraform(this._tailordbConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthScimResourceTailordbConfig",
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
