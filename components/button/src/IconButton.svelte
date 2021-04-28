<script lang="ts">
  import Button from './Button.svelte';
  import { Icon } from '@material-svelte/icon';

  /** variable to bind button-element to */
  export let buttonElement: HTMLButtonElement | null = null;
  /** whether the button is disabled */
  export let disabled = false;
  /** svg-path of icon */
  export let path: string;
  /** color of icon */
  export let fillColor = 'currentColor';

  const props = { variant: 'icon', round: true, buttonElement, disabled };
</script>

<svelte:component this={Button} {...props} on:click>
  <Icon slot="icon" {path} {fillColor} />
</svelte:component>
