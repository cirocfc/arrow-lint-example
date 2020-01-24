module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    '@vue/eslint-config-airbnb',
    // 'plugin:@getify/proper-arrows/getify-says',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: [
    '@getify/proper-arrows',
  ],
  rules: {
    '@getify/proper-arrows/where': ['error', {
      'global': false,
      'property': true,
      'export': true,
      'trivial': false
    }],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './vue.config.js',
      },
    },
  },
};
