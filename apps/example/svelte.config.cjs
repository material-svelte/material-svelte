const sveltePreprocess = require('svelte-preprocess');
const static = require('@sveltejs/adapter-static');
const pkg = require('./package.json');
const materialPreprocess = require('@material-svelte/svelte-preprocessor');
const materialPostcss = require('@material-svelte/postcss-plugin');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  preprocess: [
    materialPreprocess(),
    sveltePreprocess({
      postcss: {
        plugins: [materialPostcss()],
      },
    }),
  ],
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
