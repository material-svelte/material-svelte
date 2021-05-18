import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import materialPreprocess from '@material-svelte/svelte-preprocessor';
import materialPostcss from '@material-svelte/postcss-plugin';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    materialPreprocess(),
    preprocess({
      postcss: {
        plugins: [materialPostcss()],
      },
    }),
  ],

  kit: {
    adapter: adapter(),
    // hydrate the <div id="svelte"> element in src/app.html
    target: 'body',
  },
};

export default config;
