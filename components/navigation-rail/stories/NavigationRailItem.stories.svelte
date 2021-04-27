<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import {
    NavigationRail,
    NavigationRailItem,
  } from '@material-svelte/navigation-rail';
  import { mdiHome, mdiCar, mdiBus, mdiAirplane } from '@mdi/js';

  const meta = {
    title: 'Components/NavigationRailItem',
    component: NavigationRailItem,
    parameters: {
      layout: 'fullscreen',
      options: {
        showPanel: true,
        panelPosition: 'right',
      },
      actions: { disabled: true },
    },
    argTypes: {
      iconPath: {
        defaultValue: mdiHome,
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
          type: { summary: 'string | undefined' },
        },
        control: 'text',
      },
      href: {
        table: {
          type: { summary: 'string | undefined' },
        },
        control: 'text',
      },
      compact: {
        table: {
          type: { summary: 'boolean | undefined' },
        },
        control: 'boolean',
      },
      activeFontColor: {
        control: 'color',
      },
      inactiveFontColor: {
        control: 'color',
      },
    },
  };

  const disableAddons = {
    options: { showPanel: false },
    controls: { disabled: true },
  };
</script>

<Meta {...meta} />

<Story name="Playground" let:args>
  <NavigationRail>
    <NavigationRailItem iconPath={mdiHome} {...args} />
  </NavigationRail>
</Story>
