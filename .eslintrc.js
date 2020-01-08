module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest',
    "react-hooks",
    'import',
    'promise',
    'react',
    'lodash-fp',
    'react-native'
  ],
  extends: [
    'eslint:recommended',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  rules: {
    'indent': ['error', 2, { VariableDeclarator: { var: 2, let: 2, const: 3 } }],
    'import/order': ['error', { 'newlines-between': 'always', 'groups': [['builtin', 'external'], ['parent', 'sibling', 'index']] }],
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-inline-styles': 1,
    'react-native/no-unused-styles': 2,
    'jsx-quotes': ['error', 'prefer-single'],
    'promise/always-return': 1,
    'promise/catch-or-return': 1,
    'lodash-fp/use-fp': 2,
    'global-require': 1,
    'max-depth': [1, 3],
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],
  }
};