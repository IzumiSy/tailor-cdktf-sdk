// https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TailorProviderConfig {
  /**
  * 
  * The Personal Access Token (PAT) for the Tailor Platform API. This is used to authenticate with the Tailor Platform API.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs#pat TailorProvider#pat}
  */
  readonly pat?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs#alias TailorProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs tailor}
*/
export class TailorProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TailorProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TailorProvider to import
  * @param importFromId The id of the existing TailorProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TailorProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs tailor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TailorProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TailorProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tailor',
      terraformGeneratorMetadata: {
        providerName: 'tailor',
        providerVersion: '0.0.25',
        providerVersionConstraint: '~> 0.0'
      },
      terraformProviderSource: 'tailor-platform/tailor'
    });
    this._pat = config.pat;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // pat - computed: false, optional: true, required: false
  private _pat?: string; 
  public get pat() {
    return this._pat;
  }
  public set pat(value: string | undefined) {
    this._pat = value;
  }
  public resetPat() {
    this._pat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patInput() {
    return this._pat;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      pat: cdktf.stringToTerraform(this._pat),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      pat: {
        value: cdktf.stringToHclTerraform(this._pat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
