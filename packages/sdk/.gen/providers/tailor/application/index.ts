// https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of allowed IP addresses in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/application#allowed_ip_addresses Application#allowed_ip_addresses}
  */
  readonly allowedIpAddresses?: string[];
  /**
  * The auth configuration of the application for user authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/application#auth Application#auth}
  */
  readonly auth?: ApplicationAuth;
  /**
  * The list of allowed origins for CORS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/application#cors Application#cors}
  */
  readonly cors?: string[];
  /**
  * Disable GraphQL introspection for the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/application#disable_introspection Application#disable_introspection}
  */
  readonly disableIntrospection?: boolean | cdktf.IResolvable;
  /**
  * Whether the application is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/application#disabled Application#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * The list of subgraphs to use for the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/application#subgraphs Application#subgraphs}
  */
  readonly subgraphs: ApplicationSubgraphs[] | cdktf.IResolvable;
  /**
  * The ID of the workspace that the application belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/application#workspace_id Application#workspace_id}
  */
  readonly workspaceId: string;
}
export interface ApplicationAuth {
  /**
  * The name of the auth_idp_config resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/application#idp_config_name Application#idp_config_name}
  */
  readonly idpConfigName?: string;
  /**
  * The namespace of the auth resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/application#namespace Application#namespace}
  */
  readonly namespace: string;
}

export function applicationAuthToTerraform(struct?: ApplicationAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idp_config_name: cdktf.stringToTerraform(struct!.idpConfigName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function applicationAuthToHclTerraform(struct?: ApplicationAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idp_config_name: {
      value: cdktf.stringToHclTerraform(struct!.idpConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idpConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpConfigName = this._idpConfigName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idpConfigName = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idpConfigName = value.idpConfigName;
      this._namespace = value.namespace;
    }
  }

  // idp_config_name - computed: false, optional: true, required: false
  private _idpConfigName?: string; 
  public get idpConfigName() {
    return this.getStringAttribute('idp_config_name');
  }
  public set idpConfigName(value: string) {
    this._idpConfigName = value;
  }
  public resetIdpConfigName() {
    this._idpConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpConfigNameInput() {
    return this._idpConfigName;
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
}
export interface ApplicationSubgraphs {
  /**
  * The namespace of the subgraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/application#namespace Application#namespace}
  */
  readonly namespace: string;
  /**
  * The type of the subgraph. Can be one of 'tailordb', 'pipeline', 'stateflow', 'auth'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/application#type Application#type}
  */
  readonly type: string;
}

export function applicationSubgraphsToTerraform(struct?: ApplicationSubgraphs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationSubgraphsToHclTerraform(struct?: ApplicationSubgraphs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ApplicationSubgraphsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSubgraphs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ApplicationSubgraphs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._namespace = value.namespace;
      this._type = value.type;
    }
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

export class ApplicationSubgraphsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSubgraphs[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSubgraphsOutputReference {
    return new ApplicationSubgraphsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/application tailor_application}
*/
export class Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailor_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Application to import
  * @param importFromId The id of the existing Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailor_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/application tailor_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'tailor_application',
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
    this._allowedIpAddresses = config.allowedIpAddresses;
    this._auth.internalValue = config.auth;
    this._cors = config.cors;
    this._disableIntrospection = config.disableIntrospection;
    this._disabled = config.disabled;
    this._name = config.name;
    this._subgraphs.internalValue = config.subgraphs;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_ip_addresses - computed: false, optional: true, required: false
  private _allowedIpAddresses?: string[]; 
  public get allowedIpAddresses() {
    return this.getListAttribute('allowed_ip_addresses');
  }
  public set allowedIpAddresses(value: string[]) {
    this._allowedIpAddresses = value;
  }
  public resetAllowedIpAddresses() {
    this._allowedIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpAddressesInput() {
    return this._allowedIpAddresses;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new ApplicationAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ApplicationAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // cors - computed: false, optional: true, required: false
  private _cors?: string[]; 
  public get cors() {
    return this.getListAttribute('cors');
  }
  public set cors(value: string[]) {
    this._cors = value;
  }
  public resetCors() {
    this._cors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors;
  }

  // disable_introspection - computed: false, optional: true, required: false
  private _disableIntrospection?: boolean | cdktf.IResolvable; 
  public get disableIntrospection() {
    return this.getBooleanAttribute('disable_introspection');
  }
  public set disableIntrospection(value: boolean | cdktf.IResolvable) {
    this._disableIntrospection = value;
  }
  public resetDisableIntrospection() {
    this._disableIntrospection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIntrospectionInput() {
    return this._disableIntrospection;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
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

  // subgraphs - computed: false, optional: false, required: true
  private _subgraphs = new ApplicationSubgraphsList(this, "subgraphs", false);
  public get subgraphs() {
    return this._subgraphs;
  }
  public putSubgraphs(value: ApplicationSubgraphs[] | cdktf.IResolvable) {
    this._subgraphs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subgraphsInput() {
    return this._subgraphs.internalValue;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
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
      allowed_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedIpAddresses),
      auth: applicationAuthToTerraform(this._auth.internalValue),
      cors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cors),
      disable_introspection: cdktf.booleanToTerraform(this._disableIntrospection),
      disabled: cdktf.booleanToTerraform(this._disabled),
      name: cdktf.stringToTerraform(this._name),
      subgraphs: cdktf.listMapper(applicationSubgraphsToTerraform, false)(this._subgraphs.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedIpAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      auth: {
        value: applicationAuthToHclTerraform(this._auth.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationAuth",
      },
      cors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cors),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      disable_introspection: {
        value: cdktf.booleanToHclTerraform(this._disableIntrospection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subgraphs: {
        value: cdktf.listMapperHcl(applicationSubgraphsToHclTerraform, false)(this._subgraphs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSubgraphsList",
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
