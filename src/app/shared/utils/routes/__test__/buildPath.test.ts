import { buildPath } from '..';

it("should return intact path if it doesn't have any path params", () => {
  const result = buildPath('/chats', {});

  expect(result).toBe('/chats');
});

it('should replace path params in the provided path', () => {
  const result = buildPath('/chats/:id', {
    pathParams: {
      id: 123,
    },
  });

  expect(result).toBe('/chats/123');
});

it("should throw error when some path params aren't provided", () => {
  expect(() => {
    buildPath('/chats/:id', {});
  }).toThrowErrorMatchingInlineSnapshot(`"Expected \\"id\\" to be defined"`);
});

it('should append query params at the end', () => {
  const queryParams = {
    str: 'str',
    bool: true,
    num: 1,
  };

  let result = buildPath('/chats/:id', {
    pathParams: {
      id: 123,
    },
    queryParams,
  });

  expect(result).toBe('/chats/123?bool=true&num=1&str=str');

  result = buildPath('/chats', {
    queryParams,
  });

  expect(result).toBe('/chats?bool=true&num=1&str=str');
});
