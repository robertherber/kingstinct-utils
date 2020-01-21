import validateColor from 'validate-color';

import ScalarFactory from './utils/ScalarFactory';

const GraphQLColorScalar = ScalarFactory(
  'Color',
  'Represents a color in hex, rgb, rgba, hsl, hsla or name format',
  validateColor,
);

export default GraphQLColorScalar;
