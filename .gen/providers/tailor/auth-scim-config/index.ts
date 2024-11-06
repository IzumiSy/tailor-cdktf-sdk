// https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthScimConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the machine user that will act as the actor for SCIM operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_config#actor_machine_user_name AuthScimConfig#actor_machine_user_name}
  */
  readonly actorMachineUserName: string;
  /**
  * The authorization configuration for SCIM operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_config#authorization AuthScimConfig#authorization}
  */
  readonly authorization: AuthScimConfigAuthorization;
  /**
  * The auth namespace of the SCIM config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_config#namespace AuthScimConfig#namespace}
  */
  readonly namespace: string;
  /**
  * The ID of the workspace that the SCIM config belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_config#workspace_id AuthScimConfig#workspace_id}
  */
  readonly workspaceId: string;
}
export interface AuthScimConfigAuthorizationApiKeySecretValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_config#secret_name AuthScimConfig#secret_name}
  */
  readonly secretName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_config#vault_name AuthScimConfig#vault_name}
  */
  readonly vaultName: string;
}

export function authScimConfigAuthorizationApiKeySecretValueToTerraform(struct?: AuthScimConfigAuthorizationApiKeySecretValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    vault_name: cdktf.stringToTerraform(struct!.vaultName),
  }
}


export function authScimConfigAuthorizationApiKeySecretValueToHclTerraform(struct?: AuthScimConfigAuthorizationApiKeySecretValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_name: {
      value: cdktf.stringToHclTerraform(struct!.vaultName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthScimConfigAuthorizationApiKeySecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthScimConfigAuthorizationApiKeySecretValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._vaultName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultName = this._vaultName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthScimConfigAuthorizationApiKeySecretValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretName = undefined;
      this._vaultName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretName = value.secretName;
      this._vaultName = value.vaultName;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // vault_name - computed: false, optional: false, required: true
  private _vaultName?: string; 
  public get vaultName() {
    return this.getStringAttribute('vault_name');
  }
  public set vaultName(value: string) {
    this._vaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultNameInput() {
    return this._vaultName;
  }
}
export interface AuthScimConfigAuthorizationApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_config#secret_value AuthScimConfig#secret_value}
  */
  readonly secretValue: AuthScimConfigAuthorizationApiKeySecretValue;
}

export function authScimConfigAuthorizationApiKeyToTerraform(struct?: AuthScimConfigAuthorizationApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_value: authScimConfigAuthorizationApiKeySecretValueToTerraform(struct!.secretValue),
  }
}


export function authScimConfigAuthorizationApiKeyToHclTerraform(struct?: AuthScimConfigAuthorizationApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_value: {
      value: authScimConfigAuthorizationApiKeySecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthScimConfigAuthorizationApiKeySecretValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthScimConfigAuthorizationApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthScimConfigAuthorizationApiKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthScimConfigAuthorizationApiKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // secret_value - computed: false, optional: false, required: true
  private _secretValue = new AuthScimConfigAuthorizationApiKeySecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: AuthScimConfigAuthorizationApiKeySecretValue) {
    this._secretValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}
export interface AuthScimConfigAuthorization {
  /**
  * Use fixed API key for SCIM operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_config#api_key AuthScimConfig#api_key}
  */
  readonly apiKey?: AuthScimConfigAuthorizationApiKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_config#machine_user_token AuthScimConfig#machine_user_token}
  */
  readonly machineUserToken?: boolean | cdktf.IResolvable;
}

export function authScimConfigAuthorizationToTerraform(struct?: AuthScimConfigAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: authScimConfigAuthorizationApiKeyToTerraform(struct!.apiKey),
    machine_user_token: cdktf.booleanToTerraform(struct!.machineUserToken),
  }
}


export function authScimConfigAuthorizationToHclTerraform(struct?: AuthScimConfigAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: authScimConfigAuthorizationApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthScimConfigAuthorizationApiKey",
    },
    machine_user_token: {
      value: cdktf.booleanToHclTerraform(struct!.machineUserToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthScimConfigAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthScimConfigAuthorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    if (this._machineUserToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineUserToken = this._machineUserToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthScimConfigAuthorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
      this._machineUserToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
      this._machineUserToken = value.machineUserToken;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new AuthScimConfigAuthorizationApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: AuthScimConfigAuthorizationApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // machine_user_token - computed: false, optional: true, required: false
  private _machineUserToken?: boolean | cdktf.IResolvable; 
  public get machineUserToken() {
    return this.getBooleanAttribute('machine_user_token');
  }
  public set machineUserToken(value: boolean | cdktf.IResolvable) {
    this._machineUserToken = value;
  }
  public resetMachineUserToken() {
    this._machineUserToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineUserTokenInput() {
    return this._machineUserToken;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_config tailor_auth_scim_config}
*/
export class AuthScimConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailor_auth_scim_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthScimConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthScimConfig to import
  * @param importFromId The id of the existing AuthScimConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthScimConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailor_auth_scim_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_scim_config tailor_auth_scim_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthScimConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AuthScimConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tailor_auth_scim_config',
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
    this._actorMachineUserName = config.actorMachineUserName;
    this._authorization.internalValue = config.authorization;
    this._namespace = config.namespace;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actor_machine_user_name - computed: false, optional: false, required: true
  private _actorMachineUserName?: string; 
  public get actorMachineUserName() {
    return this.getStringAttribute('actor_machine_user_name');
  }
  public set actorMachineUserName(value: string) {
    this._actorMachineUserName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actorMachineUserNameInput() {
    return this._actorMachineUserName;
  }

  // authorization - computed: false, optional: false, required: true
  private _authorization = new AuthScimConfigAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: AuthScimConfigAuthorization) {
    this._authorization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
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
      actor_machine_user_name: cdktf.stringToTerraform(this._actorMachineUserName),
      authorization: authScimConfigAuthorizationToTerraform(this._authorization.internalValue),
      namespace: cdktf.stringToTerraform(this._namespace),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actor_machine_user_name: {
        value: cdktf.stringToHclTerraform(this._actorMachineUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization: {
        value: authScimConfigAuthorizationToHclTerraform(this._authorization.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthScimConfigAuthorization",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
