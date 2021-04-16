<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { List, ListItem, ListSubheader } from '@material-svelte/list';
  import { Icon } from '@material-svelte/icon';
  import { mdiFolder, mdiAccountCircle } from '@mdi/js';

  const meta = {
    title: 'Components/ListSubheader',
    component: ListSubheader,
    parameters: {
      options: { showPanel: true },
    },
    argTypes: {
      variant: {
        table: {
          type: { summary: 'regular | inset' },
        },
        control: {
          type: 'select',
          options: ['regular', 'inset'],
        },
      },
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
  <div style="border: solid 1px #eee;">
    <List>
      <ListSubheader {...args}>Subheader</ListSubheader>
      <ListItem>Primary Text</ListItem>
      <ListSubheader {...args}>Subheader</ListSubheader>
      <ListItem>Primary Text</ListItem>
      <ListSubheader {...args}>Subheader</ListSubheader>
      <ListItem>Primary Text</ListItem>
    </List>
  </div>
</Story>

<Story name="regular" parameters={disableAddons}>
  <div style="border: solid 1px #eee;">
    <List>
      <ListSubheader>Subheader</ListSubheader>
      <ListItem>Primary Text</ListItem>
      <ListSubheader>Subheader</ListSubheader>
      <ListItem>Primary Text</ListItem>
      <ListSubheader>Subheader</ListSubheader>
      <ListItem>Primary Text</ListItem>
    </List>
  </div>
</Story>

<Story name="inset" parameters={disableAddons}>
  <div style="border: solid 1px #eee;">
    <List>
      <ListSubheader variant="inset">Subheader</ListSubheader>
      <ListItem>
        <Icon slot="visual" path={mdiFolder} />
        Primary Text
      </ListItem>
      <ListSubheader variant="inset">Subheader</ListSubheader>
      <ListItem visualVariant="avatar">
        <Icon slot="visual" path={mdiAccountCircle} />
        Primary Text
      </ListItem>
      <ListSubheader variant="inset">Subheader</ListSubheader>
      <ListItem visualVariant="avatar">
        <Icon slot="visual" path={mdiAccountCircle} />
        Primary Text
      </ListItem>
    </List>
  </div>
</Story>
