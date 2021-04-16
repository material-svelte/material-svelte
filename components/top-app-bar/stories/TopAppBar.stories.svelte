<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Button } from '@material-svelte/button';
  import { Icon } from '@material-svelte/icon';
  import { TopAppBar } from '@material-svelte/top-app-bar';
  import { Typography } from '@material-svelte/typography';
  import { mdiMenu, mdiShareVariant, mdiMagnify } from '@mdi/js';

  const meta = {
    title: 'Components/TopAppBar',
    component: TopAppBar,
    parameters: {
      layout: 'fullscreen',
    },
    argTypes: {
      color: { control: 'color' },
    },
  };
</script>

<Meta {...meta} />

<Story name="Example" let:args>
  <TopAppBar {...args}>
    <Button slot="icon" variant="menu" color={args.color}>
      <Icon slot="icon" path={mdiMenu} />
    </Button>
    <Typography slot="title" variant="h6">Page title</Typography>
    <span slot="actions">
      <Button slot="icon" variant="menu" color={args.color}>
        <Icon slot="icon" path={mdiShareVariant} />
      </Button>
      <Button slot="icon" variant="menu" color={args.color}>
        <Icon slot="icon" path={mdiMagnify} />
      </Button>
    </span>
  </TopAppBar>
</Story>
