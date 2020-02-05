import { UserInputError } from 'apollo-server-errors';

import ColorScalar from './Color';


const { parseValue, serialize } = ColorScalar;

describe('color Scalar', () => {
  test('Should get color', () => {
    const color = '#fff';
    const value = serialize(color);
    expect(value).toEqual(color);
  });

  test('Should parse and get color with lowercase domain', () => {
    const color = 'blue';
    const value = parseValue(color);
    expect(value).toEqual(color);
  });

  test('Should throw on invalid color', () => {
    const color = 'roberts';
    expect(() => parseValue(color)).toThrowError('Color cannot represent an invalid value: roberts');
    expect(() => parseValue(color)).toThrowError(UserInputError);
  });
});
