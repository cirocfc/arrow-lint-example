module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    '@vue/eslint-config-airbnb',
  ],
  globals: {
    'ENV': true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: [
    '@getify/proper-arrows',
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@getify/proper-arrows/where': 'error',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './vue.config.js',
      },
    },
  },
};
