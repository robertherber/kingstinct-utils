module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    "env": {
      "shared-node-browser": true
    },
    parserOptions: {
      project: `./tsconfig.json`,
      ecmaFeatures: {
          jsx: true
      }
    },
    plugins: [
      '@typescript-eslint',
      'jest',
      "react-hooks",
      'import',
      'json',
      'promise',
      'react',
      'lodash-fp',
      'react-native'
    ],
    extends: [
      'plugin:json/recommended',
      'eslint:recommended',
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:lodash-fp/recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:jest/recommended'
    ],
    rules: {
      '@typescript-eslint/array-type':[2, { default: 'generic', readonly: 'generic' }],
      '@typescript-eslint/indent': ['error', 2, { VariableDeclarator: { var: 2, let: 2, const: 3 } }],
      '@typescript-eslint/no-extra-parens': 2,
      '@typescript-eslint/no-extra-semi': 2,
      '@typescript-eslint/no-unnecessary-condition': 2,
      '@typescript-eslint/no-unnecessary-qualifier': 2,
      '@typescript-eslint/no-unnecessary-type-arguments': 2,
      '@typescript-eslint/prefer-nullish-coalescing': 2,
      '@typescript-eslint/prefer-optional-chain': 2,
      '@typescript-eslint/prefer-readonly': 2,
      'global-require': 1,
      'import/order': ['error', { 'newlines-between': 'always', 'groups': [['builtin', 'external'], ['parent', 'sibling', 'index']] }],
      'indent': ['error', 2, { VariableDeclarator: { var: 2, let: 2, const: 3 } }],
      'jsx-quotes': ['error', 'prefer-single'],
      'lodash-fp/use-fp': 2,
      'max-depth': [1, 3],
      'no-nested-ternary': 0,
      'promise/always-return': 1,
      'promise/catch-or-return': 1,
      'quote-props': ['error', 'consistent-as-needed'],
      'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-native/no-inline-styles': 1,
      'react-native/no-unused-styles': 2,
      "one-var": 0,
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