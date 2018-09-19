import { evaluate } from './lib/Evaluator';
export { registerFunction, registerFunctions } from './lib/functions';
export default (function (code, context) {
    if (context === void 0) { context = {}; }
    return evaluate(code, context);
});
