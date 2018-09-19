import * as t from '@babel/types';

export const isIdentifier = (ast: t.Expression): ast is t.Identifier => {
  return ast.type === 'Identifier';
}

export const isBinaryExpression = (ast: t.Expression): ast is t.BinaryExpression => {
  return ast.type === 'BinaryExpression';
}

export const isMemberExpression = (ast: t.Expression): ast is t.MemberExpression => {
  return ast.type === 'MemberExpression';
}

export const isNumericLiteral = (ast: t.Expression): ast is t.NumericLiteral => {
  return ast.type === 'NumericLiteral';
}
export const isStringLiteral = (ast: t.Expression): ast is t.StringLiteral => {
  return ast.type === 'StringLiteral';
}
export const isBooleanLiteral = (ast: t.Expression): ast is t.BooleanLiteral => {
  return ast.type === 'BooleanLiteral';
}
export const isNullLiteral = (ast: t.Expression): ast is t.NullLiteral => {
  return ast.type === 'NullLiteral';
}
export const isArrayExpression = (ast: t.Expression): ast is t.ArrayExpression => {
  return ast.type === 'ArrayExpression';
}
export const isCallExpression = (ast: t.Expression): ast is t.CallExpression => {
  return ast.type === 'CallExpression';
}
export const isLogicalExpression = (ast: t.Expression): ast is t.LogicalExpression => {
  return ast.type === 'LogicalExpression'
}
export const isUnaryExpression = (ast: t.Expression): ast is t.UnaryExpression => {
  return ast.type === 'UnaryExpression'
}
export type Expression = t.Expression;