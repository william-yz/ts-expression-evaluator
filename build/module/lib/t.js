"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIdentifier = (ast) => {
    return ast.type === 'Identifier';
};
exports.isBinaryExpression = (ast) => {
    return ast.type === 'BinaryExpression';
};
exports.isMemberExpression = (ast) => {
    return ast.type === 'MemberExpression';
};
exports.isNumericLiteral = (ast) => {
    return ast.type === 'NumericLiteral';
};
exports.isStringLiteral = (ast) => {
    return ast.type === 'StringLiteral';
};
exports.isBooleanLiteral = (ast) => {
    return ast.type === 'BooleanLiteral';
};
exports.isNullLiteral = (ast) => {
    return ast.type === 'NullLiteral';
};
exports.isArrayExpression = (ast) => {
    return ast.type === 'ArrayExpression';
};
exports.isCallExpression = (ast) => {
    return ast.type === 'CallExpression';
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVhLFFBQUEsWUFBWSxHQUFHLENBQUMsR0FBaUIsRUFBdUIsRUFBRTtJQUNyRSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDO0FBQ25DLENBQUMsQ0FBQTtBQUVZLFFBQUEsa0JBQWtCLEdBQUcsQ0FBQyxHQUFpQixFQUE2QixFQUFFO0lBQ2pGLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxrQkFBa0IsQ0FBQztBQUN6QyxDQUFDLENBQUE7QUFFWSxRQUFBLGtCQUFrQixHQUFHLENBQUMsR0FBaUIsRUFBNkIsRUFBRTtJQUNqRixPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssa0JBQWtCLENBQUM7QUFDekMsQ0FBQyxDQUFBO0FBRVksUUFBQSxnQkFBZ0IsR0FBRyxDQUFDLEdBQWlCLEVBQTJCLEVBQUU7SUFDN0UsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLGdCQUFnQixDQUFDO0FBQ3ZDLENBQUMsQ0FBQTtBQUNZLFFBQUEsZUFBZSxHQUFHLENBQUMsR0FBaUIsRUFBMEIsRUFBRTtJQUMzRSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDO0FBQ3RDLENBQUMsQ0FBQTtBQUNZLFFBQUEsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFpQixFQUEyQixFQUFFO0lBQzdFLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxnQkFBZ0IsQ0FBQztBQUN2QyxDQUFDLENBQUE7QUFDWSxRQUFBLGFBQWEsR0FBRyxDQUFDLEdBQWlCLEVBQXdCLEVBQUU7SUFDdkUsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQztBQUNwQyxDQUFDLENBQUE7QUFDWSxRQUFBLGlCQUFpQixHQUFHLENBQUMsR0FBaUIsRUFBNEIsRUFBRTtJQUMvRSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssaUJBQWlCLENBQUM7QUFDeEMsQ0FBQyxDQUFBO0FBQ1ksUUFBQSxnQkFBZ0IsR0FBRyxDQUFDLEdBQWlCLEVBQTJCLEVBQUU7SUFDN0UsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLGdCQUFnQixDQUFDO0FBQ3ZDLENBQUMsQ0FBQSJ9