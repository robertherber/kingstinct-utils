import omitNull from './omitNull';

test('should omit nulls in object and not mutate', () => {
  const obj = {
    abc: null, def: undefined, dfgdfg: 'a', dfgsfgsdfg: 1, sfdgsdfgsdfg: 0, sdfgsdfgsdfg: null,
  };
  const result = omitNull(obj);

  expect(result).toEqual({
    def: undefined, dfgdfg: 'a', dfgsfgsdfg: 1, sfdgsdfgsdfg: 0,
  });
  expect(result).not.toEqual(obj);
});

test('should omit nulls in array and not mutate', () => {
  const arr = [null, undefined, 'a', 1, 0, null];
  const result = omitNull(arr);

  expect(result).toEqual([undefined, 'a', 1, 0]);
  expect(result).not.toEqual(arr);
});
