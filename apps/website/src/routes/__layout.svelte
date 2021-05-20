<script lang="ts">
  import { IconButton } from '@material-svelte/button';
  import { TopAppBar } from '@material-svelte/top-app-bar';
  import { Typography } from '@material-svelte/typography';
  import { Layout } from '@material-svelte/layout';
  import { mdiDiscord, mdiGithub } from '@mdi/js';
  import Footer from '$lib/Footer.svelte';
  import logo from '../../static/logo_white.svg';
  import 'ress/dist/ress.min.css';

  const title = 'Material-Svelte';
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Layout>
  <TopAppBar slot="header" dense>
    <img slot="icon" src={logo} alt="Material-Svelte logo" />
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
    <slot />
  </main>
  <Footer slot="footer" />
</Layout>

<style>
  :global(#svelte) {
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
    height: 24px;
    margin: 0 12px;
    transform: scale(1.5);
  }
</style>
