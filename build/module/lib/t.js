export var isIdentifier = function (ast) {
    return ast.type === 'Identifier';
};
export var isBinaryExpression = function (ast) {
    return ast.type === 'BinaryExpression';
};
export var isMemberExpression = function (ast) {
    return ast.type === 'MemberExpression';
};
export var isNumericLiteral = function (ast) {
    return ast.type === 'NumericLiteral';
};
export var isStringLiteral = function (ast) {
    return ast.type === 'StringLiteral';
};
export var isBooleanLiteral = function (ast) {
    return ast.type === 'BooleanLiteral';
};
export var isNullLiteral = function (ast) {
    return ast.type === 'NullLiteral';
};
export var isArrayExpression = function (ast) {
    return ast.type === 'ArrayExpression';
};
export var isCallExpression = function (ast) {
    return ast.type === 'CallExpression';
};
