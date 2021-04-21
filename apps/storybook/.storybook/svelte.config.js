const sveltePreprocess = require('svelte-preprocess');
const materialPreprocess = require('@material-svelte/svelte-preprocessor');
module.exports = {
  preprocess: [
    materialPreprocess(),
    sveltePreprocess({
      postcss: true,
      typescript: {
        tsconfigFile: false,
      },
    }),
  ],
};
