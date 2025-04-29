// https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/organization_folder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationFolderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of this organization folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/organization_folder#name OrganizationFolder#name}
  */
  readonly name: string;
  /**
  * The ID of the organization that the organization folder belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/organization_folder#organization_id OrganizationFolder#organization_id}
  */
  readonly organizationId: string;
  /**
  * The ID of the parent folder of the organization folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/organization_folder#parent_folder_id OrganizationFolder#parent_folder_id}
  */
  readonly parentFolderId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/organization_folder tailor_organization_folder}
*/
export class OrganizationFolder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailor_organization_folder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationFolder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationFolder to import
  * @param importFromId The id of the existing OrganizationFolder that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/organization_folder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationFolder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailor_organization_folder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/organization_folder tailor_organization_folder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationFolderConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationFolderConfig) {
    super(scope, id, {
      terraformResourceType: 'tailor_organization_folder',
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
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._parentFolderId = config.parentFolderId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // parent_folder_id - computed: false, optional: true, required: false
  private _parentFolderId?: string; 
  public get parentFolderId() {
    return this.getStringAttribute('parent_folder_id');
  }
  public set parentFolderId(value: string) {
    this._parentFolderId = value;
  }
  public resetParentFolderId() {
    this._parentFolderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentFolderIdInput() {
    return this._parentFolderId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      parent_folder_id: cdktf.stringToTerraform(this._parentFolderId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_folder_id: {
        value: cdktf.stringToHclTerraform(this._parentFolderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
