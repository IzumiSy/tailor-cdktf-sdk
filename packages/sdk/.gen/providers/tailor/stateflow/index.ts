// https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/stateflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StateflowConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of admins for this StateFlow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/stateflow#admins Stateflow#admins}
  */
  readonly admins?: string[];
  /**
  * Namespace name for this StateFlow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/stateflow#namespace Stateflow#namespace}
  */
  readonly namespace: string;
  /**
  * The ID of the workspace that the StateFlow belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/stateflow#workspace_id Stateflow#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/stateflow tailor_stateflow}
*/
export class Stateflow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailor_stateflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Stateflow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Stateflow to import
  * @param importFromId The id of the existing Stateflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/stateflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Stateflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailor_stateflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/stateflow tailor_stateflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StateflowConfig
  */
  public constructor(scope: Construct, id: string, config: StateflowConfig) {
    super(scope, id, {
      terraformResourceType: 'tailor_stateflow',
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
    this._admins = config.admins;
    this._namespace = config.namespace;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admins - computed: false, optional: true, required: false
  private _admins?: string[]; 
  public get admins() {
    return this.getListAttribute('admins');
  }
  public set admins(value: string[]) {
    this._admins = value;
  }
  public resetAdmins() {
    this._admins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminsInput() {
    return this._admins;
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
      admins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._admins),
      namespace: cdktf.stringToTerraform(this._namespace),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._admins),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
