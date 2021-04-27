<script lang="ts">
  import { getContext } from 'svelte';
  import {
    List,
    ListItem,
    ListDivider,
    ListSubheader,
  } from '@material-svelte/list';
  import { Switch } from '@material-svelte/switch';

  const { divider, compact, align } = getContext('$rail');
</script>

<List>
  <ListSubheader>NavigationRail options</ListSubheader>
  <ListItem
    on:click={() => {
      $divider = !$divider;
    }}
  >
    divider
    <Switch slot="meta" bind:checked={$divider} />
  </ListItem>
  <ListItem
    on:click={() => {
      $compact = !$compact;
    }}
  >
    compact
    <Switch slot="meta" bind:checked={$compact} />
  </ListItem>
</List>
