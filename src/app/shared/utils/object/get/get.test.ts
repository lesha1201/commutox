import get from '.';

describe('get', () => {
  it('should return object for empty path', () => {
    const obj = {};
    const result = get(obj, []);
    expect(result).toBe(obj);
  });

  it('should return default value for non-existing path', () => {
    const result = get({}, ['non-existing-key'], 'defaultValue');
    expect(result).toBe('defaultValue');
  });

  it('should return empty string', () => {
    const result = get({ a: '' }, ['a']);
    expect(result).toBe('');
  });

  it('should return null', () => {
    const result = get({ a: null }, ['a']);
    expect(result).toBeNull();
  });

  it('should work with array', () => {
    const result = get([{ a: 5 }], [0, 'a']);
    expect(result).toBe(5);
  });

  it('should return undefined for undefined and null', () => {
    let result = get(null, ['a']);
    expect(result).toBeUndefined();
    result = get(undefined, ['a']);
    expect(result).toBeUndefined();
  });

  describe('{ a: { b: 1, c: [{ d: 2}] } }', () => {
    const obj = {
      a: {
        b: 1,
        c: [{ d: 2 }],
      },
    };

    it("should return 1 for path ['a', 'b']", () => {
      const result = get(obj, ['a', 'b']);
      expect(result).toBe(1);
    });

    it("should return undefined for path ['a', 'b', 'd']", () => {
      const result = get(obj, ['a', 'b', 'd']);
      expect(result).toBeUndefined();
    });

    it("should return 2 for path ['a', 'c', 0, 'd']", () => {
      const result = get(obj, ['a', 'c', 0, 'd']);
      expect(result).toBe(2);
    });

    it("should return undefined for path ['a', 'c', 1, 'd']", () => {
      const result = get(obj, ['a', 'c', 0, 'd']);
      expect(result).toBe(2);
    });
  });
});
