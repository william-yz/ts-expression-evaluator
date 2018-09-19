import { evaluate } from './lib/Evaluator';
import { Context } from './lib/Handlers';
export { registerFunction, registerFunctions } from './lib/functions';

export default (code: string, context: Context = {}) => {
  return evaluate(code, context);
}