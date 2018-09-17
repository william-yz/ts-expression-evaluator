"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const Evaluator_1 = require("./Evaluator");
const cases_json_1 = __importDefault(require("./cases.json"));
const functions_1 = require("./functions");
const cases = cases_json_1.default;
functions_1.registerFunction('IF', (condition, ifTrue, ifFalse) => {
    return condition ? ifTrue : ifFalse;
});
Object.keys(cases)
    .forEach(exp => {
    ava_1.default(exp, t => {
        if (cases[exp] instanceof Array) {
            t.deepEqual(Evaluator_1.evaluate(exp, cases[exp][1]), cases[exp][0]);
        }
        else {
            t.deepEqual(Evaluator_1.evaluate(exp), cases[exp]);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZhbHVhdG9yLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL0V2YWx1YXRvci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXVCO0FBQ3ZCLDJDQUF1QztBQUN2Qyw4REFBcUM7QUFDckMsMkNBQStDO0FBRS9DLE1BQU0sS0FBSyxHQUFHLG9CQUViLENBQUE7QUFDRCw0QkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFrQixFQUFFLE1BQVcsRUFBRSxPQUFZLEVBQUUsRUFBRTtJQUN2RSxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUE7QUFDckMsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUNiLGFBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDWixJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxLQUFLLEVBQUU7WUFDL0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxvQkFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxRDthQUFNO1lBQ0wsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxvQkFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQyJ9