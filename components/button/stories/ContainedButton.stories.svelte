<script>
  import { action } from '@storybook/addon-actions';
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { ContainedButton } from '@material-svelte/button';
  import { Icon } from '@material-svelte/icon';
  import { mdiHome } from '@mdi/js';

  const meta = {
    title: 'Components/ContainedButton',
    component: ContainedButton,
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
  <ContainedButton {...args}>button</ContainedButton>
</Story>

<Story name="Text only" parameters={disableAddons}>
  <ContainedButton>button</ContainedButton>
</Story>

<Story name="Text and Icon" parameters={disableAddons}>
  <ContainedButton>
    <Icon slot="icon" path={mdiHome} />
    button
  </ContainedButton>
</Story>

<Story name="Icon only" parameters={disableAddons}>
  <ContainedButton>
    <Icon slot="icon" path={mdiHome} />
  </ContainedButton>
</Story>

<Story name="on:click" parameters={{ controls: { disabled: true } }}>
  <ContainedButton on:click={action('clicked')}>click me</ContainedButton>
</Story>
