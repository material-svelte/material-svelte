<script lang="ts">
  import Button from './Button.svelte';
  import { Icon } from '@material-svelte/icon';

  /** variable to bind button-element to */
  export let buttonElement: HTMLButtonElement | null = null;
  /** variable to bind a-element to */
  export let anchorElement: HTMLAnchorElement | null = null;
  /** whether the button is disabled */
  export let disabled = false;
  /** svg-path of icon */
  export let path: string;
  /** color of icon */
  export let fillColor = 'currentColor';
  /** render the list-item as <a href> if specified */
  export let href: string | null = null;

  const props = {
    variant: 'icon',
    round: true,
    buttonElement,
    anchorElement,
    disabled,
    href,
  };
</script>

<svelte:component this={Button} {...props} on:click>
  <Icon slot="icon" {path} {fillColor} />
</svelte:component>
