const autoPreprocess = require('svelte-preprocess');
const materialSvelte = require('@material-svelte/postcss-plugin');

module.exports = {
  preprocess: autoPreprocess({
    defaults: {
      script: 'typescript',
    },
    postcss: {
      plugins: [materialSvelte()],
    },
  }),
};
