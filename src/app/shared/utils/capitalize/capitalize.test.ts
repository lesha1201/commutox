import capitalize from '.';

describe('capitalize', () => {
  it('should capitalize the first letter of the word', () => {
    const capitalizedWord = capitalize('react');

    expect(capitalizedWord).toBe('React');
  });
});
