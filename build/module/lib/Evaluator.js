import { parseExpression } from '@babel/parser';
import { Handlers } from './Handlers';
export var evaluate = function (code, context) {
    if (context === void 0) { context = {}; }
    if (typeof code === 'string') {
        var ast = parseExpression(code);
        return Handlers[ast.type](ast, context);
    }
    else {
        return Handlers[code.type](code, context);
    }
};
