import { UserInputError } from 'apollo-server-errors';

import UrlScalar from './URL';


const { parseValue, serialize } = UrlScalar;

describe('Url Scalar', () => {
  test('Should get Url', () => {
    const url = 'www.aftonbladet.se';
    const value = serialize(url);
    expect(value).toEqual(url);
  });

  test('Should parse and get Url with lowercase domain', () => {
    const url = 'https://KINGSTINCT.com';
    const value = parseValue(url);
    expect(value).toEqual(url);
  });

  test('Should throw on invalid Url', () => {
    const url = 'roberts';
    expect(() => parseValue(url)).toThrowError('URL cannot represent an invalid value: roberts');
    expect(() => parseValue(url)).toThrowError(UserInputError);
  });
});
