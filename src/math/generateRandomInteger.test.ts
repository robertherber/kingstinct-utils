import generateRandomInteger from './generateRandomInteger';

test('Should generate an integer between 1 and 99', () => {
  const number = generateRandomInteger(1, 99);
  expect(number).toBeGreaterThanOrEqual(1);
  expect(number).toBeLessThanOrEqual(99);
  expect(Number.isInteger(number)).toBeTruthy();
});

test('Should generate an integer between 1 and 1', () => {
  const number = generateRandomInteger(1, 1);
  expect(number).toEqual(1);
  expect(Number.isInteger(number)).toBeTruthy();
});
