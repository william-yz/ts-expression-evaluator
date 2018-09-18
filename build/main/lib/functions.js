"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions = {};
exports.registerFunction = function (name, func) {
    functions[name] = func;
};
exports.registerFunctions = function (funcs) {
    Object.keys(funcs)
        .forEach(function (key) { return functions[key] = funcs[key]; });
};
exports.getFunction = function (name) {
    if (functions[name]) {
        return functions[name];
    }
    throw new Error("Function(" + name + ") did not be resigtered.");
};
