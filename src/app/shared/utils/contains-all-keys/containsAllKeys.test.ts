import containsAllKeys from '.';

describe('containsAllKeys', () => {
  it('{ a: 5 } should contain { a: 2 }', () => {
    const result = containsAllKeys({ a: 5 }, { a: 2 });
    expect(result).toBeTruthy();
  });

  it('{ a: 5, b: 2 } should contain { a: 2 }', () => {
    const result = containsAllKeys({ a: 5, b: 2 }, { a: 2 });
    expect(result).toBeTruthy();
  });

  it('{ a: 5, b: 2 } should NOT contain {}', () => {
    const result = containsAllKeys({ a: 5, b: 2 }, {});
    expect(result).toBeFalsy();
  });

  it('{ a: 5, b: 2 } should NOT contain { a: 2, c: 3 }', () => {
    const result = containsAllKeys({ a: 5, b: 2 }, { a: 2, c: 3 });
    expect(result).toBeFalsy();
  });

  it('{} should NOT contain {}', () => {
    const result = containsAllKeys({}, {});
    expect(result).toBeFalsy();
  });
});
