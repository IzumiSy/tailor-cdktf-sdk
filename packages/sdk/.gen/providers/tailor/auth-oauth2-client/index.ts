// https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_oauth2_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthOauth2ClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of this OAuth2 client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_oauth2_client#description AuthOauth2Client#description}
  */
  readonly description?: string;
  /**
  * The list of grant types for this OAuth2 client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_oauth2_client#grant_types AuthOauth2Client#grant_types}
  */
  readonly grantTypes?: string[];
  /**
  * The name of this OAuth2 client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_oauth2_client#name AuthOauth2Client#name}
  */
  readonly name: string;
  /**
  * The auth namespace of the OAuth2 client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_oauth2_client#namespace AuthOauth2Client#namespace}
  */
  readonly namespace: string;
  /**
  * The list of redirect URIs for this OAuth2 client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_oauth2_client#redirect_uris AuthOauth2Client#redirect_uris}
  */
  readonly redirectUris?: string[];
  /**
  * The ID of the workspace that the OAuth2 client belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_oauth2_client#workspace_id AuthOauth2Client#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_oauth2_client tailor_auth_oauth2_client}
*/
export class AuthOauth2Client extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailor_auth_oauth2_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthOauth2Client resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthOauth2Client to import
  * @param importFromId The id of the existing AuthOauth2Client that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_oauth2_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthOauth2Client to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailor_auth_oauth2_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth_oauth2_client tailor_auth_oauth2_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthOauth2ClientConfig
  */
  public constructor(scope: Construct, id: string, config: AuthOauth2ClientConfig) {
    super(scope, id, {
      terraformResourceType: 'tailor_auth_oauth2_client',
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
    this._grantTypes = config.grantTypes;
    this._name = config.name;
    this._namespace = config.namespace;
    this._redirectUris = config.redirectUris;
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

  // grant_types - computed: false, optional: true, required: false
  private _grantTypes?: string[]; 
  public get grantTypes() {
    return this.getListAttribute('grant_types');
  }
  public set grantTypes(value: string[]) {
    this._grantTypes = value;
  }
  public resetGrantTypes() {
    this._grantTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypesInput() {
    return this._grantTypes;
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

  // redirect_uris - computed: false, optional: true, required: false
  private _redirectUris?: string[]; 
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }
  public set redirectUris(value: string[]) {
    this._redirectUris = value;
  }
  public resetRedirectUris() {
    this._redirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrisInput() {
    return this._redirectUris;
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
      grant_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._grantTypes),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redirectUris),
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
      grant_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._grantTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      redirect_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redirectUris),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
