<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { mdiHome, mdiCar, mdiBus, mdiAirplane } from '@mdi/js';
  import { SvgIcon } from '@material-svelte/icon';

  const meta = {
    title: 'Components/SvgIcon',
    component: SvgIcon,
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
  <SvgIcon {...args} />
</Story>

<Story name="Fixed size" parameters={disableAddons}>
  <SvgIcon path={mdiHome} width="24px" height="24px" />
</Story>

<Story name="Auto size" parameters={disableAddons}>
  <div style="height: 50px; width: 50px;">
    <SvgIcon path={mdiHome} />
  </div>
</Story>

<Story name="Static Color" parameters={disableAddons}>
  <SvgIcon fillColor="#f00" path={mdiHome} width="50px" height="50px" />
</Story>

<Story name="Inherit Color" parameters={disableAddons}>
  <div style="background-color: #ccc; color: #f00;">
    <SvgIcon path={mdiHome} width="50px" height="50px" />
    <span>text color</span>
  </div>
  <div style="background-color: #ddd; color: #00f;">
    <SvgIcon path={mdiHome} width="50px" height="50px" />
    <span>text color</span>
  </div>
</Story>
