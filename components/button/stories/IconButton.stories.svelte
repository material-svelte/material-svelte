<script>
  import { action } from '@storybook/addon-actions';
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { IconButton } from '@material-svelte/button';
  import { mdiHome } from '@mdi/js';

  const meta = {
    title: 'Components/IconButton',
    component: IconButton,
    parameters: {
      options: { showPanel: true },
    },
    // NOTE inferring of args from types is not supported yet thus we have to be more verbose
    argTypes: {
      fontColor: { control: 'color' },
      backgroundColor: { control: 'color' },
      buttonElement: { control: null },
    },
  };
</script>

<Meta {...meta} />

<Story name="Playground" let:args>
  <IconButton {...args} path={mdiHome} />
</Story>

<Story name="on:click" parameters={{ controls: { disabled: true } }}>
  <IconButton path={mdiHome} on:click={action('clicked')} />
</Story>
