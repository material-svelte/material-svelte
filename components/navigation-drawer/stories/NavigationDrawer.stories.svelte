<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { NavigationDrawer } from '@material-svelte/navigation-drawer';
  import { List, ListItem } from '@material-svelte/list';

  const meta = {
    title: 'Components/NavigationDrawer',
    component: NavigationDrawer,
    parameters: {
      options: { showPanel: true },
    },
    argTypes: {
      open: { defaultValue: true },
    },
  };

  const disableAddons = {
    options: { showPanel: false },
    controls: { disabled: true },
    actions: { disabled: true },
  };
</script>

<Meta {...meta} />

<Story name="Playground" let:args>
  <NavigationDrawer open {...args}>
    <List>
      <ListItem>one</ListItem>
      <ListItem>two</ListItem>
      <ListItem>three</ListItem>
    </List>
  </NavigationDrawer>
</Story>

<Story name="modal" parameters={disableAddons}>
  <NavigationDrawer open modal>
    <List>
      <ListItem>one</ListItem>
      <ListItem>two</ListItem>
      <ListItem>three</ListItem>
    </List>
  </NavigationDrawer>
</Story>

<Story name="elevated" parameters={disableAddons}>
  <NavigationDrawer open elevated>
    <List>
      <ListItem>one</ListItem>
      <ListItem>two</ListItem>
      <ListItem>three</ListItem>
    </List>
  </NavigationDrawer>
</Story>
