<script lang="ts">
  import logo from './assets/svelte.png';
  import Counter from './lib/Counter.svelte';
  import Button from '@material-svelte/button';
  import Icon from '@material-svelte/icon';
  import { mdiHome } from '@mdi/js';
</script>

<main>
  <img src={logo} alt="Svelte Logo" />
  <h1>Hello Typescript!</h1>

  <Counter />
  <Button>
    <Icon slot="icon" path={mdiHome} />
    Button
  </Button>

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    margin: 0 auto;
    padding: 1em;
    text-align: center;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
    text-transform: uppercase;
  }

  p {
    line-height: 1.35;
    margin: 1rem auto;
    max-width: 14rem;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
