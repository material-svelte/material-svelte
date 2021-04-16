<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { page } from '$app/stores';
  import { IconButton } from '@material-svelte/button';
  import { Layout } from '@material-svelte/layout';
  import { List, ListItem } from '@material-svelte/list';
  import { NavigationDrawer } from '@material-svelte/navigation-drawer';
  import { TopAppBar } from '@material-svelte/top-app-bar';
  import { Typography } from '@material-svelte/typography';
  import { mdiMenu, mdiShareVariant, mdiMagnify } from '@mdi/js';
  import 'ress/dist/ress.min.css';

  const title = writable('');

  const barProminent = writable(false);
  const barDense = writable(false);

  const drawerOpen = writable(false);
  const drawerModal = writable(false);
  const drawerDismissable = writable(true);

  const layoutClippedNavigation = writable(true);

  setContext('$layout', {
    title,
    barProminent,
    barDense,
    drawerOpen,
    drawerModal,
    drawerDismissable,
    layoutClippedNavigation,
  });
</script>

<Layout clippedNavigation={$layoutClippedNavigation}>
  <TopAppBar slot="header" prominent={$barProminent} dense={$barDense}>
    <svelte:fragment slot="icon">
      {#if $drawerDismissable}
        <IconButton
          path={mdiMenu}
          on:click={() => {
            $drawerOpen = !$drawerOpen;
          }}
        />
      {/if}
    </svelte:fragment>
    <Typography slot="title" variant="h6">{$title}</Typography>
    <svelte:fragment slot="actions">
      <IconButton path={mdiShareVariant} />
      <IconButton path={mdiMagnify} />
    </svelte:fragment>
  </TopAppBar>
  <NavigationDrawer
    slot="navigation"
    bind:open={$drawerOpen}
    modal={$drawerModal}
  >
    <List navigation>
      <ListItem href="." selected={$page.path === '/'}>Home</ListItem>
      <ListItem href="test" selected={$page.path === '/test'}>Test</ListItem>
      {#each Array(20) as _, i}
        <ListItem>{i}</ListItem>
      {/each}
    </List>
  </NavigationDrawer>
  <main>
    <slot />
  </main>
</Layout>

<style>
  :global(body) {
    height: 100vh;
  }

  main {
    /* overflow: auto; */

    /* overflow: hidden; */

    /* height: 100%; */
  }
</style>
