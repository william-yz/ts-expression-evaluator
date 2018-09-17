"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("@babel/parser");
const Handlers_1 = require("./Handlers");
exports.evaluate = (code, context = {}) => {
    if (typeof code === 'string') {
        const ast = parser_1.parseExpression(code);
        return Handlers_1.Handlers[ast.type](ast, context);
    }
    else {
        return Handlers_1.Handlers[code.type](code, context);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZhbHVhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9FdmFsdWF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBZ0Q7QUFFaEQseUNBQW9EO0FBRXZDLFFBQUEsUUFBUSxHQUFHLENBQUMsSUFBMkIsRUFBRSxVQUFjLEVBQUUsRUFBRSxFQUFFO0lBQ3hFLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQzVCLE1BQU0sR0FBRyxHQUFHLHdCQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsT0FBTyxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFvQixDQUFDLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3pEO1NBQU07UUFDTCxPQUFPLG1CQUFRLENBQUMsSUFBSSxDQUFDLElBQW9CLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDM0Q7QUFDSCxDQUFDLENBQUEifQ==