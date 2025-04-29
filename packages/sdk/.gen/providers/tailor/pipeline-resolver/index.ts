// https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PipelineResolverConfig extends cdktf.TerraformMetaArguments {
  /**
  * The authorization for this pipeline resolver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#authorization PipelineResolver#authorization}
  */
  readonly authorization: PipelineResolverAuthorization;
  /**
  * The description of this pipeline resolver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#description PipelineResolver#description}
  */
  readonly description?: string;
  /**
  * The name of this pipeline resolver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#name PipelineResolver#name}
  */
  readonly name: string;
  /**
  * The namespace of the pipeline resolver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#namespace PipelineResolver#namespace}
  */
  readonly namespace: string;
  /**
  * The post-hook JavaScript code for this pipeline resolver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#post_hook PipelineResolver#post_hook}
  */
  readonly postHook?: string;
  /**
  * The post-script CEL expression for this pipeline resolver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#post_script PipelineResolver#post_script}
  */
  readonly postScript?: string;
  /**
  * The pre-hook JavaScript code for this pipeline resolver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#pre_hook PipelineResolver#pre_hook}
  */
  readonly preHook?: string;
  /**
  * The pre-script CEL expression for this pipeline resolver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#pre_script PipelineResolver#pre_script}
  */
  readonly preScript?: string;
  /**
  * Whether to publish execution events for this pipeline resolver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#publish_execution_events PipelineResolver#publish_execution_events}
  */
  readonly publishExecutionEvents?: boolean | cdktf.IResolvable;
  /**
  * The SDL for this pipeline resolver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#sdl PipelineResolver#sdl}
  */
  readonly sdl: string;
  /**
  * The list of steps for this pipeline resolver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#steps PipelineResolver#steps}
  */
  readonly steps?: PipelineResolverSteps[] | cdktf.IResolvable;
  /**
  * The ID of the workspace that the pipeline resolver belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#workspace_id PipelineResolver#workspace_id}
  */
  readonly workspaceId: string;
}
export interface PipelineResolverAuthorization {
  /**
  * The CEL expression to evaluate for authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#expr PipelineResolver#expr}
  */
  readonly expr?: string;
  /**
  * Whether to allow unauthorized access to the pipeline resolver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#insecure PipelineResolver#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
}

export function pipelineResolverAuthorizationToTerraform(struct?: PipelineResolverAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expr: cdktf.stringToTerraform(struct!.expr),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
  }
}


export function pipelineResolverAuthorizationToHclTerraform(struct?: PipelineResolverAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expr: {
      value: cdktf.stringToHclTerraform(struct!.expr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineResolverAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineResolverAuthorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expr !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineResolverAuthorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expr = undefined;
      this._insecure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expr = value.expr;
      this._insecure = value.insecure;
    }
  }

  // expr - computed: false, optional: true, required: false
  private _expr?: string; 
  public get expr() {
    return this.getStringAttribute('expr');
  }
  public set expr(value: string) {
    this._expr = value;
  }
  public resetExpr() {
    this._expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }
}
export interface PipelineResolverStepsOperationFunctionInvokerMachineUser {
  /**
  * The auth namespace of the machine user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#auth_namespace PipelineResolver#auth_namespace}
  */
  readonly authNamespace: string;
  /**
  * The name of the machine user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#name PipelineResolver#name}
  */
  readonly name: string;
}

export function pipelineResolverStepsOperationFunctionInvokerMachineUserToTerraform(struct?: PipelineResolverStepsOperationFunctionInvokerMachineUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_namespace: cdktf.stringToTerraform(struct!.authNamespace),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function pipelineResolverStepsOperationFunctionInvokerMachineUserToHclTerraform(struct?: PipelineResolverStepsOperationFunctionInvokerMachineUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_namespace: {
      value: cdktf.stringToHclTerraform(struct!.authNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineResolverStepsOperationFunctionInvokerMachineUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineResolverStepsOperationFunctionInvokerMachineUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.authNamespace = this._authNamespace;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineResolverStepsOperationFunctionInvokerMachineUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authNamespace = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authNamespace = value.authNamespace;
      this._name = value.name;
    }
  }

  // auth_namespace - computed: false, optional: false, required: true
  private _authNamespace?: string; 
  public get authNamespace() {
    return this.getStringAttribute('auth_namespace');
  }
  public set authNamespace(value: string) {
    this._authNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authNamespaceInput() {
    return this._authNamespace;
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
}
export interface PipelineResolverStepsOperationFunctionInvoker {
  /**
  * Attach the operation to an event user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#event_user PipelineResolver#event_user}
  */
  readonly eventUser?: boolean | cdktf.IResolvable;
  /**
  * Attach the operation to a machine user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#machine_user PipelineResolver#machine_user}
  */
  readonly machineUser?: PipelineResolverStepsOperationFunctionInvokerMachineUser;
}

export function pipelineResolverStepsOperationFunctionInvokerToTerraform(struct?: PipelineResolverStepsOperationFunctionInvoker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_user: cdktf.booleanToTerraform(struct!.eventUser),
    machine_user: pipelineResolverStepsOperationFunctionInvokerMachineUserToTerraform(struct!.machineUser),
  }
}


export function pipelineResolverStepsOperationFunctionInvokerToHclTerraform(struct?: PipelineResolverStepsOperationFunctionInvoker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_user: {
      value: cdktf.booleanToHclTerraform(struct!.eventUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    machine_user: {
      value: pipelineResolverStepsOperationFunctionInvokerMachineUserToHclTerraform(struct!.machineUser),
      isBlock: true,
      type: "struct",
      storageClassType: "PipelineResolverStepsOperationFunctionInvokerMachineUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineResolverStepsOperationFunctionInvokerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineResolverStepsOperationFunctionInvoker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventUser = this._eventUser;
    }
    if (this._machineUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineUser = this._machineUser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineResolverStepsOperationFunctionInvoker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventUser = undefined;
      this._machineUser.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventUser = value.eventUser;
      this._machineUser.internalValue = value.machineUser;
    }
  }

  // event_user - computed: false, optional: true, required: false
  private _eventUser?: boolean | cdktf.IResolvable; 
  public get eventUser() {
    return this.getBooleanAttribute('event_user');
  }
  public set eventUser(value: boolean | cdktf.IResolvable) {
    this._eventUser = value;
  }
  public resetEventUser() {
    this._eventUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventUserInput() {
    return this._eventUser;
  }

  // machine_user - computed: false, optional: true, required: false
  private _machineUser = new PipelineResolverStepsOperationFunctionInvokerMachineUserOutputReference(this, "machine_user");
  public get machineUser() {
    return this._machineUser;
  }
  public putMachineUser(value: PipelineResolverStepsOperationFunctionInvokerMachineUser) {
    this._machineUser.internalValue = value;
  }
  public resetMachineUser() {
    this._machineUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineUserInput() {
    return this._machineUser.internalValue;
  }
}
export interface PipelineResolverStepsOperationFunction {
  /**
  * The invoker of the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#invoker PipelineResolver#invoker}
  */
  readonly invoker?: PipelineResolverStepsOperationFunctionInvoker;
  /**
  * The name of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#name PipelineResolver#name}
  */
  readonly name: string;
  /**
  * The script to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#script PipelineResolver#script}
  */
  readonly script: string;
  /**
  * The variables to pass to the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#variables PipelineResolver#variables}
  */
  readonly variables?: string;
}

export function pipelineResolverStepsOperationFunctionToTerraform(struct?: PipelineResolverStepsOperationFunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invoker: pipelineResolverStepsOperationFunctionInvokerToTerraform(struct!.invoker),
    name: cdktf.stringToTerraform(struct!.name),
    script: cdktf.stringToTerraform(struct!.script),
    variables: cdktf.stringToTerraform(struct!.variables),
  }
}


export function pipelineResolverStepsOperationFunctionToHclTerraform(struct?: PipelineResolverStepsOperationFunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invoker: {
      value: pipelineResolverStepsOperationFunctionInvokerToHclTerraform(struct!.invoker),
      isBlock: true,
      type: "struct",
      storageClassType: "PipelineResolverStepsOperationFunctionInvoker",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktf.stringToHclTerraform(struct!.variables),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineResolverStepsOperationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineResolverStepsOperationFunction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invoker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invoker = this._invoker?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._variables !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineResolverStepsOperationFunction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invoker.internalValue = undefined;
      this._name = undefined;
      this._script = undefined;
      this._variables = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invoker.internalValue = value.invoker;
      this._name = value.name;
      this._script = value.script;
      this._variables = value.variables;
    }
  }

  // invoker - computed: false, optional: true, required: false
  private _invoker = new PipelineResolverStepsOperationFunctionInvokerOutputReference(this, "invoker");
  public get invoker() {
    return this._invoker;
  }
  public putInvoker(value: PipelineResolverStepsOperationFunctionInvoker) {
    this._invoker.internalValue = value;
  }
  public resetInvoker() {
    this._invoker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokerInput() {
    return this._invoker.internalValue;
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

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: string; 
  public get variables() {
    return this.getStringAttribute('variables');
  }
  public set variables(value: string) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }
}
export interface PipelineResolverStepsOperationTailorGraphqlInvokerMachineUser {
  /**
  * The auth namespace of the machine user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#auth_namespace PipelineResolver#auth_namespace}
  */
  readonly authNamespace: string;
  /**
  * The name of the machine user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#name PipelineResolver#name}
  */
  readonly name: string;
}

export function pipelineResolverStepsOperationTailorGraphqlInvokerMachineUserToTerraform(struct?: PipelineResolverStepsOperationTailorGraphqlInvokerMachineUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_namespace: cdktf.stringToTerraform(struct!.authNamespace),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function pipelineResolverStepsOperationTailorGraphqlInvokerMachineUserToHclTerraform(struct?: PipelineResolverStepsOperationTailorGraphqlInvokerMachineUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_namespace: {
      value: cdktf.stringToHclTerraform(struct!.authNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineResolverStepsOperationTailorGraphqlInvokerMachineUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineResolverStepsOperationTailorGraphqlInvokerMachineUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.authNamespace = this._authNamespace;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineResolverStepsOperationTailorGraphqlInvokerMachineUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authNamespace = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authNamespace = value.authNamespace;
      this._name = value.name;
    }
  }

  // auth_namespace - computed: false, optional: false, required: true
  private _authNamespace?: string; 
  public get authNamespace() {
    return this.getStringAttribute('auth_namespace');
  }
  public set authNamespace(value: string) {
    this._authNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authNamespaceInput() {
    return this._authNamespace;
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
}
export interface PipelineResolverStepsOperationTailorGraphqlInvoker {
  /**
  * Attach the operation to an event user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#event_user PipelineResolver#event_user}
  */
  readonly eventUser?: boolean | cdktf.IResolvable;
  /**
  * Attach the operation to a machine user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#machine_user PipelineResolver#machine_user}
  */
  readonly machineUser?: PipelineResolverStepsOperationTailorGraphqlInvokerMachineUser;
}

export function pipelineResolverStepsOperationTailorGraphqlInvokerToTerraform(struct?: PipelineResolverStepsOperationTailorGraphqlInvoker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_user: cdktf.booleanToTerraform(struct!.eventUser),
    machine_user: pipelineResolverStepsOperationTailorGraphqlInvokerMachineUserToTerraform(struct!.machineUser),
  }
}


export function pipelineResolverStepsOperationTailorGraphqlInvokerToHclTerraform(struct?: PipelineResolverStepsOperationTailorGraphqlInvoker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_user: {
      value: cdktf.booleanToHclTerraform(struct!.eventUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    machine_user: {
      value: pipelineResolverStepsOperationTailorGraphqlInvokerMachineUserToHclTerraform(struct!.machineUser),
      isBlock: true,
      type: "struct",
      storageClassType: "PipelineResolverStepsOperationTailorGraphqlInvokerMachineUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineResolverStepsOperationTailorGraphqlInvokerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineResolverStepsOperationTailorGraphqlInvoker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventUser = this._eventUser;
    }
    if (this._machineUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineUser = this._machineUser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineResolverStepsOperationTailorGraphqlInvoker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventUser = undefined;
      this._machineUser.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventUser = value.eventUser;
      this._machineUser.internalValue = value.machineUser;
    }
  }

  // event_user - computed: false, optional: true, required: false
  private _eventUser?: boolean | cdktf.IResolvable; 
  public get eventUser() {
    return this.getBooleanAttribute('event_user');
  }
  public set eventUser(value: boolean | cdktf.IResolvable) {
    this._eventUser = value;
  }
  public resetEventUser() {
    this._eventUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventUserInput() {
    return this._eventUser;
  }

  // machine_user - computed: false, optional: true, required: false
  private _machineUser = new PipelineResolverStepsOperationTailorGraphqlInvokerMachineUserOutputReference(this, "machine_user");
  public get machineUser() {
    return this._machineUser;
  }
  public putMachineUser(value: PipelineResolverStepsOperationTailorGraphqlInvokerMachineUser) {
    this._machineUser.internalValue = value;
  }
  public resetMachineUser() {
    this._machineUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineUserInput() {
    return this._machineUser.internalValue;
  }
}
export interface PipelineResolverStepsOperationTailorGraphql {
  /**
  * The name of the app to query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#app_name PipelineResolver#app_name}
  */
  readonly appName?: string;
  /**
  * The invoker of the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#invoker PipelineResolver#invoker}
  */
  readonly invoker?: PipelineResolverStepsOperationTailorGraphqlInvoker;
  /**
  * The GraphQL query to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#query PipelineResolver#query}
  */
  readonly query: string;
  /**
  * The variables to pass to the GraphQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#variables PipelineResolver#variables}
  */
  readonly variables?: string;
}

export function pipelineResolverStepsOperationTailorGraphqlToTerraform(struct?: PipelineResolverStepsOperationTailorGraphql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_name: cdktf.stringToTerraform(struct!.appName),
    invoker: pipelineResolverStepsOperationTailorGraphqlInvokerToTerraform(struct!.invoker),
    query: cdktf.stringToTerraform(struct!.query),
    variables: cdktf.stringToTerraform(struct!.variables),
  }
}


export function pipelineResolverStepsOperationTailorGraphqlToHclTerraform(struct?: PipelineResolverStepsOperationTailorGraphql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_name: {
      value: cdktf.stringToHclTerraform(struct!.appName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invoker: {
      value: pipelineResolverStepsOperationTailorGraphqlInvokerToHclTerraform(struct!.invoker),
      isBlock: true,
      type: "struct",
      storageClassType: "PipelineResolverStepsOperationTailorGraphqlInvoker",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktf.stringToHclTerraform(struct!.variables),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineResolverStepsOperationTailorGraphqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineResolverStepsOperationTailorGraphql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appName = this._appName;
    }
    if (this._invoker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invoker = this._invoker?.internalValue;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._variables !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineResolverStepsOperationTailorGraphql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appName = undefined;
      this._invoker.internalValue = undefined;
      this._query = undefined;
      this._variables = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appName = value.appName;
      this._invoker.internalValue = value.invoker;
      this._query = value.query;
      this._variables = value.variables;
    }
  }

  // app_name - computed: false, optional: true, required: false
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  public resetAppName() {
    this._appName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // invoker - computed: false, optional: true, required: false
  private _invoker = new PipelineResolverStepsOperationTailorGraphqlInvokerOutputReference(this, "invoker");
  public get invoker() {
    return this._invoker;
  }
  public putInvoker(value: PipelineResolverStepsOperationTailorGraphqlInvoker) {
    this._invoker.internalValue = value;
  }
  public resetInvoker() {
    this._invoker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokerInput() {
    return this._invoker.internalValue;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: string; 
  public get variables() {
    return this.getStringAttribute('variables');
  }
  public set variables(value: string) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }
}
export interface PipelineResolverStepsOperationWebhookHeadersSecretValue {
  /**
  * The name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#secret_name PipelineResolver#secret_name}
  */
  readonly secretName: string;
  /**
  * The name of the vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#vault_name PipelineResolver#vault_name}
  */
  readonly vaultName: string;
}

export function pipelineResolverStepsOperationWebhookHeadersSecretValueToTerraform(struct?: PipelineResolverStepsOperationWebhookHeadersSecretValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    vault_name: cdktf.stringToTerraform(struct!.vaultName),
  }
}


export function pipelineResolverStepsOperationWebhookHeadersSecretValueToHclTerraform(struct?: PipelineResolverStepsOperationWebhookHeadersSecretValue | cdktf.IResolvable): any {
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

export class PipelineResolverStepsOperationWebhookHeadersSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineResolverStepsOperationWebhookHeadersSecretValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PipelineResolverStepsOperationWebhookHeadersSecretValue | cdktf.IResolvable | undefined) {
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
export interface PipelineResolverStepsOperationWebhookHeaders {
  /**
  * The key of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#key PipelineResolver#key}
  */
  readonly key: string;
  /**
  * The raw value of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#raw_value PipelineResolver#raw_value}
  */
  readonly rawValue?: string;
  /**
  * The secret value to load.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#secret_value PipelineResolver#secret_value}
  */
  readonly secretValue?: PipelineResolverStepsOperationWebhookHeadersSecretValue;
}

export function pipelineResolverStepsOperationWebhookHeadersToTerraform(struct?: PipelineResolverStepsOperationWebhookHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    raw_value: cdktf.stringToTerraform(struct!.rawValue),
    secret_value: pipelineResolverStepsOperationWebhookHeadersSecretValueToTerraform(struct!.secretValue),
  }
}


export function pipelineResolverStepsOperationWebhookHeadersToHclTerraform(struct?: PipelineResolverStepsOperationWebhookHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_value: {
      value: cdktf.stringToHclTerraform(struct!.rawValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: pipelineResolverStepsOperationWebhookHeadersSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "struct",
      storageClassType: "PipelineResolverStepsOperationWebhookHeadersSecretValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineResolverStepsOperationWebhookHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineResolverStepsOperationWebhookHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._rawValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawValue = this._rawValue;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineResolverStepsOperationWebhookHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._rawValue = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._rawValue = value.rawValue;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // raw_value - computed: false, optional: true, required: false
  private _rawValue?: string; 
  public get rawValue() {
    return this.getStringAttribute('raw_value');
  }
  public set rawValue(value: string) {
    this._rawValue = value;
  }
  public resetRawValue() {
    this._rawValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawValueInput() {
    return this._rawValue;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new PipelineResolverStepsOperationWebhookHeadersSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: PipelineResolverStepsOperationWebhookHeadersSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class PipelineResolverStepsOperationWebhookHeadersList extends cdktf.ComplexList {
  public internalValue? : PipelineResolverStepsOperationWebhookHeaders[] | cdktf.IResolvable

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
  public get(index: number): PipelineResolverStepsOperationWebhookHeadersOutputReference {
    return new PipelineResolverStepsOperationWebhookHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineResolverStepsOperationWebhookSignatureSecret {
  /**
  * The name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#secret_name PipelineResolver#secret_name}
  */
  readonly secretName: string;
  /**
  * The name of the vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#vault_name PipelineResolver#vault_name}
  */
  readonly vaultName: string;
}

export function pipelineResolverStepsOperationWebhookSignatureSecretToTerraform(struct?: PipelineResolverStepsOperationWebhookSignatureSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    vault_name: cdktf.stringToTerraform(struct!.vaultName),
  }
}


export function pipelineResolverStepsOperationWebhookSignatureSecretToHclTerraform(struct?: PipelineResolverStepsOperationWebhookSignatureSecret | cdktf.IResolvable): any {
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

export class PipelineResolverStepsOperationWebhookSignatureSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineResolverStepsOperationWebhookSignatureSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PipelineResolverStepsOperationWebhookSignatureSecret | cdktf.IResolvable | undefined) {
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
export interface PipelineResolverStepsOperationWebhook {
  /**
  * The body to send with the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#body PipelineResolver#body}
  */
  readonly body?: string;
  /**
  * The headers to send with the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#headers PipelineResolver#headers}
  */
  readonly headers?: PipelineResolverStepsOperationWebhookHeaders[] | cdktf.IResolvable;
  /**
  * The secret value to load.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#signature_secret PipelineResolver#signature_secret}
  */
  readonly signatureSecret?: PipelineResolverStepsOperationWebhookSignatureSecret;
  /**
  * The URL of the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#url PipelineResolver#url}
  */
  readonly url: string;
}

export function pipelineResolverStepsOperationWebhookToTerraform(struct?: PipelineResolverStepsOperationWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    headers: cdktf.listMapper(pipelineResolverStepsOperationWebhookHeadersToTerraform, false)(struct!.headers),
    signature_secret: pipelineResolverStepsOperationWebhookSignatureSecretToTerraform(struct!.signatureSecret),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function pipelineResolverStepsOperationWebhookToHclTerraform(struct?: PipelineResolverStepsOperationWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(pipelineResolverStepsOperationWebhookHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineResolverStepsOperationWebhookHeadersList",
    },
    signature_secret: {
      value: pipelineResolverStepsOperationWebhookSignatureSecretToHclTerraform(struct!.signatureSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "PipelineResolverStepsOperationWebhookSignatureSecret",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineResolverStepsOperationWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineResolverStepsOperationWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._signatureSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureSecret = this._signatureSecret?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineResolverStepsOperationWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._headers.internalValue = undefined;
      this._signatureSecret.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._headers.internalValue = value.headers;
      this._signatureSecret.internalValue = value.signatureSecret;
      this._url = value.url;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new PipelineResolverStepsOperationWebhookHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: PipelineResolverStepsOperationWebhookHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // signature_secret - computed: false, optional: true, required: false
  private _signatureSecret = new PipelineResolverStepsOperationWebhookSignatureSecretOutputReference(this, "signature_secret");
  public get signatureSecret() {
    return this._signatureSecret;
  }
  public putSignatureSecret(value: PipelineResolverStepsOperationWebhookSignatureSecret) {
    this._signatureSecret.internalValue = value;
  }
  public resetSignatureSecret() {
    this._signatureSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureSecretInput() {
    return this._signatureSecret.internalValue;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface PipelineResolverStepsOperation {
  /**
  * configuration for the function operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#function PipelineResolver#function}
  */
  readonly function?: PipelineResolverStepsOperationFunction;
  /**
  * configuration for the graphql operation to Tailor Platform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#tailor_graphql PipelineResolver#tailor_graphql}
  */
  readonly tailorGraphql?: PipelineResolverStepsOperationTailorGraphql;
  /**
  * configuration for the webhook operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#webhook PipelineResolver#webhook}
  */
  readonly webhook?: PipelineResolverStepsOperationWebhook;
}

export function pipelineResolverStepsOperationToTerraform(struct?: PipelineResolverStepsOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function: pipelineResolverStepsOperationFunctionToTerraform(struct!.function),
    tailor_graphql: pipelineResolverStepsOperationTailorGraphqlToTerraform(struct!.tailorGraphql),
    webhook: pipelineResolverStepsOperationWebhookToTerraform(struct!.webhook),
  }
}


export function pipelineResolverStepsOperationToHclTerraform(struct?: PipelineResolverStepsOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function: {
      value: pipelineResolverStepsOperationFunctionToHclTerraform(struct!.function),
      isBlock: true,
      type: "struct",
      storageClassType: "PipelineResolverStepsOperationFunction",
    },
    tailor_graphql: {
      value: pipelineResolverStepsOperationTailorGraphqlToHclTerraform(struct!.tailorGraphql),
      isBlock: true,
      type: "struct",
      storageClassType: "PipelineResolverStepsOperationTailorGraphql",
    },
    webhook: {
      value: pipelineResolverStepsOperationWebhookToHclTerraform(struct!.webhook),
      isBlock: true,
      type: "struct",
      storageClassType: "PipelineResolverStepsOperationWebhook",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineResolverStepsOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineResolverStepsOperation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._function?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function?.internalValue;
    }
    if (this._tailorGraphql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tailorGraphql = this._tailorGraphql?.internalValue;
    }
    if (this._webhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineResolverStepsOperation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._function.internalValue = undefined;
      this._tailorGraphql.internalValue = undefined;
      this._webhook.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._function.internalValue = value.function;
      this._tailorGraphql.internalValue = value.tailorGraphql;
      this._webhook.internalValue = value.webhook;
    }
  }

  // function - computed: false, optional: true, required: false
  private _function = new PipelineResolverStepsOperationFunctionOutputReference(this, "function");
  public get function() {
    return this._function;
  }
  public putFunction(value: PipelineResolverStepsOperationFunction) {
    this._function.internalValue = value;
  }
  public resetFunction() {
    this._function.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function.internalValue;
  }

  // tailor_graphql - computed: false, optional: true, required: false
  private _tailorGraphql = new PipelineResolverStepsOperationTailorGraphqlOutputReference(this, "tailor_graphql");
  public get tailorGraphql() {
    return this._tailorGraphql;
  }
  public putTailorGraphql(value: PipelineResolverStepsOperationTailorGraphql) {
    this._tailorGraphql.internalValue = value;
  }
  public resetTailorGraphql() {
    this._tailorGraphql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tailorGraphqlInput() {
    return this._tailorGraphql.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new PipelineResolverStepsOperationWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: PipelineResolverStepsOperationWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }
}
export interface PipelineResolverSteps {
  /**
  * Attach context data to the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#context_data PipelineResolver#context_data}
  */
  readonly contextData?: string;
  /**
  * The description of this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#description PipelineResolver#description}
  */
  readonly description?: string;
  /**
  * The CEL expression to evaluate for looping this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#loop_with PipelineResolver#loop_with}
  */
  readonly loopWith?: string;
  /**
  * The name of this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#name PipelineResolver#name}
  */
  readonly name: string;
  /**
  * The operation to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#operation PipelineResolver#operation}
  */
  readonly operation: PipelineResolverStepsOperation;
  /**
  * The post-hook JavaScript code for this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#post_hook PipelineResolver#post_hook}
  */
  readonly postHook?: string;
  /**
  * The post-script CEL expression for this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#post_script PipelineResolver#post_script}
  */
  readonly postScript?: string;
  /**
  * The post-validation CEL expression for this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#post_validation PipelineResolver#post_validation}
  */
  readonly postValidation?: string;
  /**
  * The pre-hook JavaScript code for this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#pre_hook PipelineResolver#pre_hook}
  */
  readonly preHook?: string;
  /**
  * The pre-script CEL expression for this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#pre_script PipelineResolver#pre_script}
  */
  readonly preScript?: string;
  /**
  * The pre-validation CEL expression for this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#pre_validation PipelineResolver#pre_validation}
  */
  readonly preValidation?: string;
  /**
  * The CEL expression to evaluate for running this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#run_if PipelineResolver#run_if}
  */
  readonly runIf?: string;
  /**
  * Whether to skip this step if the operation fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#skip_on_operation_error PipelineResolver#skip_on_operation_error}
  */
  readonly skipOnOperationError?: boolean | cdktf.IResolvable;
}

export function pipelineResolverStepsToTerraform(struct?: PipelineResolverSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_data: cdktf.stringToTerraform(struct!.contextData),
    description: cdktf.stringToTerraform(struct!.description),
    loop_with: cdktf.stringToTerraform(struct!.loopWith),
    name: cdktf.stringToTerraform(struct!.name),
    operation: pipelineResolverStepsOperationToTerraform(struct!.operation),
    post_hook: cdktf.stringToTerraform(struct!.postHook),
    post_script: cdktf.stringToTerraform(struct!.postScript),
    post_validation: cdktf.stringToTerraform(struct!.postValidation),
    pre_hook: cdktf.stringToTerraform(struct!.preHook),
    pre_script: cdktf.stringToTerraform(struct!.preScript),
    pre_validation: cdktf.stringToTerraform(struct!.preValidation),
    run_if: cdktf.stringToTerraform(struct!.runIf),
    skip_on_operation_error: cdktf.booleanToTerraform(struct!.skipOnOperationError),
  }
}


export function pipelineResolverStepsToHclTerraform(struct?: PipelineResolverSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context_data: {
      value: cdktf.stringToHclTerraform(struct!.contextData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loop_with: {
      value: cdktf.stringToHclTerraform(struct!.loopWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: pipelineResolverStepsOperationToHclTerraform(struct!.operation),
      isBlock: true,
      type: "struct",
      storageClassType: "PipelineResolverStepsOperation",
    },
    post_hook: {
      value: cdktf.stringToHclTerraform(struct!.postHook),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_script: {
      value: cdktf.stringToHclTerraform(struct!.postScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_validation: {
      value: cdktf.stringToHclTerraform(struct!.postValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_hook: {
      value: cdktf.stringToHclTerraform(struct!.preHook),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_script: {
      value: cdktf.stringToHclTerraform(struct!.preScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_validation: {
      value: cdktf.stringToHclTerraform(struct!.preValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_if: {
      value: cdktf.stringToHclTerraform(struct!.runIf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_on_operation_error: {
      value: cdktf.booleanToHclTerraform(struct!.skipOnOperationError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineResolverStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineResolverSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextData !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextData = this._contextData;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._loopWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopWith = this._loopWith;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation?.internalValue;
    }
    if (this._postHook !== undefined) {
      hasAnyValues = true;
      internalValueResult.postHook = this._postHook;
    }
    if (this._postScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.postScript = this._postScript;
    }
    if (this._postValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.postValidation = this._postValidation;
    }
    if (this._preHook !== undefined) {
      hasAnyValues = true;
      internalValueResult.preHook = this._preHook;
    }
    if (this._preScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.preScript = this._preScript;
    }
    if (this._preValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.preValidation = this._preValidation;
    }
    if (this._runIf !== undefined) {
      hasAnyValues = true;
      internalValueResult.runIf = this._runIf;
    }
    if (this._skipOnOperationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipOnOperationError = this._skipOnOperationError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineResolverSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextData = undefined;
      this._description = undefined;
      this._loopWith = undefined;
      this._name = undefined;
      this._operation.internalValue = undefined;
      this._postHook = undefined;
      this._postScript = undefined;
      this._postValidation = undefined;
      this._preHook = undefined;
      this._preScript = undefined;
      this._preValidation = undefined;
      this._runIf = undefined;
      this._skipOnOperationError = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contextData = value.contextData;
      this._description = value.description;
      this._loopWith = value.loopWith;
      this._name = value.name;
      this._operation.internalValue = value.operation;
      this._postHook = value.postHook;
      this._postScript = value.postScript;
      this._postValidation = value.postValidation;
      this._preHook = value.preHook;
      this._preScript = value.preScript;
      this._preValidation = value.preValidation;
      this._runIf = value.runIf;
      this._skipOnOperationError = value.skipOnOperationError;
    }
  }

  // context_data - computed: false, optional: true, required: false
  private _contextData?: string; 
  public get contextData() {
    return this.getStringAttribute('context_data');
  }
  public set contextData(value: string) {
    this._contextData = value;
  }
  public resetContextData() {
    this._contextData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextDataInput() {
    return this._contextData;
  }

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

  // loop_with - computed: false, optional: true, required: false
  private _loopWith?: string; 
  public get loopWith() {
    return this.getStringAttribute('loop_with');
  }
  public set loopWith(value: string) {
    this._loopWith = value;
  }
  public resetLoopWith() {
    this._loopWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopWithInput() {
    return this._loopWith;
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

  // operation - computed: false, optional: false, required: true
  private _operation = new PipelineResolverStepsOperationOutputReference(this, "operation");
  public get operation() {
    return this._operation;
  }
  public putOperation(value: PipelineResolverStepsOperation) {
    this._operation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation.internalValue;
  }

  // post_hook - computed: false, optional: true, required: false
  private _postHook?: string; 
  public get postHook() {
    return this.getStringAttribute('post_hook');
  }
  public set postHook(value: string) {
    this._postHook = value;
  }
  public resetPostHook() {
    this._postHook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postHookInput() {
    return this._postHook;
  }

  // post_script - computed: false, optional: true, required: false
  private _postScript?: string; 
  public get postScript() {
    return this.getStringAttribute('post_script');
  }
  public set postScript(value: string) {
    this._postScript = value;
  }
  public resetPostScript() {
    this._postScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postScriptInput() {
    return this._postScript;
  }

  // post_validation - computed: false, optional: true, required: false
  private _postValidation?: string; 
  public get postValidation() {
    return this.getStringAttribute('post_validation');
  }
  public set postValidation(value: string) {
    this._postValidation = value;
  }
  public resetPostValidation() {
    this._postValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postValidationInput() {
    return this._postValidation;
  }

  // pre_hook - computed: false, optional: true, required: false
  private _preHook?: string; 
  public get preHook() {
    return this.getStringAttribute('pre_hook');
  }
  public set preHook(value: string) {
    this._preHook = value;
  }
  public resetPreHook() {
    this._preHook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preHookInput() {
    return this._preHook;
  }

  // pre_script - computed: false, optional: true, required: false
  private _preScript?: string; 
  public get preScript() {
    return this.getStringAttribute('pre_script');
  }
  public set preScript(value: string) {
    this._preScript = value;
  }
  public resetPreScript() {
    this._preScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preScriptInput() {
    return this._preScript;
  }

  // pre_validation - computed: false, optional: true, required: false
  private _preValidation?: string; 
  public get preValidation() {
    return this.getStringAttribute('pre_validation');
  }
  public set preValidation(value: string) {
    this._preValidation = value;
  }
  public resetPreValidation() {
    this._preValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preValidationInput() {
    return this._preValidation;
  }

  // run_if - computed: false, optional: true, required: false
  private _runIf?: string; 
  public get runIf() {
    return this.getStringAttribute('run_if');
  }
  public set runIf(value: string) {
    this._runIf = value;
  }
  public resetRunIf() {
    this._runIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runIfInput() {
    return this._runIf;
  }

  // skip_on_operation_error - computed: false, optional: true, required: false
  private _skipOnOperationError?: boolean | cdktf.IResolvable; 
  public get skipOnOperationError() {
    return this.getBooleanAttribute('skip_on_operation_error');
  }
  public set skipOnOperationError(value: boolean | cdktf.IResolvable) {
    this._skipOnOperationError = value;
  }
  public resetSkipOnOperationError() {
    this._skipOnOperationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipOnOperationErrorInput() {
    return this._skipOnOperationError;
  }
}

export class PipelineResolverStepsList extends cdktf.ComplexList {
  public internalValue? : PipelineResolverSteps[] | cdktf.IResolvable

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
  public get(index: number): PipelineResolverStepsOutputReference {
    return new PipelineResolverStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver tailor_pipeline_resolver}
*/
export class PipelineResolver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailor_pipeline_resolver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PipelineResolver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PipelineResolver to import
  * @param importFromId The id of the existing PipelineResolver that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PipelineResolver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailor_pipeline_resolver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailor-platform/tailor/0.0.25/docs/resources/pipeline_resolver tailor_pipeline_resolver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineResolverConfig
  */
  public constructor(scope: Construct, id: string, config: PipelineResolverConfig) {
    super(scope, id, {
      terraformResourceType: 'tailor_pipeline_resolver',
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
    this._authorization.internalValue = config.authorization;
    this._description = config.description;
    this._name = config.name;
    this._namespace = config.namespace;
    this._postHook = config.postHook;
    this._postScript = config.postScript;
    this._preHook = config.preHook;
    this._preScript = config.preScript;
    this._publishExecutionEvents = config.publishExecutionEvents;
    this._sdl = config.sdl;
    this._steps.internalValue = config.steps;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization - computed: false, optional: false, required: true
  private _authorization = new PipelineResolverAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: PipelineResolverAuthorization) {
    this._authorization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

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

  // post_hook - computed: false, optional: true, required: false
  private _postHook?: string; 
  public get postHook() {
    return this.getStringAttribute('post_hook');
  }
  public set postHook(value: string) {
    this._postHook = value;
  }
  public resetPostHook() {
    this._postHook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postHookInput() {
    return this._postHook;
  }

  // post_script - computed: false, optional: true, required: false
  private _postScript?: string; 
  public get postScript() {
    return this.getStringAttribute('post_script');
  }
  public set postScript(value: string) {
    this._postScript = value;
  }
  public resetPostScript() {
    this._postScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postScriptInput() {
    return this._postScript;
  }

  // pre_hook - computed: false, optional: true, required: false
  private _preHook?: string; 
  public get preHook() {
    return this.getStringAttribute('pre_hook');
  }
  public set preHook(value: string) {
    this._preHook = value;
  }
  public resetPreHook() {
    this._preHook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preHookInput() {
    return this._preHook;
  }

  // pre_script - computed: false, optional: true, required: false
  private _preScript?: string; 
  public get preScript() {
    return this.getStringAttribute('pre_script');
  }
  public set preScript(value: string) {
    this._preScript = value;
  }
  public resetPreScript() {
    this._preScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preScriptInput() {
    return this._preScript;
  }

  // publish_execution_events - computed: false, optional: true, required: false
  private _publishExecutionEvents?: boolean | cdktf.IResolvable; 
  public get publishExecutionEvents() {
    return this.getBooleanAttribute('publish_execution_events');
  }
  public set publishExecutionEvents(value: boolean | cdktf.IResolvable) {
    this._publishExecutionEvents = value;
  }
  public resetPublishExecutionEvents() {
    this._publishExecutionEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishExecutionEventsInput() {
    return this._publishExecutionEvents;
  }

  // sdl - computed: false, optional: false, required: true
  private _sdl?: string; 
  public get sdl() {
    return this.getStringAttribute('sdl');
  }
  public set sdl(value: string) {
    this._sdl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sdlInput() {
    return this._sdl;
  }

  // steps - computed: false, optional: true, required: false
  private _steps = new PipelineResolverStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: PipelineResolverSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  public resetSteps() {
    this._steps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
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
      authorization: pipelineResolverAuthorizationToTerraform(this._authorization.internalValue),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      post_hook: cdktf.stringToTerraform(this._postHook),
      post_script: cdktf.stringToTerraform(this._postScript),
      pre_hook: cdktf.stringToTerraform(this._preHook),
      pre_script: cdktf.stringToTerraform(this._preScript),
      publish_execution_events: cdktf.booleanToTerraform(this._publishExecutionEvents),
      sdl: cdktf.stringToTerraform(this._sdl),
      steps: cdktf.listMapper(pipelineResolverStepsToTerraform, false)(this._steps.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization: {
        value: pipelineResolverAuthorizationToHclTerraform(this._authorization.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipelineResolverAuthorization",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      post_hook: {
        value: cdktf.stringToHclTerraform(this._postHook),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_script: {
        value: cdktf.stringToHclTerraform(this._postScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_hook: {
        value: cdktf.stringToHclTerraform(this._preHook),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_script: {
        value: cdktf.stringToHclTerraform(this._preScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publish_execution_events: {
        value: cdktf.booleanToHclTerraform(this._publishExecutionEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sdl: {
        value: cdktf.stringToHclTerraform(this._sdl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      steps: {
        value: cdktf.listMapperHcl(pipelineResolverStepsToHclTerraform, false)(this._steps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineResolverStepsList",
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
