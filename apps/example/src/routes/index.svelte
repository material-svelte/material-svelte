<script lang="ts">
  import { getContext } from 'svelte';
  import { Checkbox } from '@material-svelte/checkbox';
  import {
    List,
    ListItem,
    ListDivider,
    ListSubheader,
  } from '@material-svelte/list';
  import { Switch } from '@material-svelte/switch';

  let listSelection: string[];

  const {
    title,
    barProminent,
    barDense,
    drawerOpen,
    drawerModal,
    drawerDismissable,
    layoutClippedNavigation,
  } = getContext('$layout');

  title.set('Home');
</script>

<List>
  <ListSubheader>TopAppBar options</ListSubheader>
  <ListItem
    on:click={() => {
      $barProminent = !$barProminent;
    }}
  >
    prominent
    <Switch slot="meta" bind:checked={$barProminent} />
  </ListItem>
  <ListItem
    on:click={() => {
      $barDense = !$barDense;
    }}
  >
    dense
    <Switch slot="meta" bind:checked={$barDense} />
  </ListItem>
  <ListDivider />
  <ListSubheader>NavigationDrawer options</ListSubheader>
  <ListItem
    on:click={() => {
      $drawerOpen = !$drawerOpen;
    }}
  >
    open
    <Checkbox slot="meta" bind:checked={$drawerOpen} />
  </ListItem>
  <ListItem
    on:click={() => {
      $drawerModal = !$drawerModal;
    }}
  >
    modal
    <Checkbox slot="meta" bind:checked={$drawerModal} />
  </ListItem>
  <ListDivider />
  <ListSubheader>Layout options</ListSubheader>
  <ListItem
    on:click={() => {
      $layoutClippedNavigation = !$layoutClippedNavigation;
    }}
  >
    clippedNavigation
    <Checkbox slot="meta" bind:checked={$layoutClippedNavigation} />
  </ListItem>
  <ListDivider />
  <ListSubheader>$layout options</ListSubheader>
  <ListItem
    on:click={() => {
      $drawerDismissable = !$drawerDismissable;
    }}
  >
    drawer dismissable
    <Checkbox slot="meta" bind:checked={$drawerDismissable} />
  </ListItem>
</List>
<List bind:selection={listSelection} selectable multiple>
  <ListDivider />
  <ListSubheader>multi-selectable - selected: {listSelection}</ListSubheader>
  {#each Array(20) as _, i}
    <ListItem>{i}</ListItem>
  {/each}
</List>
