<script>
  import List from '../src/List.svelte';
  import ListItem from '../src/ListItem.svelte';
</script>

<svelte:head>
  <link href="https://unpkg.com/ress/dist/ress.min.css" rel="stylesheet" />
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic"
    rel="stylesheet"
  />
</svelte:head>

<List selectable>
  <ListItem id="one">one</ListItem>
  <ListItem id="two">two</ListItem>
</List>

<List selectable>
  <ListItem>one</ListItem>
  <ListItem>two</ListItem>
</List>
