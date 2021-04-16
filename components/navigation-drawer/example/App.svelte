<script>
  import NavigationDrawer from '../src/NavigationDrawer.svelte';
  import { List, ListItem, ListDivider } from '@material-svelte/list';
  import { ContainedButton } from '@material-svelte/button';

  let open = false;
</script>

<svelte:head>
  <link href="https://unpkg.com/ress/dist/ress.min.css" rel="stylesheet" />
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic"
    rel="stylesheet"
  />
</svelte:head>

<NavigationDrawer bind:open modal>
  <List>
    <ListItem>one</ListItem>
    <ListItem>two</ListItem>
    <ListItem>three</ListItem>
  </List>
  <ListDivider />
  <List>
    <ListItem>one</ListItem>
    <ListItem>two</ListItem>
    <ListItem>three</ListItem>
  </List>
</NavigationDrawer>

<div class="open-button">
  <ContainedButton
    on:click={() => {
      open = !open;
    }}>open</ContainedButton
  >
</div>

<style>
  :global(body) {
    height: 100vh;
  }

  .open-button {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 100;
  }
</style>
