import generateRandomInteger from './math/generateRandomInteger';

const sample = (array) => {
  const index = generateRandomInteger(0, array.length - 1);
  return array[index];
};

export default sample;
