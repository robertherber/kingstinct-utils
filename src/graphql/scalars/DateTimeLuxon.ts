import { GraphQLScalarType } from 'graphql';
import { Kind, ValueNode } from 'graphql/language';
import { GraphQLError } from 'graphql/error';
import { DateTime, FixedOffsetZone } from 'luxon';


const serialize = (luxonDate: DateTime): string => {
  if (!luxonDate.isValid) {
    throw new GraphQLError(`${luxonDate.invalidExplanation}`);
  }

  return luxonDate.toISO();
};

const parseValue = (v: string): DateTime => {
  const luxonDate = DateTime.fromISO(v, { setZone: true, zone: FixedOffsetZone.utcInstance });

  if (!luxonDate.isValid) {
    throw new GraphQLError(luxonDate.invalidExplanation);
  }

  return luxonDate;
};

const parseLiteral = (ast: ValueNode): DateTime => {
  if (ast.kind !== Kind.STRING) {
    throw new GraphQLError(`expected: ${Kind.STRING} - found: ${ast.kind}`);
  }

  const v = ast.value.toString();

  return parseValue(v);
};

const GraphQLDateTimeLuxonScalar = new GraphQLScalarType({
  name: 'DateTimeLuxon',
  description: 'DateTimeLuxon accepts Dates in ISO 8601 format and parses them to Luxon DateTime instances',

  // from database towards client
  serialize,

  // json from client towards database
  parseValue,

  // AST from client towards database
  parseLiteral,
});

export default GraphQLDateTimeLuxonScalar;
