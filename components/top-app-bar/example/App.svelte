<script lang="ts">
  import TopAppBar from '../src/TopAppBar.svelte';
  import { IconButton } from '@material-svelte/button';
  import { Typography } from '@material-svelte/typography';
  import { mdiMenu, mdiShareVariant, mdiMagnify } from '@mdi/js';
</script>

<svelte:head>
  <link href="https://unpkg.com/ress/dist/ress.min.css" rel="stylesheet" />
</svelte:head>

<TopAppBar color="#ccc">
  <IconButton slot="icon" path={mdiMenu} />
  <Typography slot="title" variant="h6">Page Title</Typography>
  <slot slot="actions">
    <IconButton path={mdiShareVariant} />
    <IconButton path={mdiMagnify} />
  </slot>
</TopAppBar>
