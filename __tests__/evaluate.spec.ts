import evaluate, { registerFunction } from '../src';

const context = {
  str: 'string',
  arr: [5, 4, 3, 2, 1],
  arrOfObject: [{
    name: 'name1'
  }, {
    name: 'name2',
    arr: ['a', 'b']
  }],
  obj: {
    a: 1,
    b: {
      c: 'c'
    }
  }
}
describe('evaluate expression', () => {
  it('1 + 2 - 3 * 4 / 5', () => {
    expect(evaluate('1 + 2 - 3 * 4 / 5')).toBe(1 + 2 - 3 * 4 / 5);
  });

  it('str', () => {
    expect(evaluate('str', context)).toEqual('string');
  });

  it('arr[2]', () => {
    expect(evaluate('arr[2]', context)).toEqual(3);
  });

  it('arrOfObject[0].name', () => {
    expect(evaluate('arrOfObject[0].name', context)).toEqual('name1');
  });
  it('arrOfObject[1].arr[0]', () => {
    expect(evaluate('arrOfObject[1].arr[0]', context)).toEqual('a');
  });

  it('== & !=', () => {
    expect(evaluate('1 == 1')).toEqual(true);
    expect(evaluate('2 == 1')).toEqual(false);
    expect(evaluate('1 == "1"')).toEqual(true);
    expect(evaluate('1 != 1')).toEqual(false);
    expect(evaluate('2 != 1')).toEqual(true);
    expect(evaluate('1 != "1"')).toEqual(false);
  });
  it('=== & !==', () => {
    expect(evaluate('1 === 1')).toEqual(true);
    expect(evaluate('2 === 1')).toEqual(false);
    expect(evaluate('1 === "1"')).toEqual(false);
    expect(evaluate('1 !== 1')).toEqual(false);
    expect(evaluate('2 !== 1')).toEqual(true);
    expect(evaluate('1 !== "1"')).toEqual(true);
  });
  it('> & < & >= & <=', () => {
    expect(evaluate('1 > 1')).toEqual(false);
    expect(evaluate('2 >= 1')).toEqual(true);
    expect(evaluate('1 < 1')).toEqual(false);
    expect(evaluate('1 <= 1')).toEqual(true);
  });

  it('true & false', () => {
    expect(evaluate('true')).toBeTruthy();
    expect(evaluate('false')).toBeFalsy();
    expect(evaluate('false && false')).toBeFalsy();
    expect(evaluate('true && false')).toBeFalsy();
    expect(evaluate('false || true')).toBeTruthy();
  });

  it('undefined & null', () => {
    expect(evaluate('a')).toBeUndefined();
    expect(evaluate('undefined')).toBeUndefined();
    expect(evaluate('null')).toBeNull();
  });

  it('array', () => {
    expect(evaluate('[1,2,3]')).toEqual([1, 2, 3]);
  });

  it('object', () => {
    expect(evaluate('obj.a', context)).toBe(1);
    expect(evaluate('obj.b', context)).toEqual({ c: 'c' });
    expect(evaluate('obj["b"]', context)).toEqual({ c: 'c' });
    expect(evaluate('obj.b.c', context)).toBe('c');
    expect(evaluate('obj.d', context)).toBeUndefined();
    expect(evaluate('objNotExist.d', context)).toBeUndefined();
  });

  it('call function', () => {
    const add = jest.fn((a, b) => a + b);
    registerFunction('ADD', add);
    expect(evaluate('ADD(obj.a, 1) === 2', context)).toBeTruthy();
    expect(add.mock.calls.length).toBe(1);
    expect(add.mock.calls[0]).toEqual([1, 1]);
  })

});