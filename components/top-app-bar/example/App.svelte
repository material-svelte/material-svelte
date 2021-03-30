<script lang="ts">
  import TopAppBar from '../src/TopAppBar.svelte';
  import Button from '@material-svelte/button';
  import Icon from '@material-svelte/icon';
  import Typography from '@material-svelte/typography';
  import { mdiMenu, mdiShareVariant, mdiMagnify } from '@mdi/js';

  let prominent = false;
</script>

<svelte:head>
  <link href="https://unpkg.com/ress/dist/ress.min.css" rel="stylesheet" />
</svelte:head>

<TopAppBar {prominent}>
  <Button
    slot="icon"
    variant="menu"
    on:click={() => {
      prominent = !prominent;
    }}
  >
    <Icon slot="icon" path={mdiMenu} />
  </Button>
  <Typography slot="title" variant="h6">Page Title</Typography>
  <span slot="actions">
    <Button slot="icon" variant="menu">
      <Icon slot="icon" path={mdiShareVariant} />
    </Button>
    <Button slot="icon" variant="menu">
      <Icon slot="icon" path={mdiMagnify} />
    </Button>
  </span>
</TopAppBar>
