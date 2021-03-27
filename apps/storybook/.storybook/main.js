const svelteOptions = require('./svelte.config');

module.exports = {
  stories: ['../../../components/**/stories/*.stories.svelte'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-svelte-csf',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  svelteOptions,
};
