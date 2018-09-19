"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Evaluator_1 = require("./lib/Evaluator");
var functions_1 = require("./lib/functions");
exports.registerFunction = functions_1.registerFunction;
exports.registerFunctions = functions_1.registerFunctions;
exports.default = (function (code, context) {
    if (context === void 0) { context = {}; }
    return Evaluator_1.evaluate(code, context);
});
