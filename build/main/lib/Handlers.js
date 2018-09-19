"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var t = __importStar(require("@babel/types"));
var Evaluator_1 = require("./Evaluator");
var functions_1 = require("./functions");
exports.Handlers = {
    BinaryExpression: function (ast, context) {
        if (t.isBinaryExpression(ast)) {
            switch (ast.operator) {
                case '+':
                    return Evaluator_1.evaluate(ast.left, context) + Evaluator_1.evaluate(ast.right, context);
                case '-':
                    return Evaluator_1.evaluate(ast.left, context) - Evaluator_1.evaluate(ast.right, context);
                case '*':
                    return Evaluator_1.evaluate(ast.left, context) * Evaluator_1.evaluate(ast.right, context);
                case '/':
                    return Evaluator_1.evaluate(ast.left, context) / Evaluator_1.evaluate(ast.right, context);
                case '===':
                    return Evaluator_1.evaluate(ast.left, context) === Evaluator_1.evaluate(ast.right, context);
                case '==':
                    return Evaluator_1.evaluate(ast.left, context) == Evaluator_1.evaluate(ast.right, context);
                case '!==':
                    return Evaluator_1.evaluate(ast.left, context) !== Evaluator_1.evaluate(ast.right, context);
                case '!=':
                    return Evaluator_1.evaluate(ast.left, context) != Evaluator_1.evaluate(ast.right, context);
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
                var func = functions_1.getFunction(ast.callee.name);
                var args = ast.arguments.map(function (arg) {
                    return Evaluator_1.evaluate(arg, context);
                });
                return func.call.apply(func, [null].concat(args));
            }
        }
        throw new Error();
    },
    MemberExpression: function (ast, context) {
        if (t.isMemberExpression(ast)) {
            var obj = Evaluator_1.evaluate(ast.object, context);
            if (!obj)
                return undefined;
            if (t.isIdentifier(ast.property)) {
                return Evaluator_1.evaluate(ast.property, obj);
            }
            if (t.isNumericLiteral(ast.property) || t.isStringLiteral(ast.property)) {
                return obj[ast.property.value];
            }
            return Evaluator_1.evaluate(ast.property, context);
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
                return Evaluator_1.evaluate(elem, context);
            });
        }
        throw new Error();
    }
};
