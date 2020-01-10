import generateRandomInteger from './math/generateRandomInteger';

const sample = <T>(array: Array<T>): T => {
  const index = generateRandomInteger(0, array.length - 1);
  return array[index];
};

export default sample;
