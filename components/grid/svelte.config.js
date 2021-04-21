const autoPreprocess = require('svelte-preprocess');
const materialPreprocessor = require('@material-svelte/svelte-preprocessor');

module.exports = {
  preprocess: [
    materialPreprocessor(),
    autoPreprocess({
      postcss: true,
    }),
  ],
};
