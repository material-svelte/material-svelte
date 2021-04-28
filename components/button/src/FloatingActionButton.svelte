<script lang="ts">
  import Button from './Button.svelte';

  /** variable to bind button-element to */
  export let buttonElement: HTMLButtonElement | null = null;
  /** The buttons font-color */
  export let fontColor = '#fff';
  /** The buttons background-color */
  export let backgroundColor = '#6200ee';
  /** whether the button is disabled */
  export let disabled = false;
  /** whether the buttons elevation is disabled */
  export let unelevated = false;
  /** whether a button is mini */
  export let mini = false;

  const props = {
    variant: 'fab',
    buttonElement,
    fontColor,
    backgroundColor,
    disabled,
    unelevated,
    mini,
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
