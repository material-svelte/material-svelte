<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { TextField } from '@material-svelte/text-field';
  import { mdiCloseCircleOutline, mdiCalendar } from '@mdi/js';
  import { Icon } from '@material-svelte/icon';

  const meta = {
    title: 'Components/TextField',
    component: TextField,
    parameters: {
      options: { showPanel: true },
    },
    argTypes: {
      variant: {
        defaultValue: 'filled',
        table: {
          type: { summary: 'filled | outlined' },
          defaultValue: { summary: 'filled' },
        },
        control: {
          type: 'select',
          options: ['filled', 'outlined'],
        },
      },
      id: {
        table: {
          type: { summary: 'string' },
        },
        control: {
          type: 'text',
        },
      },
      label: {
        table: {
          type: { summary: 'string | null' },
          defaultValue: { summary: 'null' },
        },
        control: {
          type: 'text',
        },
      },
      helperText: {
        table: {
          type: { summary: 'string | null' },
          defaultValue: { summary: 'null' },
        },
        control: {
          type: 'text',
        },
      },
      focusColor: {
        control: 'color',
      },
      errorColor: {
        control: 'color',
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
  <TextField {...args} />
</Story>

<Story name="filled" parameters={disableAddons}>
  <TextField variant="filled" />
</Story>

<Story name="filled with label" parameters={disableAddons}>
  <TextField variant="filled" label="Label" />
</Story>

<Story name="filled with label and placeholder" parameters={disableAddons}>
  <TextField variant="filled" label="Label" placeholder="Placeholder" />
</Story>

<Story name="filled with helperText" parameters={disableAddons}>
  <TextField variant="filled" helperText="please send help" />
</Story>

<Story name="filled with label and icons" parameters={disableAddons}>
  <TextField variant="filled" label="Label">
    <Icon slot="leadingIcon" path={mdiCalendar} />
    <Icon slot="trailingIcon" path={mdiCloseCircleOutline} />
  </TextField>
</Story>

<Story name="filled dense" parameters={disableAddons}>
  <TextField variant="filled" dense />
</Story>

<Story name="filled dense with label" parameters={disableAddons}>
  <TextField variant="filled" dense label="Label" />
</Story>

<Story
  name="filled dense with label and placeholder"
  parameters={disableAddons}
>
  <TextField variant="filled" dense label="Label" placeholder="Placeholder" />
</Story>

<Story name="filled dense with helperText" parameters={disableAddons}>
  <TextField variant="filled" dense helperText="please send help" />
</Story>

<Story name="filled dense with label and icons" parameters={disableAddons}>
  <TextField variant="filled" dense label="Label">
    <Icon slot="leadingIcon" path={mdiCalendar} />
    <Icon slot="trailingIcon" path={mdiCloseCircleOutline} />
  </TextField>
</Story>

<Story name="filled error" parameters={disableAddons}>
  <TextField variant="filled" error />
</Story>

<Story name="filled error with helperText" parameters={disableAddons}>
  <TextField variant="filled" error helperText="there's an error" />
</Story>

<Story name="outlined" parameters={disableAddons}>
  <TextField variant="outlined" />
</Story>

<Story name="outlined with label" parameters={disableAddons}>
  <TextField variant="outlined" label="Label" />
</Story>

<Story name="outlined with label and placeholder" parameters={disableAddons}>
  <TextField variant="outlined" label="Label" placeholder="Placeholder" />
</Story>

<Story name="outlined with helperText" parameters={disableAddons}>
  <TextField variant="outlined" helperText="please send help" />
</Story>

<Story name="outlined with label and icons" parameters={disableAddons}>
  <TextField variant="outlined" label="Label">
    <Icon slot="leadingIcon" path={mdiCalendar} />
    <Icon slot="trailingIcon" path={mdiCloseCircleOutline} />
  </TextField>
</Story>

<Story name="outlined dense" parameters={disableAddons}>
  <TextField variant="outlined" dense />
</Story>

<Story name="outlined dense with label" parameters={disableAddons}>
  <TextField variant="outlined" dense label="Label" />
</Story>

<Story
  name="outlined dense with label and placeholder"
  parameters={disableAddons}
>
  <TextField variant="outlined" dense label="Label" placeholder="Placeholder" />
</Story>

<Story name="outlined dense with helperText" parameters={disableAddons}>
  <TextField variant="outlined" dense helperText="please send help" />
</Story>

<Story name="outlined dense with label and icons" parameters={disableAddons}>
  <TextField variant="outlined" dense label="Label">
    <Icon slot="leadingIcon" path={mdiCalendar} />
    <Icon slot="trailingIcon" path={mdiCloseCircleOutline} />
  </TextField>
</Story>

<Story name="outlined error" parameters={disableAddons}>
  <TextField variant="outlined" error />
</Story>

<Story name="outlined error with helperText" parameters={disableAddons}>
  <TextField variant="outlined" error helperText="there's an error" />
</Story>
