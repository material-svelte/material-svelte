<script>
  import { action } from '@storybook/addon-actions';
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Button } from '@material-svelte/button';
  import { Icon } from '@material-svelte/icon';
  import { mdiHome } from '@mdi/js';

  const meta = {
    title: 'Components/Button',
    component: Button,
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
      color: { control: 'color' },
      buttonElement: { control: null },
    },
  };
</script>

<Meta {...meta} />

<Story name="All" let:args>
  <div style="display: flex; margin: 16px 0;">
    <Button {...args} variant="contained">Click Me</Button>
    <Button {...args} variant="outlined">Click Me</Button>
    <Button {...args} variant="text">Click Me</Button>
  </div>
  <div style="display: flex; margin: 16px 0;">
    <Button {...args} variant="contained">
      <Icon slot="icon" path={mdiHome} />
    </Button>
    <Button {...args} variant="outlined">
      <Icon slot="icon" path={mdiHome} />
    </Button>
    <Button {...args} variant="text">
      <Icon slot="icon" path={mdiHome} />
    </Button>
  </div>
  <div style="display: flex; margin: 16px 0;">
    <Button {...args} variant="contained">
      <Icon slot="icon" path={mdiHome} />
      Click Me
    </Button>
    <Button {...args} variant="outlined">
      <Icon slot="icon" path={mdiHome} />
      Click Me
    </Button>
    <Button {...args} variant="text">
      <Icon slot="icon" path={mdiHome} />
      Click Me
    </Button>
  </div>
  <div style="display: flex; margin: 16px 0;">
    <Button {...args} variant="fab" />
    <Button {...args} variant="fab" mini />
    <Button {...args} variant="fab">Click Me</Button>
  </div>
  <div style="display: flex; margin: 16px 0;">
    <Button {...args} variant="fab">
      <Icon slot="icon" path={mdiHome} />
    </Button>
    <Button {...args} variant="fab" mini>
      <Icon slot="icon" path={mdiHome} />
    </Button>
    <Button {...args} variant="fab">
      <Icon slot="icon" path={mdiHome} />
      Click Me
    </Button>
  </div>
</Story>

<Story name="Contained" let:args>
  <Button {...args}>Click Me</Button>
</Story>

<Story name="Contained with Icon" let:args>
  <Button {...args}>
    <Icon slot="icon" path={mdiHome} />
    Click Me
  </Button>
</Story>

<Story name="Outlined" let:args>
  <Button {...args} variant="outlined">Click Me</Button>
</Story>

<Story name="Outlined with Icon" let:args>
  <Button {...args} variant="outlined">
    <Icon slot="icon" path={mdiHome} />
    Click Me
  </Button>
</Story>

<Story name="Text" let:args>
  <Button {...args} variant="text">Click Me</Button>
</Story>

<Story name="Text with Icon" let:args>
  <Button {...args} variant="text">
    <Icon slot="icon" path={mdiHome} />
    Click Me
  </Button>
</Story>

<Story name="Fab" let:args>
  <Button {...args} variant="fab">
    <Icon slot="icon" path={mdiHome} />
  </Button>
</Story>

<Story name="Fab - mini" let:args>
  <Button {...args} variant="fab" mini>
    <Icon slot="icon" path={mdiHome} />
  </Button>
</Story>

<Story name="Fab - extended" let:args>
  <Button {...args} variant="fab">
    <Icon slot="icon" path={mdiHome} />
    Click Me
  </Button>
</Story>

<Story name="Icon only" let:args>
  <div style="display: flex">
    <Button {...args} variant="contained">
      <Icon slot="icon" path={mdiHome} />
    </Button>
    <Button {...args} variant="outlined">
      <Icon slot="icon" path={mdiHome} />
    </Button>
    <Button {...args} variant="text">
      <Icon slot="icon" path={mdiHome} />
    </Button>
  </div>
</Story>

<Story name="Full width" let:args>
  <Button {...args} variant="contained" fullWidth>Click Me</Button>
  <br />
  <Button {...args} variant="outlined" fullWidth>Click Me</Button>
  <br />
  <Button {...args} variant="text" fullWidth>Click Me</Button>
</Story>

<Story name="Full width with Icon" let:args>
  <Button {...args} variant="contained" fullWidth>
    <Icon slot="icon" path={mdiHome} />
    Click Me
  </Button>
  <br />
  <Button {...args} variant="outlined" fullWidth>
    <Icon slot="icon" path={mdiHome} />
    Click Me
  </Button>
  <br />
  <Button {...args} variant="text" fullWidth>
    <Icon slot="icon" path={mdiHome} />
    Click Me
  </Button>
</Story>

<Story name="on:click" let:args>
  <Button {...args} on:click={action('clicked')}>Click Me</Button>
</Story>
