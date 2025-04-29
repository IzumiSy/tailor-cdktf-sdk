// https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Namespace name for this auth resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth#namespace Auth#namespace}
  */
  readonly namespace: string;
  /**
  * The ID of the workspace that the auth namespace belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth#workspace_id Auth#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth tailor_auth}
*/
export class Auth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailor_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Auth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Auth to import
  * @param importFromId The id of the existing Auth that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Auth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailor_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/auth tailor_auth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthConfig
  */
  public constructor(scope: Construct, id: string, config: AuthConfig) {
    super(scope, id, {
      terraformResourceType: 'tailor_auth',
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
