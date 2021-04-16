<script>
  import { action } from '@storybook/addon-actions';
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { TextButton } from '@material-svelte/button';
  import { Icon } from '@material-svelte/icon';
  import { mdiHome } from '@mdi/js';

  const meta = {
    title: 'Components/TextButton',
    component: TextButton,
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
  <TextButton {...args}>button</TextButton>
</Story>

<Story name="Text only" parameters={disableAddons}>
  <TextButton>button</TextButton>
</Story>

<Story name="Text and Icon" parameters={disableAddons}>
  <TextButton>
    <Icon slot="icon" path={mdiHome} />
    button
  </TextButton>
</Story>

<Story name="Icon only" parameters={disableAddons}>
  <TextButton>
    <Icon slot="icon" path={mdiHome} />
  </TextButton>
</Story>

<Story name="on:click" parameters={{ controls: { disabled: true } }}>
  <TextButton on:click={action('clicked')}>click me</TextButton>
</Story>
