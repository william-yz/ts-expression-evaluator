import { evaluate } from './lib/Evaluator';
export { registerFunction, registerFunctions } from './lib/functions';
export default (function (code, context) {
    return evaluate(code, context);
});
