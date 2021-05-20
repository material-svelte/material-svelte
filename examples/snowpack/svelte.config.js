const autoPreprocess = require('svelte-preprocess');
const materialPostcss = require('@material-svelte/postcss-plugin');

module.exports = {
  preprocess: autoPreprocess({
    defaults: {
      script: 'typescript',
    },
    postcss: {
      plugins: [materialPostcss()],
    },
  }),
};
