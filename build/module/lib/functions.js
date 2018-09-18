var functions = {};
export var registerFunction = function (name, func) {
    functions[name] = func;
};
export var registerFunctions = function (funcs) {
    Object.keys(funcs)
        .forEach(function (key) { return functions[key] = funcs[key]; });
};
export var getFunction = function (name) {
    if (functions[name]) {
        return functions[name];
    }
    throw new Error("Function(" + name + ") did not be resigtered.");
};
