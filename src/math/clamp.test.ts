import clamp from './clamp';

test('Should clamp to smallest', () => {
  expect(clamp(1, -10, 100)).toEqual(1);
});

test('Should clamp to largest', () => {
  expect(clamp(-111, 10000000, -100)).toEqual(-100);
});

test('Should not clamp', () => {
  expect(clamp(-200, -140, -111)).toEqual(-140);
});

test('Should throw if min is larger than max', () => {
  expect(() => clamp(200, -140, -111)).toThrowError('clamp: min has to be less than max');
});
