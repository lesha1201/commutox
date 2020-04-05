import { equalToOr } from '..';

describe('equalToOr util', () => {
  it('should work with primitives', () => {
    expect(equalToOr(5, 3, 3)).toBeFalsy();
    expect(equalToOr(5, 3, 5)).toBeTruthy();
    expect(equalToOr('A', 'B', 'A')).toBeTruthy();
    expect(equalToOr('A', 'B', 'B')).toBeFalsy();
    expect(equalToOr(true, true)).toBeTruthy();
    expect(equalToOr(true, false)).toBeFalsy();
  });

  it('should work with references', () => {
    const obj1 = { a: 5 };
    const obj2 = { a: 5 };
    const obj3 = obj1;

    expect(equalToOr(obj1, obj2)).toBeFalsy();
    expect(equalToOr(obj1, obj2, obj3)).toBeTruthy();
  });
});
