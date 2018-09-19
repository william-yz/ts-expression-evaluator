import * as t from '@babel/types';
import { evaluate } from './Evaluator';
import { getFunction } from './functions';
export var Handlers = {
    BinaryExpression: function (ast, context) {
        if (t.isBinaryExpression(ast)) {
            switch (ast.operator) {
                case '+':
                    return evaluate(ast.left, context) + evaluate(ast.right, context);
                case '-':
                    return evaluate(ast.left, context) - evaluate(ast.right, context);
                case '*':
                    return evaluate(ast.left, context) * evaluate(ast.right, context);
                case '/':
                    return evaluate(ast.left, context) / evaluate(ast.right, context);
                case '===':
                    return evaluate(ast.left, context) === evaluate(ast.right, context);
                case '==':
                    return evaluate(ast.left, context) == evaluate(ast.right, context);
                case '!==':
                    return evaluate(ast.left, context) !== evaluate(ast.right, context);
                case '!=':
                    return evaluate(ast.left, context) != evaluate(ast.right, context);
            }
        }
        throw new Error();
    },
    Identifier: function (ast, context) {
        if (t.isIdentifier(ast)) {
            switch (ast.name) {
                case 'undefined':
                    return undefined;
                default:
                    return context[ast.name];
            }
        }
        throw new Error();
    },
    CallExpression: function (ast, context) {
        if (t.isCallExpression(ast)) {
            if (t.isIdentifier(ast.callee)) {
                var func = getFunction(ast.callee.name);
                var args = ast.arguments.map(function (arg) {
                    return evaluate(arg, context);
                });
                return func.call.apply(func, [null].concat(args));
            }
        }
        throw new Error();
    },
    MemberExpression: function (ast, context) {
        if (t.isMemberExpression(ast)) {
            var obj = evaluate(ast.object, context);
            if (!obj)
                return undefined;
            if (t.isIdentifier(ast.property)) {
                return evaluate(ast.property, obj);
            }
            if (t.isNumericLiteral(ast.property) || t.isStringLiteral(ast.property)) {
                return obj[ast.property.value];
            }
            return evaluate(ast.property, context);
        }
        throw new Error();
    },
    NumericLiteral: function (ast) {
        if (t.isNumericLiteral(ast)) {
            return ast.value;
        }
        throw new Error();
    },
    StringLiteral: function (ast) {
        if (t.isStringLiteral(ast)) {
            return ast.value;
        }
        throw new Error();
    },
    BooleanLiteral: function (ast) {
        if (t.isBooleanLiteral(ast)) {
            return ast.value;
        }
        throw new Error();
    },
    NullLiteral: function (ast) {
        if (t.isNullLiteral(ast)) {
            return null;
        }
        throw new Error();
    },
    ArrayExpression: function (ast, context) {
        if (t.isArrayExpression(ast)) {
            return ast.elements.map(function (elem) {
                if (!elem)
                    throw new Error();
                return evaluate(elem, context);
            });
        }
        throw new Error();
    }
};
