import { UserInputError } from 'apollo-server-errors';

import TimeScalar from './Time';


const { parseValue, serialize } = TimeScalar;

describe('Time Scalar', () => {
  test('Should get Time', () => {
    const Time = '11:00:01';
    const value = serialize(Time);
    expect(value).toEqual(Time);
  });

  test('Should parse and get Time with lowercase domain', () => {
    const Time = '11:00:34';
    const value = parseValue(Time);
    expect(value).toEqual('11:00:34');
  });

  test('Should throw on invalid Time', () => {
    const Time = 'roberts';
    expect(() => parseValue(Time)).toThrowError('Time cannot represent an invalid value: roberts');
    expect(() => parseValue(Time)).toThrowError(UserInputError);
  });
});
