// https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/organization_team_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationTeamMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * The email of the member to add to the team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/organization_team_member#email OrganizationTeamMember#email}
  */
  readonly email: string;
  /**
  * The ID of the organization that the team belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/organization_team_member#organization_id OrganizationTeamMember#organization_id}
  */
  readonly organizationId: string;
  /**
  * The role of the member in the team. Can be one of `member`, `manager` or `admin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/organization_team_member#role OrganizationTeamMember#role}
  */
  readonly role: string;
  /**
  * The ID of the team that the member belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/organization_team_member#team_id OrganizationTeamMember#team_id}
  */
  readonly teamId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/organization_team_member tailor_organization_team_member}
*/
export class OrganizationTeamMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailor_organization_team_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationTeamMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationTeamMember to import
  * @param importFromId The id of the existing OrganizationTeamMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/organization_team_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationTeamMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailor_organization_team_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/organization_team_member tailor_organization_team_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationTeamMemberConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationTeamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'tailor_organization_team_member',
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
    this._email = config.email;
    this._organizationId = config.organizationId;
    this._role = config.role;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      role: cdktf.stringToTerraform(this._role),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
