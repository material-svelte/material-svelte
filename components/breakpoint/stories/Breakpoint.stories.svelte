<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Breakpoint } from '@material-svelte/breakpoint';

  const meta = {
    title: 'Components/Breakpoint',
    component: Breakpoint,
    parameters: {
      options: { showPanel: true },
      viewport: {
        defaultViewport: 'small',
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

<Story name="at" parameters={disableAddons}>
  <Breakpoint at="small" let:matches>
    {#if matches}
      small matches
    {/if}
  </Breakpoint>
</Story>

<Story name="from" parameters={disableAddons}>
  <Breakpoint from="small" let:matches>
    {#if matches}
      from small matches
    {/if}
  </Breakpoint>
</Story>

<Story name="to" parameters={disableAddons}>
  <Breakpoint to="small" let:matches>
    {#if matches}
      to small matches
    {/if}
  </Breakpoint>
</Story>

<Story name="between" parameters={disableAddons}>
  <Breakpoint from="small" to="medium" let:matches>
    {#if matches}
      from small to medium matches
    {/if}
  </Breakpoint>
</Story>
