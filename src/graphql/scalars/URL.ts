import urlRegex from 'url-regex';

import ScalarFactory from './utils/ScalarFactory';


const exactUrlRegex = urlRegex({ exact: true });
function validateUrl(value: string): boolean {
  return exactUrlRegex.test(value);
}

const GraphQLURLScalar = ScalarFactory(
  'URL',
  'Represents a URL which is forced to start with a valid protocol',
  validateUrl,
  (url: string) => url.toString(),
  (url: string) => url.toLowerCase(),
);

export default GraphQLURLScalar;
