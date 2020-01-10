import generateRandomNumber from './generateRandomNumber';

test('Should generate a number between 1 and 99', () => {
  const number = generateRandomNumber(1, 99);
  expect(number).toBeGreaterThanOrEqual(1);
  expect(number).toBeLessThanOrEqual(99);
  expect(Number.isInteger(number)).toBeFalsy();
});

test('Should generate a number between 1 and 1', () => {
  const number = generateRandomNumber(1, 1);
  expect(number).toEqual(1);
});

test('Should generate a number between 1 and 2', () => {
  const number = generateRandomNumber(1, 2);
  expect(number).toBeGreaterThanOrEqual(1);
  expect(number).toBeLessThanOrEqual(2);
  expect(Number.isInteger(number)).toBeFalsy();
});
