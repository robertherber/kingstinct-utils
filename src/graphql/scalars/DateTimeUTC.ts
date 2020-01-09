import validator from 'is-my-date-valid';

import ScalarFactory from './utils/ScalarFactory';

const validateDateTime = validator({ format: 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' });


const GraphQLDateTimeUTCScalar = ScalarFactory(
  'DateTimeUTC',
  'Represents a calendar date & time in UTC. Format: YYYY-MM-DD[T]HH:mm:ss.SSS[Z]',
  validateDateTime,
);

export default GraphQLDateTimeUTCScalar;
