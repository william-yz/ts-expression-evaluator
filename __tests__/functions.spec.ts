import { registerFunction, registerFunctions } from '../src';
import { getFunction } from '../src/lib/functions';

describe('functions', () => {
  it('registerFunction', () => {
    const f = jest.fn();
    expect(() => registerFunction('name', f)).not.toThrowError();
    getFunction('name')(1, 2, 3);
    expect(f.mock.calls.length).toBe(1);
    expect(f.mock.calls[0]).toEqual([1, 2, 3])
  });

  it('resigerFunctions', () => {
    const f = jest.fn();
    expect(() => registerFunctions({
      name: f
    })).not.toThrowError();
    getFunction('name')('a', 'b');
    expect(f.mock.calls.length).toBe(1);
    expect(f.mock.calls[0]).toEqual(['a', 'b'])
  });
  it('get unexists Function', () => {
    const f = () => { };
    registerFunction('f1', f);
    expect(() => getFunction('f2')).toThrowError();
  })
})