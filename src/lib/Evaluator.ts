import { parseExpression } from '@babel/parser';
import * as t from '@babel/types';
import { Handlers, HandlerTypes } from './Handlers';

export const evaluate = (code: string | t.Expression, context: {} = {}) => {
  if (typeof code === 'string') {
    const ast = parseExpression(code);
    return Handlers[ast.type as HandlerTypes](ast, context);
  } else {
    return Handlers[code.type as HandlerTypes](code, context);
  }
}
