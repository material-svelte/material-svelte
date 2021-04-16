<script>
  import { action } from '@storybook/addon-actions';
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { OutlinedButton } from '@material-svelte/button';
  import { Icon } from '@material-svelte/icon';
  import { mdiHome } from '@mdi/js';

  const meta = {
    title: 'Components/OutlinedButton',
    component: OutlinedButton,
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

  const disableAddons = {
    options: { showPanel: false },
    controls: { disabled: true },
    actions: { disabled: true },
  };
</script>

<Meta {...meta} />

<Story name="Playground" let:args>
  <OutlinedButton {...args}>button</OutlinedButton>
</Story>

<Story name="Text only" parameters={disableAddons}>
  <OutlinedButton>button</OutlinedButton>
</Story>

<Story name="Text and Icon" parameters={disableAddons}>
  <OutlinedButton>
    <Icon slot="icon" path={mdiHome} />
    button
  </OutlinedButton>
</Story>

<Story name="Icon only" parameters={disableAddons}>
  <OutlinedButton>
    <Icon slot="icon" path={mdiHome} />
  </OutlinedButton>
</Story>

<Story name="on:click" parameters={{ controls: { disabled: true } }}>
  <OutlinedButton on:click={action('clicked')}>click me</OutlinedButton>
</Story>
