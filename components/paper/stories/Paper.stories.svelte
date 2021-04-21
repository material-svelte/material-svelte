<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Paper } from '@material-svelte/paper';

  const meta = {
    title: 'Components/Paper',
    component: Paper,
    parameters: {
      options: { showPanel: true },
    },
    argTypes: {
      variant: {
        defaultValue: 'elevated',
        table: {
          type: { summary: 'elevated | outlined' },
          defaultValue: { summary: 'elevated' },
        },
        control: {
          type: 'select',
          options: ['elevated', 'outlined'],
        },
      },
      elevation: {
        control: {
          type: 'number',
          min: 0,
          max: 24,
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
  <Paper {...args}>text</Paper>
</Story>

<Story name="elevated" parameters={disableAddons}>
  <Paper>text</Paper>
</Story>

<Story name="elevated - elevation" parameters={disableAddons}>
  <Paper elevation={10}>text</Paper>
</Story>

<Story name="outlined" parameters={disableAddons}>
  <Paper variant="outlined">text</Paper>
</Story>

<Story name="square" parameters={disableAddons}>
  <Paper square>text</Paper>
</Story>
