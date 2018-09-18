"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIdentifier = function (ast) {
    return ast.type === 'Identifier';
};
exports.isBinaryExpression = function (ast) {
    return ast.type === 'BinaryExpression';
};
exports.isMemberExpression = function (ast) {
    return ast.type === 'MemberExpression';
};
exports.isNumericLiteral = function (ast) {
    return ast.type === 'NumericLiteral';
};
exports.isStringLiteral = function (ast) {
    return ast.type === 'StringLiteral';
};
exports.isBooleanLiteral = function (ast) {
    return ast.type === 'BooleanLiteral';
};
exports.isNullLiteral = function (ast) {
    return ast.type === 'NullLiteral';
};
exports.isArrayExpression = function (ast) {
    return ast.type === 'ArrayExpression';
};
exports.isCallExpression = function (ast) {
    return ast.type === 'CallExpression';
};
