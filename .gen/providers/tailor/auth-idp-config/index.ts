// https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthIdpConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The configuration for the ID token type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#id_token_config AuthIdpConfig#id_token_config}
  */
  readonly idTokenConfig?: AuthIdpConfigIdTokenConfig;
  /**
  * The name of this IDP configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#name AuthIdpConfig#name}
  */
  readonly name: string;
  /**
  * The auth namespace of the IDP configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#namespace AuthIdpConfig#namespace}
  */
  readonly namespace: string;
  /**
  * The configuration for the OIDC type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#oidc_config AuthIdpConfig#oidc_config}
  */
  readonly oidcConfig?: AuthIdpConfigOidcConfig;
  /**
  * The configuration for the SAML type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#saml_config AuthIdpConfig#saml_config}
  */
  readonly samlConfig?: AuthIdpConfigSamlConfig;
  /**
  * The ID of the workspace that the IDP configuration belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#workspace_id AuthIdpConfig#workspace_id}
  */
  readonly workspaceId: string;
}
export interface AuthIdpConfigIdTokenConfig {
  /**
  * The client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#client_id AuthIdpConfig#client_id}
  */
  readonly clientId: string;
  /**
  * The URL of the issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#issuer_url AuthIdpConfig#issuer_url}
  */
  readonly issuerUrl?: string;
  /**
  * The URL of the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#provider_url AuthIdpConfig#provider_url}
  */
  readonly providerUrl: string;
  /**
  * The claim that contains the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#username_claim AuthIdpConfig#username_claim}
  */
  readonly usernameClaim?: string;
}

export function authIdpConfigIdTokenConfigToTerraform(struct?: AuthIdpConfigIdTokenConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    provider_url: cdktf.stringToTerraform(struct!.providerUrl),
    username_claim: cdktf.stringToTerraform(struct!.usernameClaim),
  }
}


export function authIdpConfigIdTokenConfigToHclTerraform(struct?: AuthIdpConfigIdTokenConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_url: {
      value: cdktf.stringToHclTerraform(struct!.providerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_claim: {
      value: cdktf.stringToHclTerraform(struct!.usernameClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthIdpConfigIdTokenConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthIdpConfigIdTokenConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._providerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerUrl = this._providerUrl;
    }
    if (this._usernameClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameClaim = this._usernameClaim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthIdpConfigIdTokenConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._issuerUrl = undefined;
      this._providerUrl = undefined;
      this._usernameClaim = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._issuerUrl = value.issuerUrl;
      this._providerUrl = value.providerUrl;
      this._usernameClaim = value.usernameClaim;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // issuer_url - computed: false, optional: true, required: false
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  public resetIssuerUrl() {
    this._issuerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // provider_url - computed: false, optional: false, required: true
  private _providerUrl?: string; 
  public get providerUrl() {
    return this.getStringAttribute('provider_url');
  }
  public set providerUrl(value: string) {
    this._providerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerUrlInput() {
    return this._providerUrl;
  }

  // username_claim - computed: false, optional: true, required: false
  private _usernameClaim?: string; 
  public get usernameClaim() {
    return this.getStringAttribute('username_claim');
  }
  public set usernameClaim(value: string) {
    this._usernameClaim = value;
  }
  public resetUsernameClaim() {
    this._usernameClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameClaimInput() {
    return this._usernameClaim;
  }
}
export interface AuthIdpConfigOidcConfigClientSecret {
  /**
  * The name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#secret_name AuthIdpConfig#secret_name}
  */
  readonly secretName: string;
  /**
  * The name of the vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#vault_name AuthIdpConfig#vault_name}
  */
  readonly vaultName: string;
}

export function authIdpConfigOidcConfigClientSecretToTerraform(struct?: AuthIdpConfigOidcConfigClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    vault_name: cdktf.stringToTerraform(struct!.vaultName),
  }
}


export function authIdpConfigOidcConfigClientSecretToHclTerraform(struct?: AuthIdpConfigOidcConfigClientSecret | cdktf.IResolvable): any {
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

export class AuthIdpConfigOidcConfigClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthIdpConfigOidcConfigClientSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AuthIdpConfigOidcConfigClientSecret | cdktf.IResolvable | undefined) {
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
export interface AuthIdpConfigOidcConfig {
  /**
  * The client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#client_id AuthIdpConfig#client_id}
  */
  readonly clientId: string;
  /**
  * The secret value to load.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#client_secret AuthIdpConfig#client_secret}
  */
  readonly clientSecret: AuthIdpConfigOidcConfigClientSecret;
  /**
  * The URL of the issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#issuer_url AuthIdpConfig#issuer_url}
  */
  readonly issuerUrl?: string;
  /**
  * The URL of the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#provider_url AuthIdpConfig#provider_url}
  */
  readonly providerUrl: string;
  /**
  * The claim that contains the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#username_claim AuthIdpConfig#username_claim}
  */
  readonly usernameClaim?: string;
}

export function authIdpConfigOidcConfigToTerraform(struct?: AuthIdpConfigOidcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: authIdpConfigOidcConfigClientSecretToTerraform(struct!.clientSecret),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    provider_url: cdktf.stringToTerraform(struct!.providerUrl),
    username_claim: cdktf.stringToTerraform(struct!.usernameClaim),
  }
}


export function authIdpConfigOidcConfigToHclTerraform(struct?: AuthIdpConfigOidcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: authIdpConfigOidcConfigClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthIdpConfigOidcConfigClientSecret",
    },
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_url: {
      value: cdktf.stringToHclTerraform(struct!.providerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_claim: {
      value: cdktf.stringToHclTerraform(struct!.usernameClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthIdpConfigOidcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthIdpConfigOidcConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._providerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerUrl = this._providerUrl;
    }
    if (this._usernameClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameClaim = this._usernameClaim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthIdpConfigOidcConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret.internalValue = undefined;
      this._issuerUrl = undefined;
      this._providerUrl = undefined;
      this._usernameClaim = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
      this._issuerUrl = value.issuerUrl;
      this._providerUrl = value.providerUrl;
      this._usernameClaim = value.usernameClaim;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret = new AuthIdpConfigOidcConfigClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: AuthIdpConfigOidcConfigClientSecret) {
    this._clientSecret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // issuer_url - computed: false, optional: true, required: false
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  public resetIssuerUrl() {
    this._issuerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // provider_url - computed: false, optional: false, required: true
  private _providerUrl?: string; 
  public get providerUrl() {
    return this.getStringAttribute('provider_url');
  }
  public set providerUrl(value: string) {
    this._providerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerUrlInput() {
    return this._providerUrl;
  }

  // username_claim - computed: false, optional: true, required: false
  private _usernameClaim?: string; 
  public get usernameClaim() {
    return this.getStringAttribute('username_claim');
  }
  public set usernameClaim(value: string) {
    this._usernameClaim = value;
  }
  public resetUsernameClaim() {
    this._usernameClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameClaimInput() {
    return this._usernameClaim;
  }
}
export interface AuthIdpConfigSamlConfigSpCertBase64 {
  /**
  * The name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#secret_name AuthIdpConfig#secret_name}
  */
  readonly secretName: string;
  /**
  * The name of the vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#vault_name AuthIdpConfig#vault_name}
  */
  readonly vaultName: string;
}

export function authIdpConfigSamlConfigSpCertBase64ToTerraform(struct?: AuthIdpConfigSamlConfigSpCertBase64 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    vault_name: cdktf.stringToTerraform(struct!.vaultName),
  }
}


export function authIdpConfigSamlConfigSpCertBase64ToHclTerraform(struct?: AuthIdpConfigSamlConfigSpCertBase64 | cdktf.IResolvable): any {
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

export class AuthIdpConfigSamlConfigSpCertBase64OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthIdpConfigSamlConfigSpCertBase64 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AuthIdpConfigSamlConfigSpCertBase64 | cdktf.IResolvable | undefined) {
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
export interface AuthIdpConfigSamlConfigSpKeyBase64 {
  /**
  * The name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#secret_name AuthIdpConfig#secret_name}
  */
  readonly secretName: string;
  /**
  * The name of the vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#vault_name AuthIdpConfig#vault_name}
  */
  readonly vaultName: string;
}

export function authIdpConfigSamlConfigSpKeyBase64ToTerraform(struct?: AuthIdpConfigSamlConfigSpKeyBase64 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    vault_name: cdktf.stringToTerraform(struct!.vaultName),
  }
}


export function authIdpConfigSamlConfigSpKeyBase64ToHclTerraform(struct?: AuthIdpConfigSamlConfigSpKeyBase64 | cdktf.IResolvable): any {
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

export class AuthIdpConfigSamlConfigSpKeyBase64OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthIdpConfigSamlConfigSpKeyBase64 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AuthIdpConfigSamlConfigSpKeyBase64 | cdktf.IResolvable | undefined) {
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
export interface AuthIdpConfigSamlConfig {
  /**
  * The URL of the SAML metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#metadata_url AuthIdpConfig#metadata_url}
  */
  readonly metadataUrl: string;
  /**
  * The secret value to load.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#sp_cert_base64 AuthIdpConfig#sp_cert_base64}
  */
  readonly spCertBase64: AuthIdpConfigSamlConfigSpCertBase64;
  /**
  * The secret value to load.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#sp_key_base64 AuthIdpConfig#sp_key_base64}
  */
  readonly spKeyBase64: AuthIdpConfigSamlConfigSpKeyBase64;
}

export function authIdpConfigSamlConfigToTerraform(struct?: AuthIdpConfigSamlConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata_url: cdktf.stringToTerraform(struct!.metadataUrl),
    sp_cert_base64: authIdpConfigSamlConfigSpCertBase64ToTerraform(struct!.spCertBase64),
    sp_key_base64: authIdpConfigSamlConfigSpKeyBase64ToTerraform(struct!.spKeyBase64),
  }
}


export function authIdpConfigSamlConfigToHclTerraform(struct?: AuthIdpConfigSamlConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata_url: {
      value: cdktf.stringToHclTerraform(struct!.metadataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_cert_base64: {
      value: authIdpConfigSamlConfigSpCertBase64ToHclTerraform(struct!.spCertBase64),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthIdpConfigSamlConfigSpCertBase64",
    },
    sp_key_base64: {
      value: authIdpConfigSamlConfigSpKeyBase64ToHclTerraform(struct!.spKeyBase64),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthIdpConfigSamlConfigSpKeyBase64",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthIdpConfigSamlConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthIdpConfigSamlConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataUrl = this._metadataUrl;
    }
    if (this._spCertBase64?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spCertBase64 = this._spCertBase64?.internalValue;
    }
    if (this._spKeyBase64?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spKeyBase64 = this._spKeyBase64?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthIdpConfigSamlConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataUrl = undefined;
      this._spCertBase64.internalValue = undefined;
      this._spKeyBase64.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataUrl = value.metadataUrl;
      this._spCertBase64.internalValue = value.spCertBase64;
      this._spKeyBase64.internalValue = value.spKeyBase64;
    }
  }

  // metadata_url - computed: false, optional: false, required: true
  private _metadataUrl?: string; 
  public get metadataUrl() {
    return this.getStringAttribute('metadata_url');
  }
  public set metadataUrl(value: string) {
    this._metadataUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataUrlInput() {
    return this._metadataUrl;
  }

  // sp_cert_base64 - computed: false, optional: false, required: true
  private _spCertBase64 = new AuthIdpConfigSamlConfigSpCertBase64OutputReference(this, "sp_cert_base64");
  public get spCertBase64() {
    return this._spCertBase64;
  }
  public putSpCertBase64(value: AuthIdpConfigSamlConfigSpCertBase64) {
    this._spCertBase64.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spCertBase64Input() {
    return this._spCertBase64.internalValue;
  }

  // sp_key_base64 - computed: false, optional: false, required: true
  private _spKeyBase64 = new AuthIdpConfigSamlConfigSpKeyBase64OutputReference(this, "sp_key_base64");
  public get spKeyBase64() {
    return this._spKeyBase64;
  }
  public putSpKeyBase64(value: AuthIdpConfigSamlConfigSpKeyBase64) {
    this._spKeyBase64.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spKeyBase64Input() {
    return this._spKeyBase64.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config tailor_auth_idp_config}
*/
export class AuthIdpConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailor_auth_idp_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthIdpConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthIdpConfig to import
  * @param importFromId The id of the existing AuthIdpConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthIdpConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailor_auth_idp_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.9/docs/resources/auth_idp_config tailor_auth_idp_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthIdpConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AuthIdpConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tailor_auth_idp_config',
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
    this._idTokenConfig.internalValue = config.idTokenConfig;
    this._name = config.name;
    this._namespace = config.namespace;
    this._oidcConfig.internalValue = config.oidcConfig;
    this._samlConfig.internalValue = config.samlConfig;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id_token_config - computed: false, optional: true, required: false
  private _idTokenConfig = new AuthIdpConfigIdTokenConfigOutputReference(this, "id_token_config");
  public get idTokenConfig() {
    return this._idTokenConfig;
  }
  public putIdTokenConfig(value: AuthIdpConfigIdTokenConfig) {
    this._idTokenConfig.internalValue = value;
  }
  public resetIdTokenConfig() {
    this._idTokenConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenConfigInput() {
    return this._idTokenConfig.internalValue;
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

  // oidc_config - computed: false, optional: true, required: false
  private _oidcConfig = new AuthIdpConfigOidcConfigOutputReference(this, "oidc_config");
  public get oidcConfig() {
    return this._oidcConfig;
  }
  public putOidcConfig(value: AuthIdpConfigOidcConfig) {
    this._oidcConfig.internalValue = value;
  }
  public resetOidcConfig() {
    this._oidcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcConfigInput() {
    return this._oidcConfig.internalValue;
  }

  // saml_config - computed: false, optional: true, required: false
  private _samlConfig = new AuthIdpConfigSamlConfigOutputReference(this, "saml_config");
  public get samlConfig() {
    return this._samlConfig;
  }
  public putSamlConfig(value: AuthIdpConfigSamlConfig) {
    this._samlConfig.internalValue = value;
  }
  public resetSamlConfig() {
    this._samlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlConfigInput() {
    return this._samlConfig.internalValue;
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
      id_token_config: authIdpConfigIdTokenConfigToTerraform(this._idTokenConfig.internalValue),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      oidc_config: authIdpConfigOidcConfigToTerraform(this._oidcConfig.internalValue),
      saml_config: authIdpConfigSamlConfigToTerraform(this._samlConfig.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id_token_config: {
        value: authIdpConfigIdTokenConfigToHclTerraform(this._idTokenConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthIdpConfigIdTokenConfig",
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
      oidc_config: {
        value: authIdpConfigOidcConfigToHclTerraform(this._oidcConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthIdpConfigOidcConfig",
      },
      saml_config: {
        value: authIdpConfigSamlConfigToHclTerraform(this._samlConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthIdpConfigSamlConfig",
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
