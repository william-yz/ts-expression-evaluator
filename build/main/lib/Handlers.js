"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const t = __importStar(require("@babel/types"));
const Evaluator_1 = require("./Evaluator");
const functions_1 = require("./functions");
exports.Handlers = {
    BinaryExpression(ast, context) {
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
    Identifier(ast, context) {
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
    CallExpression(ast, context) {
        if (t.isCallExpression(ast)) {
            if (t.isIdentifier(ast.callee)) {
                const func = functions_1.getFunction(ast.callee.name);
                const args = ast.arguments.map(arg => {
                    if (t.isSpreadElement(arg))
                        throw new Error('Spread syntax is not supported.');
                    if (t.isJSXNamespacedName(arg))
                        throw new Error('Jsx symtax is not supported.');
                    return Evaluator_1.evaluate(arg, context);
                });
                return func.call(null, ...args);
            }
        }
        throw new Error();
    },
    MemberExpression(ast, context) {
        if (t.isMemberExpression(ast)) {
            const obj = Evaluator_1.evaluate(ast.object, context);
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
    NumericLiteral(ast) {
        if (t.isNumericLiteral(ast)) {
            return ast.value;
        }
        throw new Error();
    },
    StringLiteral(ast) {
        if (t.isStringLiteral(ast)) {
            return ast.value;
        }
        throw new Error();
    },
    BooleanLiteral(ast) {
        if (t.isBooleanLiteral(ast)) {
            return ast.value;
        }
        throw new Error();
    },
    NullLiteral(ast) {
        if (t.isNullLiteral(ast)) {
            return null;
        }
        throw new Error();
    },
    ArrayExpression(ast, context) {
        if (t.isArrayExpression(ast)) {
            return ast.elements.map(elem => {
                if (!elem)
                    throw new Error();
                if (t.isSpreadElement(elem))
                    throw new Error('Spread syntax is not supported.');
                return Evaluator_1.evaluate(elem, context);
            });
        }
        throw new Error();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFuZGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL0hhbmRsZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGdEQUFrQztBQUNsQywyQ0FBdUM7QUFDdkMsMkNBQTBDO0FBYzdCLFFBQUEsUUFBUSxHQUFhO0lBQ2hDLGdCQUFnQixDQUFDLEdBQWlCLEVBQUUsT0FBZ0I7UUFDbEQsSUFBSSxDQUFDLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsUUFBUSxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNwQixLQUFLLEdBQUc7b0JBQ04sT0FBTyxvQkFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsb0JBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNwRSxLQUFLLEdBQUc7b0JBQ04sT0FBTyxvQkFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsb0JBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNwRSxLQUFLLEdBQUc7b0JBQ04sT0FBTyxvQkFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsb0JBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNwRSxLQUFLLEdBQUc7b0JBQ04sT0FBTyxvQkFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsb0JBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNwRSxLQUFLLEtBQUs7b0JBQ1IsT0FBTyxvQkFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssb0JBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dC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