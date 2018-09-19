# ts-expression-evaluator

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Coverage Status][cov-image]][cov-status]

[npm-image]: https://img.shields.io/npm/v/ts-expression-evaluator.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/ts-expression-evaluator
[travis-image]: https://img.shields.io/travis/william-yz/ts-expression-evaluator.svg?style=flat-square
[travis-url]: https://travis-ci.org/william-yz/ts-expression-evaluator
[cov-image]: https://coveralls.io/repos/github/william-yz/ts-expression-evaluator/badge.svg?branch=master
[cov-status]: https://coveralls.io/github/william-yz/ts-expression-evaluator?branch=master

Context-based expression evaluator.

## install
- npm
`npm install ts-expression-evaluator`
- yarn
`yarn add ts-expression-evaluator`
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

## License
MIT
