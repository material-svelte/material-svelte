<script lang="ts">
  import Button from './Button.svelte';

  /** variable to bind button-element to */
  export let buttonElement: HTMLButtonElement | null = null;
  /** variable to bind a-element to */
  export let anchorElement: HTMLAnchorElement | null = null;
  /** The buttons color */
  export let color = '#6200ee';
  /** whether the button is disabled */
  export let disabled = false;
  /** whether the button should be full-width */
  export let fullWidth = false;
  /** render the list-item as <a href> if specified */
  export let href: string | null = null;

  const props = {
    variant: 'outlined',
    buttonElement,
    anchorElement,
    backgroundColor: color,
    disabled,
    fullWidth,
    href,
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
