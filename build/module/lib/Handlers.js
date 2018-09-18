import * as t from './t';
import { evaluate } from './Evaluator';
import { getFunction } from './functions';
export const Handlers = {
    BinaryExpression(ast, context) {
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
                const func = getFunction(ast.callee.name);
                const args = ast.arguments.map(arg => {
                    return evaluate(arg, context);
                });
                return func.call(null, ...args);
            }
        }
        throw new Error();
    },
    MemberExpression(ast, context) {
        if (t.isMemberExpression(ast)) {
            const obj = evaluate(ast.object, context);
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
                return evaluate(elem, context);
            });
        }
        throw new Error();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFuZGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL0hhbmRsZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQWMxQyxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQWE7SUFDaEMsZ0JBQWdCLENBQUMsR0FBaUIsRUFBRSxPQUFnQjtRQUNsRCxJQUFJLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixRQUFRLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3BCLEtBQUssR0FBRztvQkFDTixPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNwRSxLQUFLLEdBQUc7b0JBQ04sT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDcEUsS0FBSyxHQUFHO29CQUNOLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3BFLEtBQUssR0FBRztvQkFDTixPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNwRSxLQUFLLEtBQUs7b0JBQ1IsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLElB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