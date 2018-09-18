# ts-expression-evaluator

Context-based expression parse and evaluator.

## Quick start
```javascript
import evaluate, { registerFunction } from 'ts-expression-evaluator'
const context = {
  id: 10,
  name: 'FED',
  count: 10,
  staffs: [{
    id: 1,
    name: 'Tina'
  }, {
    id: 2,
    name: 'James'
  }],
}

// math
evaluate('1+2') // 3

// eval from context
evaluate('name', context) // 'FED'
evaluate('staffs[0].name', context) // 'Tina'
evaluate('count + 10', context) // 20

// ===
evaluate('count === 11', context) // false

// register custom function
registerFunction('IF', (condition, ifTrue, ifFalse) => {
  return condition ? ifTrue : ifFalse;
})

evaluate('IF(name === 'FED', 'It\'s FED.', 'It\'s not FED.')') // It's FED.

```

## API
### `evaluate(exp: string, context: object): any`

### `registerFunction(name: string, func: Function): void`

### `registerFunctions(funcs: {[key: string]: Function}): void`
