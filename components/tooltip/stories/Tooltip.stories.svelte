<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { tooltip } from '@material-svelte/tooltip';
  import CustomTooltip from './CustomTooltip.svelte';

  const meta = {
    title: 'Actions/tooltip',
    parameters: {
      viewMode: 'docs',
      options: { showPanel: false },
      controls: { disabled: true },
      actions: { disabled: true },
      previewTabs: {
        canvas: { hidden: true },
      },
      happo: false,
    },
  };
</script>

<Meta {...meta} />

<Story name="simple">
  <span use:tooltip={'This is a tip!'}>need a tip?</span>
</Story>

<Story name="arrows">
  <span use:tooltip={{ text: 'This is a tip!', arrow: true }}>need a tip?</span>
</Story>

<Story name="placement">
  <span use:tooltip={{ text: 'This is a tip!', placement: 'right' }}>
    need a tip?
  </span>
</Story>

<Story name="delay">
  <span
    use:tooltip={{ text: 'This is a tip!', enterDelay: 250, leaveDelay: 500 }}
  >
    need a tip?
  </span>
</Story>

<Story name="custom component">
  <span use:tooltip={{ component: CustomTooltip, text: 'I am different!' }}>
    need something different?
  </span>
</Story>
