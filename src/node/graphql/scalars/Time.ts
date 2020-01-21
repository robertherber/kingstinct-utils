import validator from 'is-my-date-valid';

import ScalarFactory from './utils/ScalarFactory';

const validateTime = validator({ format: 'HH:mm:ss' });

const GraphQLTimeScalar = ScalarFactory(
  'Time',
  'Represents a specific time of day. Format: HH:mm:ss',
  validateTime,
);

export default GraphQLTimeScalar;
