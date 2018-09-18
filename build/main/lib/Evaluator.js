"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = require("@babel/parser");
var Handlers_1 = require("./Handlers");
exports.evaluate = function (code, context) {
    if (context === void 0) { context = {}; }
    if (typeof code === 'string') {
        var ast = parser_1.parseExpression(code);
        return Handlers_1.Handlers[ast.type](ast, context);
    }
    else {
        return Handlers_1.Handlers[code.type](code, context);
    }
};
