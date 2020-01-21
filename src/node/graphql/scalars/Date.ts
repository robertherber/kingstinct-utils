import validator from 'is-my-date-valid';

import ScalarFactory from './utils/ScalarFactory';

const validateDate = validator({ format: 'YYYY-MM-DD' });

const GraphQLDateScalar = ScalarFactory(
  'Date',
  'Represents a calendar date. Format: YYYY-MM-DD',
  validateDate,
);

export default GraphQLDateScalar;
