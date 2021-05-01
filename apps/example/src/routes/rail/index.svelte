<script lang="ts">
  import { getContext } from 'svelte';
  import {
    List,
    ListItem,
    ListDivider,
    ListSubheader,
  } from '@material-svelte/list';
  import { Switch } from '@material-svelte/switch';
  import { Radio } from '@material-svelte/radio';

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
  <ListSubheader>NavigationRail alignment</ListSubheader>
  <ListItem
    on:click={() => {
      $align = 'start';
    }}
  >
    start
    <Radio slot="meta" bind:group={$align} value="start" />
  </ListItem>
  <ListItem
    on:click={() => {
      $align = 'center';
    }}
  >
    center
    <Radio slot="meta" bind:group={$align} value="center" />
  </ListItem>
  <ListItem
    on:click={() => {
      $align = 'end';
    }}
  >
    end
    <Radio slot="meta" bind:group={$align} value="end" />
  </ListItem>
</List>
