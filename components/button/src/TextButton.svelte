<script lang="ts">
  import Button from './Button.svelte';
  // variable to bind the button DOM-node to
  export let buttonElement: HTMLElement | null = null;
  // color of button to render
  export let color = '#6200ee';
  // whether the button is disabled
  export let disabled = false;
  // whether to render the button full-width
  export let fullWidth = false;

  const props = {
    variant: 'text',
    buttonElement,
    backgroundColor: color,
    disabled,
    fullWidth,
  };
</script>

{#if $$slots.default && $$slots.icon}
  <svelte:component this={Button} {...props} on:click>
    <slot slot="icon" name="icon" />
    <slot />
  </svelte:component>
{:else if $$slots.default}
  <svelte:component this={Button} {...props} on:click>
    <slot />
  </svelte:component>
{:else if $$slots.icon}
  <svelte:component this={Button} {...props} on:click>
    <slot slot="icon" name="icon" />
  </svelte:component>
{/if}
