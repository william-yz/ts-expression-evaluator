"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Evaluator_1 = require("./lib/Evaluator");
var functions_1 = require("./lib/functions");
exports.registerFunction = functions_1.registerFunction;
exports.registerFunctions = functions_1.registerFunctions;
exports.default = (code, context) => {
    return Evaluator_1.evaluate(code, context);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBMkM7QUFFM0MsNkNBQXNFO0FBQTdELHVDQUFBLGdCQUFnQixDQUFBO0FBQUUsd0NBQUEsaUJBQWlCLENBQUE7QUFFNUMsa0JBQWUsQ0FBQyxJQUFZLEVBQUUsT0FBZ0IsRUFBRSxFQUFFO0lBQ2hELE9BQU8sb0JBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFBIn0=