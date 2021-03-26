module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.js'],
      extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'standard',
        'prettier',
      ],
      plugins: ['import'],
    },
    {
      files: ['*.svelte'],
      extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'standard-with-typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      plugins: ['import', 'svelte3', '@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      processor: 'svelte3/svelte3',
      rules: {
        // TODO figure out why this is not working
        'import/no-unresolved': 'off',
        // import order cannot be determined correctly in .svelte components
        'import/first': 'off',
      },
      settings: {
        'svelte3/typescript': require('typescript'),
        'svelte3/ignore-styles': (attributes) =>
          attributes.lang && attributes.foo !== 'css',
      },
    },
    {
      files: ['*.stories.svelte'],
      rules: {
        // ignore dependencies of stories within components
        // as they are not listed in the package but in storybook
        'import/no-unresolved': 'off',
      },
    },
  ],
};
