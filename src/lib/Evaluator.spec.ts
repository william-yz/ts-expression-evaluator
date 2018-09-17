import test from 'ava';
import { evaluate } from './Evaluator';
import casesJson from './cases.json';
import { registerFunction } from './functions';

const cases = casesJson as {
  [key: string]: any | [any, {}]
}
registerFunction('IF', (condition: boolean, ifTrue: any, ifFalse: any) => {
  return condition ? ifTrue : ifFalse
});

Object.keys(cases)
  .forEach(exp => {
    test(exp, t => {
      if (cases[exp] instanceof Array) {
        t.deepEqual(evaluate(exp, cases[exp][1]), cases[exp][0]);
      } else {
        t.deepEqual(evaluate(exp), cases[exp]);
      }
    })
  });
