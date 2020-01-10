import sample from './sample';

test('Should return item in array', () => {
  const array = ['ett äpple', 'en banan', 'en majbrasa'];

  const result = sample(array);

  expect(array).toContain(result);
});
