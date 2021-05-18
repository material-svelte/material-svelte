<script lang="ts">
  import { Button, IconButton } from '@material-svelte/button';
  import { TopAppBar } from '@material-svelte/top-app-bar';
  import { Typography } from '@material-svelte/typography';
  import { Layout } from '@material-svelte/layout';
  import { mdiDiscord, mdiGithub } from '@mdi/js';

  import 'ress/dist/ress.min.css';

  const title = 'Vite + Svelte + Material-Svelte';
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Layout>
  <TopAppBar slot="header">
    <Typography slot="title" variant="h6">{title}</Typography>
    <svelte:fragment slot="actions">
      <IconButton
        path={mdiGithub}
        href="https://github.com/material-svelte/material-svelte"
      />
      <IconButton path={mdiDiscord} href="https://material-svelte.dev/chat" />
    </svelte:fragment>
  </TopAppBar>
  <main>
    <img src="/logo_512.svg" alt="material-svelte logo" />
    <Typography variant="h4">Welcome to material-svelte</Typography>
    <div class="links">
      <Button href="https://example.material-svelte.dev">
        See it in action
      </Button>
      <Button href="https://storybook.material-svelte.dev">
        See the storybook
      </Button>
      <Button href="https://material-svelte.dev">Learn more</Button>
    </div>
  </main>
</Layout>

<style>
  :global(#app) {
    height: 100vh;
  }

  main {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }

  img {
    height: 50%;
  }

  .links {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
</style>
