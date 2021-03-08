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
  plugins: ['import', 'svelte3'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        // TODO figure out how to get this working without ignoring.
        // currently required for sveltekit
        'import/no-unresolved': ['error', { ignore: ['^\\$'] }],
      },
    },
  ],
};
