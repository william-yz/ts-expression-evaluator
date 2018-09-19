import * as t from '@babel/types';
export declare type HandlerTypes = 'BinaryExpression' | 'NumericLiteral' | 'StringLiteral' | 'BooleanLiteral' | 'ArrayExpression' | 'NullLiteral' | 'Identifier' | 'CallExpression' | 'MemberExpression';
export declare type Context = {
    [key: string]: any;
};
export declare type Handler = (ast: t.Expression, context: Context) => any;
export declare type Handlers = {
    readonly [T in HandlerTypes]: Handler;
};
export declare const Handlers: Handlers;
