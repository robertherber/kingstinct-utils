import omitUndefined from './omitUndefined';

test('should omit undefineds in object', () => {
  const obj = {
    abc: null, def: undefined, dfgdfg: 'a', dfgsfgsdfg: 1, sfdgsdfgsdfg: 0, sdfsdfsdf: undefined,
  };
  const result = omitUndefined(obj);

  expect(result).toEqual({
    abc: null, dfgdfg: 'a', dfgsfgsdfg: 1, sfdgsdfgsdfg: 0,
  });
  expect(result).not.toStrictEqual(obj);
});

test('should omit undefineds in array', () => {
  const arr = [null, undefined, 'a', 1, 0, undefined];

  const result = omitUndefined(arr);

  expect(result).toEqual([null, 'a', 1, 0]);
  expect(result).not.toEqual(arr);
});
