import {
  GraphQLError,
  GraphQLScalarType,
} from 'graphql';

function invalidKind(type, kind): Error {
  throw Object.assign(new GraphQLError(`${type} cannot represent non-string type: ${kind}), { type, kind }`));
}

function invalidValue(type, value): Error {
  throw Object.assign(new GraphQLError(`${type} cannot represent an invalid value: ${value}), { type, value }`));
}

const serializeDefault = (value: string): string => value;
const parseDefault = (value: string): string => value;

function ScalarFactory<T>(
  name,
  description,
  validateFn,
  serializeFn = serializeDefault,
  parseFn = parseDefault,
): GraphQLScalarType {
  const parseLiteral = (ast) => (ast.kind !== 'StringValue'
    ? invalidKind(name, ast.kind)
    : validateFn(ast.value)
      ? parseFn(ast.value)
      : invalidValue(name, ast.value)
  );

  const parseValue = (value) => (validateFn(value) ? parseFn(value) : invalidValue(name, value));

  return new GraphQLScalarType({
    name,
    description,
    parseValue,
    serialize: serializeFn,
    parseLiteral,
  });
}

export default ScalarFactory;
