import { type IsNever, type Writable, type z } from './flappy-type'
import { type SynthesizedFunction } from './synthesized-function'
import { type InvokeFunction } from './invoke-function'
import { type LLMBase } from './llm/llm-base'

type ResolveFunction<in TArgs extends z.ZodType, TReturn extends z.ZodType> = (
  args: TArgs
) => Promise<z.infer<Writable<TReturn>>>

interface FunctionsDefinitionBase<TName extends string, TArgs extends z.ZodType, TReturn extends z.ZodType> {
  name: TName
  description?: string
  args: TArgs
  returnType: TReturn
}

export interface InvokeFunctionDefinition<
  TName extends string,
  in out TArgs extends z.ZodType,
  TReturn extends z.ZodType
> extends FunctionsDefinitionBase<TName, TArgs, TReturn> {
  resolve: ResolveFunction<TArgs, TReturn>
}

export interface SynthesizedFunctionDefinition<TName extends string, TArgs extends z.ZodType, TReturn extends z.ZodType>
  extends FunctionsDefinitionBase<TName, TArgs, TReturn> {}

export type FlappyFunctionDefinition<
  TName extends string = string,
  TArgs extends z.ZodType = z.ZodType,
  TReturn extends z.ZodType = z.ZodType
> = InvokeFunctionDefinition<TName, TArgs, TReturn> | SynthesizedFunctionDefinition<TName, TArgs, TReturn>

export type AnyFlappyFunction = AnySynthesizedFunction | AnyInvokeFunction
type AnySynthesizedFunction = SynthesizedFunction<string, z.ZodType, z.ZodType>
type AnyInvokeFunction = InvokeFunction<string, any, z.ZodType>

export type FindFlappyFunction<TFunctions extends AnyFlappyFunction[], Name extends string> = IsNever<Name> extends true
  ? never
  : string extends Name
  ? never
  : TFunctions extends [infer First extends AnyFlappyFunction, ...infer Rest extends AnyFlappyFunction[]]
  ? First['define']['name'] extends Name
    ? First
    : FindFlappyFunction<Rest, Name>
  : never

export type FlappyFunctionNames<TFunctions extends AnyFlappyFunction[]> = TFunctions[number]['define']['name']

export interface CodeInterpreterOptions {
  /**
   * Enable network access in sandbox. Default is false.
   */
  enableNetwork?: boolean

  /**
   * Specify the cache directory for code interpreter.
   */
  cacheDir?: string

  /**
   * Environment variables for code interpreter.
   */
  env?: Record<string, string>
}

/**
 * FlappyAgent Config
 */
export interface FlappyAgentConfig<TFunctions extends AnyFlappyFunction[] = AnyFlappyFunction[]> {
  /**
   * Which language model to use for inference.
   */
  llm: LLMBase

  /**
   * Which language model to use for planning.
   * If not specified, use `llm` instead.
   */
  llmPlaner?: LLMBase

  /**
   * Code interpreter could be used to execute python code snippets in sandbox which are generated by language model.
   * If not specified, this feature will be disabled.
   */
  codeInterpreter?: false | CodeInterpreterOptions

  /**
   * List of functions that can be called by the agent or language model.
   */
  functions: TFunctions

  /**
   * Maximum number of retries when language model generation failed.
   * The default retries is 1.
   */
  retry?: number
}
