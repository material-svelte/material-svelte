<script lang="ts">
  import Button from './Button.svelte';
  // variable to bind the button DOM-node to
  export let buttonElement: HTMLElement | null = null;
  // font-color of button to render
  export let fontColor = '#fff';
  // background-color of button to render
  export let backgroundColor = '#6200ee';
  // whether the button is disabled
  export let disabled = false;
  // disable elevation
  export let unelevated = false;
  // whether to render the button full-width
  export let fullWidth = false;

  const props = {
    variant: 'contained',
    buttonElement,
    fontColor,
    backgroundColor,
    disabled,
    unelevated,
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
