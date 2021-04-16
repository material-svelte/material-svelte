<script lang="ts">
  import Button from './Button.svelte';
  import { Icon } from '@material-svelte/icon';
  // variable to bind the button DOM-node to
  export let buttonElement: HTMLElement | null = null;
  // fill-color of button to render
  export let fillColor = 'currentColor';
  // whether the button is disabled
  export let disabled = false;
  // svg-path of icon
  export let path: string;

  const props = { variant: 'icon', round: true, buttonElement, disabled };
</script>

<svelte:component this={Button} {...props} on:click>
  <Icon slot="icon" {path} {fillColor} />
</svelte:component>
