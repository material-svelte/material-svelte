<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { List, ListItem } from '@material-svelte/list';

  const meta = {
    title: 'Components/List',
    component: List,
    parameters: {
      options: { showPanel: false },
      controls: { disabled: true },
      actions: { disabled: true },
    },
  };

  let selection1, selection2, selection3, selection4;
</script>

<Meta {...meta} />

<Story name="disabled">
  <List disabled>
    <ListItem>Primary Text</ListItem>
    <ListItem>Primary Text</ListItem>
    <ListItem>Primary Text</ListItem>
  </List>
</Story>

<Story name="disabled with selected line">
  <List disabled>
    <ListItem>Primary Text</ListItem>
    <ListItem selected>Primary Text</ListItem>
    <ListItem>Primary Text</ListItem>
  </List>
</Story>

<Story name="selectable">
  <List selectable>
    <ListItem>Primary Text</ListItem>
    <ListItem>Primary Text</ListItem>
    <ListItem>Primary Text</ListItem>
    <ListItem disabled>Disabled element</ListItem>
  </List>
</Story>

<Story name="selectable with ids">
  <List selectable>
    <ListItem id="first">Primary Text</ListItem>
    <ListItem id="seconds">Primary Text</ListItem>
    <ListItem id="third">Primary Text</ListItem>
    <ListItem disabled>Disabled element</ListItem>
  </List>
</Story>

<Story name="multi-selectable">
  <List selectable multiple>
    <ListItem>Primary Text</ListItem>
    <ListItem>Primary Text</ListItem>
    <ListItem>Primary Text</ListItem>
    <ListItem disabled>Disabled element</ListItem>
  </List>
</Story>

<Story name="multi-selectable with ids">
  <List selectable multiple>
    <ListItem id="first">Primary Text</ListItem>
    <ListItem id="seconds">Primary Text</ListItem>
    <ListItem id="third">Primary Text</ListItem>
    <ListItem disabled>Disabled element</ListItem>
  </List>
</Story>

<Story name="navigation">
  <List navigation>
    <ListItem>One</ListItem>
    <ListItem>Two</ListItem>
    <ListItem>Three</ListItem>
    <ListItem disabled>Disabled element</ListItem>
  </List>
</Story>

<Story name="bind:selection">
  <span>selection: {selection1}</span>
  <List selectable bind:selection={selection1}>
    <ListItem>Primary Text</ListItem>
    <ListItem>Primary Text</ListItem>
    <ListItem>Primary Text</ListItem>
    <ListItem disabled>Disabled element</ListItem>
  </List>
</Story>

<Story name="bind:selection with ids">
  <span>selection: {selection2}</span>
  <List selectable bind:selection={selection2}>
    <ListItem id="first">Primary Text</ListItem>
    <ListItem id="seconds">Primary Text</ListItem>
    <ListItem id="third">Primary Text</ListItem>
    <ListItem disabled>Disabled element</ListItem>
  </List>
</Story>

<Story name="bind:selection multiple">
  <span>selection: {selection3}</span>
  <List selectable multiple bind:selection={selection3}>
    <ListItem>Primary Text</ListItem>
    <ListItem>Primary Text</ListItem>
    <ListItem>Primary Text</ListItem>
    <ListItem disabled>Disabled element</ListItem>
  </List>
</Story>

<Story name="bind:selection multiple with ids">
  <span>selection: {selection4}</span>
  <List selectable multiple bind:selection={selection4}>
    <ListItem id="first">Primary Text</ListItem>
    <ListItem id="seconds">Primary Text</ListItem>
    <ListItem id="third">Primary Text</ListItem>
    <ListItem disabled>Disabled element</ListItem>
  </List>
</Story>
