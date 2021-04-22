<script>
  import { action } from '@storybook/addon-actions';
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Switch } from '@material-svelte/switch';

  const meta = {
    title: 'Components/Switch',
    component: Switch,
    parameters: {
      options: { showPanel: true },
    },
    argTypes: {
      value: {
        table: {
          type: { summary: 'string | null' },
          defaultValue: { summary: 'null' },
        },
        control: {
          type: 'text',
        },
      },
      id: {
        table: {
          type: { summary: 'string | null' },
          defaultValue: { summary: 'null' },
        },
        control: {
          type: 'text',
        },
      },
      checkedColor: { control: 'color' },
      uncheckedColor: { control: 'color' },
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
  <Switch {...args} />
</Story>

<Story name="All" parameters={disableAddons}>
  <Switch />
  <Switch disabled />
  <Switch checked />
  <Switch checked disabled />
  <Switch>label</Switch>
  <Switch disabled>label</Switch>
</Story>

<Story name="Custom color" parameters={disableAddons}>
  <Switch checkedColor="#f00" />
  <Switch checkedColor="#f00" disabled />
  <Switch checkedColor="#f00" checked />
  <Switch checkedColor="#f00" checked disabled />
</Story>

<Story name="on:change" parameters={{ controls: { disabled: true } }}>
  <Switch on:change={action('changed')} />
</Story>
