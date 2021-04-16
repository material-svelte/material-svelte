<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { COMPONENT_NAME } from '@material-svelte/PACKAGE_NAME';

  const meta = {
    title: 'Components/COMPONENT_NAME',
    component: COMPONENT_NAME,
    parameters: {
      options: { showPanel: true },
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
  <COMPONENT_NAME {...args} />
</Story>

<Story name="example" parameters={disableAddons}>
  <COMPONENT_NAME />
</Story>
