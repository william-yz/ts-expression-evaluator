import { Handler, Handlers } from '../src/lib/Handlers';

describe('Handler error', () => {
  it('handler error', () => {
    Object.keys(Handlers)
      .forEach(key => {
        expect(() => Handlers[key]({}, {})).toThrowError();
      })
  })
})