<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import COMPONENT_NAME from '@material-svelte/PACKAGE_NAME';

  const meta = {
    title: 'Components/COMPONENT_NAME',
    component: COMPONENT_NAME,
  };
</script>

<Meta {...meta} />

<Story name="Example" let:args>
  <COMPONENT_NAME {...args} />
</Story>
