import toCamelCase from '.';

describe('toCamelCase', () => {
  it('should convert "hello8world foo--bar" -> "hello8WorldFooBar"', () => {
    expect(toCamelCase('hello8world foo--bar')).toBe('hello8WorldFooBar');
  });

  it('should convert "yes_no" -> "yesNo"', () => {
    expect(toCamelCase('yes_no')).toBe('yesNo');
  });

  it('should convert "camelCase" -> "camelCase"', () => {
    expect(toCamelCase('camelCase')).toBe('camelCase');
  });

  it('should convert "a_b-c^d e$f8g" -> "aBCDE$F8G"', () => {
    expect(toCamelCase('a_b-c^d e$f8g')).toBe('aBCDE$F8G');
  });

  it('should convert "   foo__bar    " -> "fooBar"', () => {
    expect(toCamelCase('   foo__bar    ')).toBe('fooBar');
  });

  it('should convert "_foo_bar" -> "fooBar"', () => {
    expect(toCamelCase('_foo_bar')).toBe('fooBar');
  });

  it('should convert "$foo_bar" -> "$fooBar"', () => {
    expect(toCamelCase('$foo_bar')).toBe('$fooBar');
  });

  it('should convert "8foo_bar" -> "8fooBar"', () => {
    expect(toCamelCase('8foo_bar')).toBe('8fooBar');
  });
});
