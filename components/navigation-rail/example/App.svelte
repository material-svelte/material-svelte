<script>
  import { NavigationRail, NavigationRailItem } from '../src';
  import { FloatingActionButton } from '@material-svelte/button';
  import { Icon } from '@material-svelte/icon';
  import { mdiPlus, mdiFolder, mdiImageMultiple } from '@mdi/js';
</script>

<svelte:head>
  <link href="https://unpkg.com/ress/dist/ress.min.css" rel="stylesheet" />
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic"
    rel="stylesheet"
  />
</svelte:head>

<NavigationRail align="end" divider compact>
  <FloatingActionButton slot="fab">
    <Icon slot="icon" path={mdiPlus} />
  </FloatingActionButton>
  <NavigationRailItem
    iconPath={mdiFolder}
    on:click={() => console.log('folder')}
  />
  <NavigationRailItem
    iconPath={mdiImageMultiple}
    label="Images"
    active
    href="/foobar"
  />
</NavigationRail>

<style>
  :global(body) {
    height: 100vh;
  }
</style>
