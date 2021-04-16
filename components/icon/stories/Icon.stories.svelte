<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { mdiHome, mdiCar, mdiBus, mdiAirplane } from '@mdi/js';
  import { Icon } from '@material-svelte/icon';

  const meta = {
    title: 'Components/Icon',
    component: Icon,
    parameters: {
      options: { showPanel: true },
    },
    // NOTE inferring of args from types is not supported yet thus we have to be more verbose
    argTypes: {
      path: {
        table: {
          type: { summary: 'string' },
        },
        control: {
          type: 'select',
          options: { mdiHome, mdiCar, mdiBus, mdiAirplane },
        },
      },
      label: {
        table: {
          type: { summary: 'string | null' },
        },
        control: 'text',
      },
      fillColor: {
        control: 'color',
      },
    },
  };

  const disableAddons = {
    options: { showPanel: false },
    controls: { disabled: true },
    actions: { disabled: true },
  };
</script>

<Meta {...meta} />

<Story name="Playground" let:args args={{ path: mdiHome }}>
  <Icon {...args} />
</Story>

<Story name="Fixed size" parameters={disableAddons}>
  <Icon width="24px" height="24px" path={mdiHome} />
</Story>

<Story name="Auto size" parameters={disableAddons}>
  <div style="background-color: #ccc; height: 50px;width: 50px;">
    <Icon path={mdiHome} />
  </div>
</Story>

<Story name="Static Color" parameters={disableAddons}>
  <Icon fillColor="#f00" path={mdiHome} width="50px" height="50px" />
</Story>

<Story name="Inherit Color" parameters={disableAddons}>
  <div style="background-color: #ccc; color: #f00;">
    <Icon path={mdiHome} width="50px" height="50px" />
    <span>text color</span>
  </div>
  <div style="background-color: #ddd; color: #00f;">
    <Icon path={mdiHome} width="50px" height="50px" />
    <span>text color</span>
  </div>
</Story>
