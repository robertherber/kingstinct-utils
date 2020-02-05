import { UserInputError } from 'apollo-server-errors';

import GraphQLDateTimeWithOffset from './Email';


const { parseValue, serialize } = GraphQLDateTimeWithOffset;

describe('Email Scalar', () => {
  test('Should get email', () => {
    const email = 'roberts@HERBER.me';
    const value = serialize(email);
    expect(value).toEqual(email);
  });

  test('Should parse and get email with lowercase domain', () => {
    const email = 'roberts@HERBER.me';
    const value = parseValue(email);
    expect(value).toEqual('roberts@herber.me');
  });

  test('Should throw on invalid email', () => {
    const email = 'roberts';
    expect(() => parseValue(email)).toThrowError('Email cannot represent an invalid value: roberts');
    expect(() => parseValue(email)).toThrowError(UserInputError);
  });
});
