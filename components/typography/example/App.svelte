<script>
  import Typography from '../src/Typography.svelte';
</script>

<svelte:head>
  <link href="https://unpkg.com/ress/dist/ress.min.css" rel="stylesheet" />
</svelte:head>

<Typography variant="h1">H1</Typography>
<Typography variant="h1" component="h2">H1 - h2</Typography>
<Typography variant="h2">H2</Typography>
<Typography variant="h3">H3</Typography>
<Typography variant="h4">H4</Typography>
<Typography variant="h5">H5</Typography>
<Typography variant="h6">H6</Typography>

<Typography variant="body1">Body1</Typography>
<Typography variant="body2">Body2</Typography>

<Typography variant="button">Button</Typography>
<Typography variant="caption">Caption</Typography>
<Typography variant="overline">Overline</Typography>
