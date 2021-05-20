<p align="center">
  <a href="https://material-svelte.dev" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://material-svelte.dev/logo.svg" alt="Material Svelte logo">
  </a>
</p>
<br/>
<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2021.svg?style=for-the-badge" alt="maintained">
  <a href="https://github.com/material-svelte/material-svelte/blob/main/LICENSE.md"><img src="https://img.shields.io/npm/l/material-svelte.svg?style=for-the-badge" alt="license"></a>
  <a href="https://www.npmjs.com/package/material-svelte"><img src="https://img.shields.io/npm/v/material-svelte.svg?style=for-the-badge" alt="npm package"></a>
  <br />
  <a href="https://storybook.material-svelte.dev"><img src="https://img.shields.io/static/v1?style=for-the-badge&logo=storybook&label=docs&message=storybook" alt="storybook"></a>
  <a href="https://happo.io/a/667/components?projectId=834"><img src="https://img.shields.io/static/v1?style=for-the-badge&label=tests&message=happo.io&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABdFBMVEUAAAAA//8AgIAAqqoAv4AAmZkAqoAgn4Acqo4UsYkSpJIRqogQr48PpYcOqo4NrpQapowVqooUrY8SrZISp40RqpEXrY8VrJEUqpARrosWrJAWro0Vqo8UrY8UqowUrI4SrY0Sqo8Wq40VrZAUq48UrY0TrY8Sq44WrJAVrI0Uq40UrI4Tq44Vqo8Vq40Uq44Uq48Tq40Uqo8UrI4Tqo0Tqo4Vq48Uq40Uqo4Tq48Vq44Uq48UrI4Uq40Vq48Uq40Uq44TrI4Tq40Vq40Vq44UrI8Uq44UrI4Vq48Uq40UrI4Tq44Vq44Uq44Uq48Uq44Tqo0Uq44Uqo4Uq44Uqo0Uq44Uq48Uqo4Uqo0Uq48Uq44Uq44Tq44Uq44Uq44UrI4Uq44UrI8Uq44Uq44TrI4Uq44Uq44Uq44Uq44Uq44Uq44Vq44Uq48Uq44Uq44Uq44Uq44Uq44Uq44Uq44Uq44Uq44Uq44Uq44Uq44Uq44Uq47///9oNuSJAAAAenRSTlMAAQIDBAUGCAkNDg8QERITFBgZHB0eIiUnLC4vMDIzNDg5Oj5AQURGR0pMTU9UVVhbXmZoaWxtcHV2en2BgoiJjJCSlJWWmpyhpKWrrrCxs7i8vsDBwsPEyszP0dLU19na3N3e3+Dh5ufq6+zu7/H09fb3+Pn6+/z9/hguAqwAAAABYktHRHtP0rX8AAABUklEQVQYGb3B1UICQQAF0KuAioGB3YnY3d3ditidqIiBcr9edyR2wFl90XPw/3KrUvELeeukbywTP+nwUnNTDhVLIgDTNIN8RYhWuXs/bkbJ0UEKkpYYtp8AmdVDcqTwjtxzuqjTDFk5P71eMMYyZMm3FG7mHig5Q5Si1Ud+qkM7JY+IkfdEsgtjlFwiIre1f3S4t8FFjYeyJQSl9V3QSBMEc5+XhtbioLGt0dh2FjS2XSpc75yeH29NOuOhMW9Q5W0gHhFDNLCagZD8Fxp4b0HIAg3s1CIkx8/veZ2OGjsieqjSBMkKVeYhOaXKFSQ+KqVD741KBdC7o1IZ9NxUyobeBFUCCdBro8oJJGnPVJiCbIFhHvexn2H1kFUzKNBtAuyLDDozIcomv8xAYznily5EqwhQaIQwSOHQghizFIohdFLjr0Qsm0OwQshxaErx5z4A7ad+QDOO0g8AAAAASUVORK5CYII=" alt="happo.io"></a>
  <a href="https://material-svelte.dev/chat"><img src="https://img.shields.io/static/v1?style=for-the-badge&logo=discord&label=chat&message=discord" alt="discord chat"></a>
</p>
<br/>

# What is material-svelte?

`material-svelte` is a component-library for svelte implementing the material-design specification.

See it in action on our [example application](https://example.material-svelte.dev).

See what the components can do in our [storybook](https://storybook.material-svelte.dev).

## Development Status

- `material-svelte` is currently in active development
- there are still many components missing, but we got a solid foundation
- APIs of existing components can be considered semi-stable, but should not be considered stable until we hit `2.0.0`
- the topic of `theming` has yet to be solved
- the topic of `configuration` has yet to be solved

## Design Goals

- We aim to be as close as possible to the material design specification as defined by [material.io](https://material.io)
- We aim to enable you to quickly and efficiently build your applications
- We aim to enable you to work with state-of-the-art toolchains. Our primary focus lays on integrating with [SvelteKit](https://kit.svelte.dev), [Vite](https://vitejs.dev), [Snowpack](https://snowpack.dev)
- We aim for component implementations that follow the Svelte-mindset
- We aim for being a distinct, svelte-centric implementation. We don't want to be a copy-cat of other libraries (e.g. [material-ui](https://material-ui.com), [vuetify](https://vuetifyjs.com)), which are awesome in their own right

## Features

- We provide you with fully typed components
- We provide you with confidence by applying git-flow based merge-strategies with linting-, testing- and release-ci-pipelines
- We provide you with confidence by applying [cross-platform, cross-browser screenshot testing powered by happo.io](https://happo.io?_aid=667)

## Future

- We aim to provide you with confidence by having our components fully tested<sup>[[1]](#future-1)</sup>

<a name="future-1"><sup>[1]</sup></a> The foundation is there. But the current test-suite can be considered smoke-test at best.

# Installation

## SvelteKit

### Setup SvelteKit-project

(A full example is available [here](./examples/sveltekit))

To get started: Create a SvelteKit-project.

:exclamation: Make sure to enable TypeScript-Support.

```bash
$ npm init svelte@next
npx: installed 5 in 1.269s

create-svelte version 2.0.0-next.70

Welcome to SvelteKit!

This is beta software; expect bugs and missing features.

If you encounter a problem, open an issue on https://github.com/sveltejs/kit/issues if none exists already.

✔ Which Svelte app template? › Skeleton project
✔ Use TypeScript? … No / Yes
✔ Add ESLint for code linting? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Copied project files
✔ Added TypeScript support. To use it inside Svelte components, add lang="ts" to the attributes of a script tag.
```

### Setup material-svelte PostCSS-plugin

As we use PostCSS with custom mixins, at-rules etc, you are required to configure svelte to use our PostCSS-plugin.

Install it:

```bash
$ npm install --save-dev @material-svelte/postcss-plugin
```

Enable it in `svelte.config.js`:

```diff
import preprocess from 'svelte-preprocess';
+ import materialPostcss from '@material-svelte/postcss-plugin';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
-  preprocess: preprocess(),
+  preprocess: preprocess({
+    postcss: {
+      plugins: [
+        materialPostcss(),
+      ],
+    },
+  }),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte'
  }
};

export default config;
```

## Vite

### Setup Vite-project

(A full example is available [here](./examples/vite))

To get started: Create a Vite-Svelte-project.

:exclamation: Make sure to enable TypeScript-Support.

```bash
$ npm init @vitejs/app
✔ Project name: · vite-project
✔ Select a framework: · svelte
✔ Select a variant: · TypeScript

Scaffolding project in /tmp/vite/vite-project...

Done. Now run:

  cd vite-project
  npm install
  npm run dev
```

### Setup material-svelte PostCSS-plugin

As we use PostCSS with custom mixins, at-rules etc, you are required to configure svelte to use our PostCSS-plugin.

Install it:

```bash
$ npm install --save-dev @material-svelte/postcss-plugin
```

Enable it in `svelte.config.cjs`:

```diff
const sveltePreprocess = require('svelte-preprocess')
+ const materialPostcss = require('@material-svelte/postcss-plugin')

module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
-  preprocess: sveltePreprocess()
+  preprocess: sveltePreprocess({
+    postcss: {
+      plugins: [
+        materialPostcss(),
+      ],
+    },
+  })
}
```

## Snowpack

### Setup Snowpack-Svelte-project

(A full example is available [here](./examples/snowpack))

To get started: Create a Snowpack-Svelte-project.

:exclamation: Make sure to use the TypeScript-enabled app-template.

```bash
$ npx create-snowpack-app snowpack-project --template @snowpack/app-template-svelte-typescript
npx: installed 24 in 3.141s

  - Using template @snowpack/app-template-svelte-typescript
  - Creating a new project in /tmp/snowpack-project
  - Installing package dependencies. This might take a couple of minutes.

...

Quickstart:

  cd snowpack-project
  npm start

All Commands:

  npm install      Install your dependencies. (We already ran this one for you!)
  npm start        Start your development server.
  npm run build    Build your website for production.
  npm test         Run your tests.
```

### Setup material-svelte PostCSS-plugin

As we use PostCSS with custom mixins, at-rules etc, you are required to configure svelte to use our PostCSS-plugin.

Install it:

```bash
$ npm install --save-dev @material-svelte/postcss-plugin
```

Enable it in `svelte.config.js`:

```diff
const autoPreprocess = require('svelte-preprocess');
+ const materialPostcss = require('@material-svelte/postcss-plugin')

module.exports = {
  preprocess: autoPreprocess({
    defaults: {
      script: 'typescript',
    },
+    postcss: {
+      plugins: [
+        materialPostcss(),
+      ],
+    },
  }),
};
```

# Usage

## Use material-svelte components

You can either install individual component packages (e.g. [@material-svelte/button](https://www.npmjs.com/package/@material-svelte/button)) or the meta-package [material-svelte](https://www.npmjs.com/package/material-svelte)<sup>[[1]](#usage-1)</sup>

```bash
$ npm install --save-dev @material-svelte/button
```

Then start using it in your components:

```svelte
<script lang="ts">
  import { Button } from '@material-svelte/button';
</script>

<Button>Hello World</Button>
```

<a name="usage-1"><sup>[1]</sup></a> We're not completely confident in the meta-package yet. From time-to-time problems arise with transitive-dependencies with individual build-tools.

# Contributing

See [Contributing Guide](.github/CONTRIBUTING.md)

# Sponsors

## Vercel

<a href="https://vercel.com?utm_source=material-svelte&utm_campaign=oss"><img src="https://github.com/material-svelte/material-svelte/blob/main/apps/website/static/powered-by-vercel.svg" height="40" alt="vercel logo"></a>

Thanks to [Vercel](https://vercel.com?utm_source=material-svelte&utm_campaign=oss) for sponsoring this project by allowing it to run deployments for free!

## happo.io

<a href="https://happo.io?_aid=667"><img src="https://github.com/material-svelte/material-svelte/blob/main/apps/website/static/happo-io-logo.svg" height="40" alt="happo.io logo"></a>

Thanks to [happo.io](https://happo.io?_aid=667) for sponsoring this project by allowing it to run cross-platform, cross-browser screenshot-testing for free!

# License

[MIT](https://github.com/material-svelte/material-svelte/blob/main/LICENSE.md)
