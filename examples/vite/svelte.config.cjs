const sveltePreprocess = require('svelte-preprocess');
const materialSvelte = require('@material-svelte/postcss-plugin');

module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [materialSvelte()],
    },
  }),
};
