<script lang="ts">
  import { page } from '$app/stores';
  import { getContext, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import {
    NavigationRail,
    NavigationRailItem,
  } from '@material-svelte/navigation-rail';
  import { FloatingActionButton } from '@material-svelte/button';
  import { Icon } from '@material-svelte/icon';
  import { mdiFolder, mdiPlus } from '@mdi/js';

  const { title } = getContext('$layout');
  title.set('NavigationRail');

  const divider = writable(true);
  const compact = writable(false);
  const align = writable('start');

  setContext('$rail', {
    divider,
    compact,
    align,
  });
</script>

<div>
  <NavigationRail divider={$divider} compact={$compact}>
    <FloatingActionButton slot="fab">
      <Icon slot="icon" path={mdiPlus} />
    </FloatingActionButton>
    <NavigationRailItem
      iconPath={mdiFolder}
      label="index"
      href="/rail"
      active={$page.path === '/rail'}
    />
    <NavigationRailItem
      iconPath={mdiFolder}
      label="sub1"
      href="/rail/sub1"
      active={$page.path === '/rail/sub1'}
    />
    <NavigationRailItem
      iconPath={mdiFolder}
      label="sub2"
      href="/rail/sub2"
      active={$page.path === '/rail/sub2'}
    />
    <NavigationRailItem iconPath={mdiFolder} />
  </NavigationRail>
  <main>
    <slot />
  </main>
</div>

<style>
  div {
    display: flex;
    height: 100%;
  }

  main {
    flex: 1;
  }
</style>
