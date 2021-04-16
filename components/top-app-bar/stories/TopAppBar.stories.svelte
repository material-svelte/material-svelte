<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { TopAppBar } from '@material-svelte/top-app-bar';
  import { Typography } from '@material-svelte/typography';
  import { IconButton } from '@material-svelte/button';
  import { mdiMenu, mdiShareVariant, mdiMagnify } from '@mdi/js';

  const meta = {
    title: 'Components/TopAppBar',
    component: TopAppBar,
    parameters: {
      layout: 'fullscreen',
      options: { showPanel: true },
      actions: { disabled: true },
    },
    argTypes: {
      fontColor: { control: 'color' },
      backgroundColor: { control: 'color' },
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
  <TopAppBar {...args}>
    <IconButton slot="icon" path={mdiMenu} />
    <Typography slot="title" variant="h6">Page title</Typography>
    <svelte:fragment slot="actions">
      <IconButton path={mdiShareVariant} />
      <IconButton path={mdiMagnify} />
    </svelte:fragment>
  </TopAppBar>
</Story>

<Story name="no icon" parameters={disableAddons}>
  <TopAppBar>
    <Typography slot="title" variant="h6">Page title</Typography>
    <svelte:fragment slot="actions">
      <IconButton path={mdiShareVariant} />
      <IconButton path={mdiMagnify} />
    </svelte:fragment>
  </TopAppBar>
</Story>

<Story name="prominent" parameters={disableAddons}>
  <TopAppBar prominent>
    <IconButton slot="icon" path={mdiMenu} />
    <Typography slot="title" variant="h6">Page title</Typography>
    <svelte:fragment slot="actions">
      <IconButton path={mdiShareVariant} />
      <IconButton path={mdiMagnify} />
    </svelte:fragment>
  </TopAppBar>
</Story>

<Story name="dense" parameters={disableAddons}>
  <TopAppBar dense>
    <IconButton slot="icon" path={mdiMenu} />
    <Typography slot="title" variant="h6">Page title</Typography>
    <svelte:fragment slot="actions">
      <IconButton path={mdiShareVariant} />
      <IconButton path={mdiMagnify} />
    </svelte:fragment>
  </TopAppBar>
</Story>

<Story name="unelevated" parameters={disableAddons}>
  <TopAppBar unelevated>
    <IconButton slot="icon" path={mdiMenu} />
    <Typography slot="title" variant="h6">Page title</Typography>
    <svelte:fragment slot="actions">
      <IconButton path={mdiShareVariant} />
      <IconButton path={mdiMagnify} />
    </svelte:fragment>
  </TopAppBar>
</Story>
