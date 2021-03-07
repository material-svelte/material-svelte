module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'standard',
    'prettier',
  ],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
};
