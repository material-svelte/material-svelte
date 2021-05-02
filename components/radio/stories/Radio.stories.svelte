<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Radio } from '@material-svelte/radio';

  const meta = {
    title: 'Components/Radio',
    component: Radio,
    parameters: {
      options: { showPanel: true },
      actions: { disabled: true },
    },
    argTypes: {
      id: {
        table: {
          type: { summary: 'string' },
        },
        control: {
          type: 'text',
        },
      },
      value: {
        table: {
          type: { summary: 'string' },
        },
        control: 'off',
      },
      group: {
        control: 'off',
      },
      checkedColor: { control: 'color' },
      uncheckedColor: { control: 'color' },
    },
  };

  const disableAddons = {
    options: { showPanel: false },
    controls: { disabled: true },
  };

  let group = '1';
</script>

<Meta {...meta} />

<Story name="Playground" let:args>
  <Radio bind:group value="1" {...args} />
  <Radio bind:group value="2" {...args} />
  <Radio bind:group value="3" {...args} />
</Story>

<Story name="example" parameters={disableAddons}>
  <Radio bind:group value="1" />
  <Radio bind:group value="2" />
  <Radio bind:group value="3" />
  <div>group: {group}</div>
</Story>

<Story name="disabled" parameters={disableAddons}>
  <Radio bind:group value="1" />
  <Radio bind:group value="2" />
  <Radio bind:group value="3" disabled />
  <div>group: {group}</div>
</Story>

<Story name="custom-colors" parameters={disableAddons}>
  <Radio bind:group value="1" checkedColor="red" />
  <Radio bind:group value="2" checkedColor="orange" />
  <Radio bind:group value="3" checkedColor="green" />
  <div>group: {group}</div>
</Story>
