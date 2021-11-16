import * as t from './t';
import { evaluate } from './Evaluator';
import { getFunction } from './functions';

export type HandlerTypes = 'BinaryExpression' | 'NumericLiteral' | 'StringLiteral' | 'BooleanLiteral' | 'ArrayExpression' |
  'NullLiteral' | 'Identifier' | 'CallExpression' | 'MemberExpression' | 'LogicalExpression' | 'UnaryExpression' | 'ThisExpression' | 'ConditionalExpression';

export type Context = {
  [key: string]: any;
}
export type Handler = (ast: t.Expression, context: Context) => any;

export type Handlers = {
  readonly [T in HandlerTypes]: Handler
}

export const Handlers: Handlers = {
  BinaryExpression(ast: t.Expression, context: Context) {
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
        case '%':
          return evaluate(ast.left, context) % evaluate(ast.right, context);
        case '===':
          return evaluate(ast.left, context) === evaluate(ast.right, context);
        case '==':
          return evaluate(ast.left, context) == evaluate(ast.right, context);
        case '!==':
          return evaluate(ast.left, context) !== evaluate(ast.right, context);
        case '!=':
          return evaluate(ast.left, context) != evaluate(ast.right, context);
        case '>':
          return evaluate(ast.left, context) > evaluate(ast.right, context);
        case '>=':
          return evaluate(ast.left, context) >= evaluate(ast.right, context);
        case '<':
          return evaluate(ast.left, context) < evaluate(ast.right, context);
        case '<=':
          return evaluate(ast.left, context) <= evaluate(ast.right, context);
        case 'in': {
          const right = evaluate(ast.right, context);
          if (!right) return false;
          if (typeof right === 'object' && right instanceof Array) {
            return right.indexOf(evaluate(ast.left, context)) !== -1;
          }
          return false;
        }
      }
    }
    throw new Error();
  },

  ConditionalExpression(ast: t.Expression, context: Context) {
    if (t.isConditionalExpression(ast)) {
      return evaluate(ast.test, context) ? evaluate(ast.consequent, context) : evaluate(ast.alternate, context);
    }
    throw new Error();
  },
  LogicalExpression(ast: t.Expression, context: Context): boolean {
    if (t.isLogicalExpression(ast)) {
      switch (ast.operator) {
        case '&&':
          return evaluate(ast.left, context) && evaluate(ast.right, context);
        case '||':
          return evaluate(ast.left, context) || evaluate(ast.right, context);
      }
    }
    throw new Error();
  },

  UnaryExpression(ast: t.Expression, context: Context): boolean | number {
    if (t.isUnaryExpression(ast)) {
      switch (ast.operator) {
        case '!':
          return !evaluate(ast.argument, context);
        case '-':
          return - evaluate(ast.argument, context);
      }
    }
    throw new Error();
  },

  Identifier(ast: t.Expression, context: Context) {
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
  CallExpression(ast: t.Expression, context: Context) {
    if (t.isCallExpression(ast)) {
      if (!t.isV8IntrinsicIdentifier(ast.callee) && t.isIdentifier(ast.callee)) {
        const func = getFunction(ast.callee.name);
        const args: t.Expression[] = ast.arguments.map(arg => {
          return evaluate(arg as t.Expression, context);
        });
        return func.call(null, ...args);
      }
    }
    throw new Error();
  },

  MemberExpression(ast: t.Expression, context: Context) {
    if (t.isMemberExpression(ast)) {
      const obj = evaluate(ast.object, context);
      if (!obj) return undefined;
      if (t.isIdentifier(ast.property)) {
        return evaluate(ast.property, obj);
      }
      if (t.isMemberExpression(ast.property)) {
        return obj[evaluate(ast.property, context)]
      }
      if (t.isNumericLiteral(ast.property) || t.isStringLiteral(ast.property)) {
        return obj[ast.property.value];
      }
      if ((t.isBinaryExpression(ast.property) || t.isLogicalExpression(ast.property)) && typeof obj.filter === 'function') {
        return obj.filter((item: {}) => evaluate(ast.property, { context, __scope: item }));
      }
    }
    throw new Error();
  },

  ThisExpression(ast: t.Expression, context: Context) {
    if (t.isThisExpression(ast)) {
      return context.__scope;
    }
    throw new Error();
  },

  NumericLiteral(ast: t.Expression) {
    if (t.isNumericLiteral(ast)) {
      return ast.value;
    }
    throw new Error();
  },
  StringLiteral(ast: t.Expression) {
    if (t.isStringLiteral(ast)) {
      return ast.value;
    }
    throw new Error();
  },
  BooleanLiteral(ast: t.Expression) {
    if (t.isBooleanLiteral(ast)) {
      return ast.value;
    }
    throw new Error();
  },
  NullLiteral(ast: t.Expression) {
    if (t.isNullLiteral(ast)) {
      return null;
    }
    throw new Error();
  },
  ArrayExpression(ast: t.Expression, context: Context) {
    if (t.isArrayExpression(ast)) {
      return ast.elements.map(elem => {
        return evaluate(elem as t.Expression, context);
      });
    }
    throw new Error();
  }
}

