<script>
  import { action } from '@storybook/addon-actions';
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Checkbox } from '@material-svelte/checkbox';
  import { mdiStar, mdiStarOutline, mdiHeart, mdiHeartOutline } from '@mdi/js';

  const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
      options: { showPanel: true },
    },
    argTypes: {
      checked: {
        table: {
          type: { summary: 'boolean | null' },
          defaultValue: { summary: 'null' },
        },
        control: {
          type: 'select',
          options: [true, false, null],
        },
      },
      value: {
        table: {
          type: { summary: 'string | null' },
          defaultValue: { summary: 'null' },
        },
        control: {
          type: 'text',
        },
      },
      id: {
        table: {
          type: { summary: 'string | null' },
          defaultValue: { summary: 'null' },
        },
        control: {
          type: 'text',
        },
      },
      checkedIcon: {
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: '{mdiCheckboxMarked}' },
        },
        control: {
          type: 'text',
        },
      },
      uncheckedIcon: {
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: '{mdiCheckboxBlankOutline}' },
        },
        control: {
          type: 'text',
        },
      },
      indeterminateIcon: {
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: '{mdiMinusBox}' },
        },
        control: {
          type: 'text',
        },
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

<Story name="Playground" let:args>
  <Checkbox {...args} />
</Story>

<Story name="All" parameters={disableAddons}>
  <Checkbox />
  <Checkbox disabled />
  <Checkbox checked />
  <Checkbox checked disabled />
  <Checkbox indeterminate />
  <Checkbox indeterminate disabled />
</Story>

<Story name="Custom color" parameters={disableAddons}>
  <Checkbox uncheckedColor="#f00" />
  <Checkbox uncheckedColor="#f00" disabled />
  <Checkbox checkedColor="#0f0" checked />
  <Checkbox checkedColor="#0f0" checked disabled />
  <Checkbox indeterminateColor="#ff0" indeterminate />
  <Checkbox indeterminateColor="#ff0" indeterminate disabled />
</Story>

<Story name="Custom icons" parameters={disableAddons}>
  <Checkbox checkedIcon={mdiStar} uncheckedIcon={mdiStarOutline} />
  <Checkbox checkedIcon={mdiHeart} uncheckedIcon={mdiHeartOutline} />
</Story>

<Story name="on:change" parameters={{ controls: { disabled: true } }}>
  <Checkbox on:change={action('changed')} />
</Story>
