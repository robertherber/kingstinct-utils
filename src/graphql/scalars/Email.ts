import EmailRegex from 'email-regex';

import ScalarFactory from './utils/ScalarFactory';


const exactEmailRegex = EmailRegex({ exact: true });
function validateEmail(value: string): boolean {
  return exactEmailRegex.test(value);
}

const GraphQLEmailScalar = ScalarFactory(
  'Email',
  'Represents a email',
  validateEmail,
  (email: string) => email.toString(),
  (email: string) => {
    const [usernamePart, domainPart] = email.split('@');

    // lowercase domainpart since its case-insensitive
    return `${usernamePart}@${domainPart.toLowerCase()}`;
  },
);

export default GraphQLEmailScalar;
