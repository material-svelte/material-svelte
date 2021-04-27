<script lang="ts">
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { page } from '$app/stores';
  import { BreakpointObserver } from '@material-svelte/breakpoint-tools';
  import { IconButton } from '@material-svelte/button';
  import { Layout } from '@material-svelte/layout';
  import { List, ListItem } from '@material-svelte/list';
  import { NavigationDrawer } from '@material-svelte/navigation-drawer';
  import { TopAppBar } from '@material-svelte/top-app-bar';
  import { Typography } from '@material-svelte/typography';
  import { mdiMenu, mdiShareVariant, mdiMagnify } from '@mdi/js';
  import 'ress/dist/ress.min.css';
  import config from '$material-svelte-config';

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

  onMount(() => {
    const observer = new BreakpointObserver({
      breakpoints: config.breakpoints,
    });
    observer.to('small', (matches) => {
      if (matches) {
        $drawerOpen = false;
        $drawerModal = true;
        $drawerDismissable = true;
      }
    });
    observer.at('medium', (matches) => {
      if (matches) {
        $drawerModal = false;
        $layoutClippedNavigation = true;
        $drawerDismissable = true;
      }
    });
    observer.from('large', (matches) => {
      if (matches) {
        $drawerModal = false;
        $drawerOpen = true;
        $layoutClippedNavigation = false;
        $drawerDismissable = false;
      }
    });
  });
</script>

<svelte:head>
  <title>{$title}</title>
</svelte:head>

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
      <ListItem href="/" selected={$page.path === '/'}>Home</ListItem>
      <ListItem href="/breakpoint" selected={$page.path === '/breakpoint'}>
        Breakpoint
      </ListItem>
      <ListItem href="/grid" selected={$page.path === '/grid'}>Grid</ListItem>
      {#each Array(20) as _, i}
        <ListItem>{i}</ListItem>
      {/each}
    </List>
  </NavigationDrawer>
  <slot />
</Layout>

<style>
  :global(body) {
    height: 100vh;
  }
</style>
