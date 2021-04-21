const autoPreprocess = require('svelte-preprocess');
const materialPreprocess = require('@material-svelte/svelte-preprocessor');
const materialPostcss = require('@material-svelte/postcss-plugin');

module.exports = {
  preprocess: [
    materialPreprocess(),
    autoPreprocess({
      postcss: {
        plugins: [materialPostcss()],
      },
    }),
  ],
};
