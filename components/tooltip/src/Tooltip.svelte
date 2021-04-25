<!-- required for svelte-action to access props -->
<svelte:options accessors={true} />

<script lang="ts">
  import { Typography } from '@material-svelte/typography';

  export let text: string;
  export let arrow = false;

  // element passed to popper
  export let popperElement: HTMLElement;
  // modifiers passed to popper
  export const popperModifiers = !arrow
    ? []
    : [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ];
  // prevent arrow-css-rules from being marked unused
  let placement: string;
</script>

<div
  bind:this={popperElement}
  class="tooltip"
  data-popper-placement={placement}
>
  <Typography variant="caption">{text}</Typography>
  {#if arrow}
    <div class="arrow" data-popper-arrow />
  {/if}
</div>

<style>
  .tooltip {
    background: rgba(97, 97, 97, 0.9);
    border-radius: 4px;
    color: #fff;
    display: flex;
    height: 24px;
    padding: 4px 8px;
  }

  .arrow,
  .arrow::before {
    background: inherit;
    height: 8px;
    position: absolute;
    width: 8px;
  }

  .arrow {
    visibility: hidden;
  }

  .arrow::before {
    content: '';
    transform: rotate(45deg);
    visibility: visible;
  }

  .tooltip[data-popper-placement^='top'] .arrow {
    bottom: -4px;
  }

  .tooltip[data-popper-placement^='bottom'] .arrow {
    top: -4px;
  }

  .tooltip[data-popper-placement^='left'] > .arrow {
    right: -4px;
  }

  .tooltip[data-popper-placement^='right'] > .arrow {
    left: -4px;
  }
</style>
