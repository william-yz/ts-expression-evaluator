import { parseExpression } from '@babel/parser';
import { Handlers } from './Handlers';
export const evaluate = (code, context = {}) => {
    if (typeof code === 'string') {
        const ast = parseExpression(code);
        return Handlers[ast.type](ast, context);
    }
    else {
        return Handlers[code.type](code, context);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZhbHVhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9FdmFsdWF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRCxPQUFPLEVBQUUsUUFBUSxFQUFnQixNQUFNLFlBQVksQ0FBQztBQUVwRCxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUEyQixFQUFFLFVBQWMsRUFBRSxFQUFFLEVBQUU7SUFDeEUsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDNUIsTUFBTSxHQUFHLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBaUIsQ0FBQztRQUNsRCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBb0IsQ0FBQyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUN6RDtTQUFNO1FBQ0wsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQW9CLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDM0Q7QUFDSCxDQUFDLENBQUEifQ==