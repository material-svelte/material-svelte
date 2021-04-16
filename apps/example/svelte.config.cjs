const sveltePreprocess = require('svelte-preprocess');
const static = require('@sveltejs/adapter-static');
const pkg = require('./package.json');
const materialSvelte = require('@material-svelte/postcss-plugin');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [materialSvelte()],
    },
  }),
  kit: {
    adapter: static(),

    target: 'body',

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },
};
