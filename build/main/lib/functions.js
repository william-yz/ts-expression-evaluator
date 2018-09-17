"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = {};
exports.registerFunction = (name, func) => {
    functions[name] = func;
};
exports.registerFunctions = (funcs) => {
    Object.keys(funcs)
        .forEach(key => functions[key] = funcs[key]);
};
exports.getFunction = (name) => {
    if (functions[name]) {
        return functions[name];
    }
    throw new Error(`Function(${name}) did not be resigtered.`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9mdW5jdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFNLFNBQVMsR0FBYyxFQUU1QixDQUFBO0FBRVksUUFBQSxnQkFBZ0IsR0FBRyxDQUFDLElBQVksRUFBRSxJQUFjLEVBQUUsRUFBRTtJQUMvRCxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLENBQUMsQ0FBQTtBQUNZLFFBQUEsaUJBQWlCLEdBQUcsQ0FBQyxLQUFrQyxFQUFFLEVBQUU7SUFDdEUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDZixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakQsQ0FBQyxDQUFBO0FBRVksUUFBQSxXQUFXLEdBQUcsQ0FBQyxJQUFZLEVBQVksRUFBRTtJQUNwRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNuQixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN4QjtJQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsWUFBWSxJQUFJLDBCQUEwQixDQUFDLENBQUE7QUFDN0QsQ0FBQyxDQUFBIn0=