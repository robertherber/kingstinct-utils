const config = require('../../.eslintrc.js');

config.parserOptions.project = './tsconfig.node.json';
config.parserOptions.sourceType = 'module';
config.parserOptions.features = { "modules": true };

config.extends = [...config.extends, 'plugin:node/recommended'];
config.env = { node: true, es6: true };

config.rules['node/no-unsupported-features/es-syntax'] = 0;
config.rules['node/no-missing-import'] = 0;
config.rules['node/shebang'] = 0

module.exports = config;