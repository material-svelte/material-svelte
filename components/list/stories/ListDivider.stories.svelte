<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { List, ListItem, ListDivider } from '@material-svelte/list';
  import { Icon } from '@material-svelte/icon';
  import { mdiFolder, mdiAccountCircle } from '@mdi/js';

  const meta = {
    title: 'Components/ListDivider',
    component: ListDivider,
    parameters: {
      options: { showPanel: true },
    },
    argTypes: {
      variant: {
        table: {
          type: { summary: 'full | middle | inset' },
        },
        control: {
          type: 'select',
          options: ['full', 'middle', 'inset'],
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
      <ListItem>Primary Text</ListItem>
      <ListDivider {...args} />
      <ListItem>Primary Text</ListItem>
      <ListDivider {...args} />
      <ListItem>Primary Text</ListItem>
      <ListDivider {...args} />
    </List>
  </div>
</Story>

<Story name="full" parameters={disableAddons}>
  <div style="border: solid 1px #eee;">
    <List>
      <ListItem>Primary Text</ListItem>
      <ListDivider />
      <ListItem>Primary Text</ListItem>
      <ListDivider />
      <ListItem>Primary Text</ListItem>
    </List>
  </div>
</Story>

<Story name="middle" parameters={disableAddons}>
  <div style="border: solid 1px #eee;">
    <List>
      <ListItem>Primary Text</ListItem>
      <ListDivider variant="middle" />
      <ListItem>Primary Text</ListItem>
      <ListDivider variant="middle" />
      <ListItem>Primary Text</ListItem>
    </List>
  </div>
</Story>

<Story name="inset" parameters={disableAddons}>
  <div style="border: solid 1px #eee;">
    <List>
      <ListItem>
        <Icon slot="visual" path={mdiFolder} />
        Primary Text
      </ListItem>
      <ListDivider variant="inset" />
      <ListItem visualVariant="avatar">
        <Icon slot="visual" path={mdiAccountCircle} />
        Primary Text
      </ListItem>
      <ListDivider variant="inset" />
      <ListItem visualVariant="avatar">
        <Icon slot="visual" path={mdiAccountCircle} />
        Primary Text
      </ListItem>
    </List>
  </div>
</Story>
