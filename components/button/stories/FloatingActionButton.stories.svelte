<script>
  import { action } from '@storybook/addon-actions';
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { FloatingActionButton } from '@material-svelte/button';
  import { Icon } from '@material-svelte/icon';
  import { mdiHome } from '@mdi/js';

  const meta = {
    title: 'Components/FloatingActionButton',
    component: FloatingActionButton,
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
  <FloatingActionButton {...args}>button</FloatingActionButton>
</Story>

<Story name="Text only" parameters={disableAddons}>
  <FloatingActionButton>button</FloatingActionButton>
</Story>

<Story name="Text and Icon" parameters={disableAddons}>
  <FloatingActionButton>
    <Icon slot="icon" path={mdiHome} />
    button
  </FloatingActionButton>
</Story>

<Story name="Icon only" parameters={disableAddons}>
  <FloatingActionButton>
    <Icon slot="icon" path={mdiHome} />
  </FloatingActionButton>
</Story>

<Story name="on:click" parameters={{ controls: { disabled: true } }}>
  <FloatingActionButton on:click={action('clicked')}>
    click me
  </FloatingActionButton>
</Story>
