const autoPreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: autoPreprocess({
    defaults: {
      script: 'typescript',
    },
    typescript: true,
    postcss: true,
  }),
};
