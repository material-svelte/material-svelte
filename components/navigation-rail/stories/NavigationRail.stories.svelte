<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import {
    NavigationRail,
    NavigationRailItem,
  } from '@material-svelte/navigation-rail';
  import { FloatingActionButton } from '@material-svelte/button';
  import { Icon } from '@material-svelte/icon';
  import { mdiPlus, mdiHome, mdiFolder, mdiImageMultiple } from '@mdi/js';

  const meta = {
    title: 'Components/NavigationRail',
    component: NavigationRail,
    parameters: {
      layout: 'fullscreen',
      options: {
        showPanel: true,
        panelPosition: 'right',
      },
      actions: { disabled: true },
    },
    argTypes: {
      align: {
        defaultValue: 'start',
        table: {
          type: { summary: 'start | center | end' },
          defaultValue: { summary: 'start' },
        },
        control: {
          type: 'select',
          options: ['start', 'center', 'end'],
        },
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
  <div style="height: 400px">
    <NavigationRail {...args}>
      <FloatingActionButton slot="fab">
        <Icon slot="icon" path={mdiPlus} />
      </FloatingActionButton>
      <NavigationRailItem iconPath={mdiHome} />
      <NavigationRailItem iconPath={mdiFolder} active />
      <NavigationRailItem iconPath={mdiImageMultiple} label="images" />
    </NavigationRail>
  </div>
</Story>

<Story name="compact" parameters={disableAddons}>
  <div style="height: 400px">
    <NavigationRail compact>
      <FloatingActionButton slot="fab">
        <Icon slot="icon" path={mdiPlus} />
      </FloatingActionButton>
      <NavigationRailItem iconPath={mdiHome} />
      <NavigationRailItem iconPath={mdiFolder} active />
      <NavigationRailItem iconPath={mdiImageMultiple} label="images" />
    </NavigationRail>
  </div>
</Story>

<Story name="divider" parameters={disableAddons}>
  <div style="height: 400px">
    <NavigationRail divider>
      <FloatingActionButton slot="fab">
        <Icon slot="icon" path={mdiPlus} />
      </FloatingActionButton>
      <NavigationRailItem iconPath={mdiHome} />
      <NavigationRailItem iconPath={mdiFolder} active />
      <NavigationRailItem iconPath={mdiImageMultiple} label="images" />
    </NavigationRail>
  </div>
</Story>

<Story name="align-center" parameters={disableAddons}>
  <div style="height: 400px">
    <NavigationRail align="center">
      <FloatingActionButton slot="fab">
        <Icon slot="icon" path={mdiPlus} />
      </FloatingActionButton>
      <NavigationRailItem iconPath={mdiHome} />
      <NavigationRailItem iconPath={mdiFolder} active />
      <NavigationRailItem iconPath={mdiImageMultiple} label="images" />
    </NavigationRail>
  </div>
</Story>

<Story name="align-end" parameters={disableAddons}>
  <div style="height: 400px">
    <NavigationRail align="end">
      <FloatingActionButton slot="fab">
        <Icon slot="icon" path={mdiPlus} />
      </FloatingActionButton>
      <NavigationRailItem iconPath={mdiHome} />
      <NavigationRailItem iconPath={mdiFolder} active />
      <NavigationRailItem iconPath={mdiImageMultiple} label="images" />
    </NavigationRail>
  </div>
</Story>
