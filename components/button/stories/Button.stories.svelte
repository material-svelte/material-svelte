<script>
  import { action } from '@storybook/addon-actions';
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Button } from '@material-svelte/button';
  import { Icon } from '@material-svelte/icon';
  import { mdiHome } from '@mdi/js';

  const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
      options: { showPanel: true },
    },
    // NOTE inferring of args from types is not supported yet thus we have to be more verbose
    argTypes: {
      variant: {
        defaultValue: 'contained',
        table: {
          type: { summary: 'contained | outlined | text | fab' },
          defaultValue: { summary: 'contained' },
        },
        control: {
          type: 'select',
          options: ['contained', 'outlined', 'text', 'fab'],
        },
      },
      fontColor: { control: 'color' },
      backgroundColor: { control: 'color' },
      buttonElement: { control: null },
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
  <Button {...args}>button</Button>
</Story>

<Story name="All" parameters={disableAddons}>
  <div style="display: flex; margin: 16px 0;">
    <Button variant="contained">button</Button>
    <Button variant="outlined">button</Button>
    <Button variant="text">button</Button>
  </div>
  <div style="display: flex; margin: 16px 0;">
    <Button variant="contained">
      <Icon slot="icon" path={mdiHome} />
    </Button>
    <Button variant="outlined">
      <Icon slot="icon" path={mdiHome} />
    </Button>
    <Button variant="text">
      <Icon slot="icon" path={mdiHome} />
    </Button>
  </div>
  <div style="display: flex; margin: 16px 0;">
    <Button variant="contained">
      <Icon slot="icon" path={mdiHome} />
      button
    </Button>
    <Button variant="outlined">
      <Icon slot="icon" path={mdiHome} />
      button
    </Button>
    <Button variant="text">
      <Icon slot="icon" path={mdiHome} />
      button
    </Button>
  </div>
  <div style="display: flex; margin: 16px 0;">
    <Button variant="fab" />
    <Button variant="fab" mini />
    <Button variant="fab">button</Button>
  </div>
  <div style="display: flex; margin: 16px 0;">
    <Button variant="fab">
      <Icon slot="icon" path={mdiHome} />
    </Button>
    <Button variant="fab" mini>
      <Icon slot="icon" path={mdiHome} />
    </Button>
    <Button variant="fab">
      <Icon slot="icon" path={mdiHome} />
      button
    </Button>
  </div>
  <Button variant="icon">
    <Icon slot="icon" path={mdiHome} />
  </Button>
</Story>

<Story name="Contained" parameters={disableAddons}>
  <Button>button</Button>
</Story>

<Story name="Contained with Icon" parameters={disableAddons}>
  <Button>
    <Icon slot="icon" path={mdiHome} />
    button
  </Button>
</Story>

<Story name="Outlined" parameters={disableAddons}>
  <Button variant="outlined">button</Button>
</Story>

<Story name="Outlined with Icon" parameters={disableAddons}>
  <Button variant="outlined">
    <Icon slot="icon" path={mdiHome} />
    button
  </Button>
</Story>

<Story name="Text" parameters={disableAddons}>
  <Button variant="text">button</Button>
</Story>

<Story name="Text with Icon" parameters={disableAddons}>
  <Button variant="text">
    <Icon slot="icon" path={mdiHome} />
    button
  </Button>
</Story>

<Story name="Fab" parameters={disableAddons}>
  <Button variant="fab">
    <Icon slot="icon" path={mdiHome} />
  </Button>
</Story>

<Story name="Fab - mini" parameters={disableAddons}>
  <Button variant="fab" mini>
    <Icon slot="icon" path={mdiHome} />
  </Button>
</Story>

<Story name="Fab - extended" parameters={disableAddons}>
  <Button variant="fab">
    <Icon slot="icon" path={mdiHome} />
    button
  </Button>
</Story>

<Story name="Icon-variant" parameters={disableAddons}>
  <Button variant="icon" color="#fff">
    <Icon slot="icon" path={mdiHome} />
  </Button>
</Story>

<Story name="Icon only" parameters={disableAddons}>
  <div style="display: flex">
    <Button variant="contained">
      <Icon slot="icon" path={mdiHome} />
    </Button>
    <Button variant="outlined">
      <Icon slot="icon" path={mdiHome} />
    </Button>
    <Button variant="text">
      <Icon slot="icon" path={mdiHome} />
    </Button>
  </div>
</Story>

<Story name="Full width" parameters={disableAddons}>
  <Button variant="contained" fullWidth>button</Button>
  <br />
  <Button variant="outlined" fullWidth>button</Button>
  <br />
  <Button variant="text" fullWidth>button</Button>
</Story>

<Story name="Full width with Icon" parameters={disableAddons}>
  <Button variant="contained" fullWidth>
    <Icon slot="icon" path={mdiHome} />
    button
  </Button>
  <br />
  <Button variant="outlined" fullWidth>
    <Icon slot="icon" path={mdiHome} />
    button
  </Button>
  <br />
  <Button variant="text" fullWidth>
    <Icon slot="icon" path={mdiHome} />
    button
  </Button>
</Story>

<Story name="on:click" parameters={{ controls: { disabled: true } }}>
  <Button on:click={action('clicked')}>click me</Button>
</Story>
