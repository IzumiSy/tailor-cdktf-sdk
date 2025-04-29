// https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_user_profile_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthUserProfileConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The auth namespace of the user profile configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_user_profile_config#namespace AuthUserProfileConfig#namespace}
  */
  readonly namespace: string;
  /**
  * The configuration for the TailorDB type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_user_profile_config#tailordb_config AuthUserProfileConfig#tailordb_config}
  */
  readonly tailordbConfig: AuthUserProfileConfigTailordbConfig;
  /**
  * The ID of the workspace that the user profile configuration belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_user_profile_config#workspace_id AuthUserProfileConfig#workspace_id}
  */
  readonly workspaceId: string;
}
export interface AuthUserProfileConfigTailordbConfig {
  /**
  * The list of attribute fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_user_profile_config#attribute_fields AuthUserProfileConfig#attribute_fields}
  */
  readonly attributeFields?: string[];
  /**
  * The namespace of the TailorDB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_user_profile_config#namespace AuthUserProfileConfig#namespace}
  */
  readonly namespace: string;
  /**
  * The field that contains the tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_user_profile_config#tenant_id_field AuthUserProfileConfig#tenant_id_field}
  */
  readonly tenantIdField?: string;
  /**
  * The type of the TailorDB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_user_profile_config#type AuthUserProfileConfig#type}
  */
  readonly type: string;
  /**
  * The field that contains the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_user_profile_config#username_field AuthUserProfileConfig#username_field}
  */
  readonly usernameField: string;
}

export function authUserProfileConfigTailordbConfigToTerraform(struct?: AuthUserProfileConfigTailordbConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributeFields),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant_id_field: cdktf.stringToTerraform(struct!.tenantIdField),
    type: cdktf.stringToTerraform(struct!.type),
    username_field: cdktf.stringToTerraform(struct!.usernameField),
  }
}


export function authUserProfileConfigTailordbConfigToHclTerraform(struct?: AuthUserProfileConfigTailordbConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributeFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id_field: {
      value: cdktf.stringToHclTerraform(struct!.tenantIdField),
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
    username_field: {
      value: cdktf.stringToHclTerraform(struct!.usernameField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthUserProfileConfigTailordbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthUserProfileConfigTailordbConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeFields = this._attributeFields;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenantIdField !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantIdField = this._tenantIdField;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._usernameField !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameField = this._usernameField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthUserProfileConfigTailordbConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeFields = undefined;
      this._namespace = undefined;
      this._tenantIdField = undefined;
      this._type = undefined;
      this._usernameField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeFields = value.attributeFields;
      this._namespace = value.namespace;
      this._tenantIdField = value.tenantIdField;
      this._type = value.type;
      this._usernameField = value.usernameField;
    }
  }

  // attribute_fields - computed: false, optional: true, required: false
  private _attributeFields?: string[]; 
  public get attributeFields() {
    return this.getListAttribute('attribute_fields');
  }
  public set attributeFields(value: string[]) {
    this._attributeFields = value;
  }
  public resetAttributeFields() {
    this._attributeFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeFieldsInput() {
    return this._attributeFields;
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

  // tenant_id_field - computed: false, optional: true, required: false
  private _tenantIdField?: string; 
  public get tenantIdField() {
    return this.getStringAttribute('tenant_id_field');
  }
  public set tenantIdField(value: string) {
    this._tenantIdField = value;
  }
  public resetTenantIdField() {
    this._tenantIdField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdFieldInput() {
    return this._tenantIdField;
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

  // username_field - computed: false, optional: false, required: true
  private _usernameField?: string; 
  public get usernameField() {
    return this.getStringAttribute('username_field');
  }
  public set usernameField(value: string) {
    this._usernameField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameFieldInput() {
    return this._usernameField;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_user_profile_config tailor_auth_user_profile_config}
*/
export class AuthUserProfileConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailor_auth_user_profile_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthUserProfileConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthUserProfileConfig to import
  * @param importFromId The id of the existing AuthUserProfileConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_user_profile_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthUserProfileConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailor_auth_user_profile_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_user_profile_config tailor_auth_user_profile_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthUserProfileConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AuthUserProfileConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tailor_auth_user_profile_config',
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
    this._namespace = config.namespace;
    this._tailordbConfig.internalValue = config.tailordbConfig;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _tailordbConfig = new AuthUserProfileConfigTailordbConfigOutputReference(this, "tailordb_config");
  public get tailordbConfig() {
    return this._tailordbConfig;
  }
  public putTailordbConfig(value: AuthUserProfileConfigTailordbConfig) {
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
      namespace: cdktf.stringToTerraform(this._namespace),
      tailordb_config: authUserProfileConfigTailordbConfigToTerraform(this._tailordbConfig.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tailordb_config: {
        value: authUserProfileConfigTailordbConfigToHclTerraform(this._tailordbConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthUserProfileConfigTailordbConfig",
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
