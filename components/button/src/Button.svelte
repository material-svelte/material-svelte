<script lang="ts">
  import { ripple } from '@material-svelte/svelte-actions';
  import { Typography } from '@material-svelte/typography';

  type ButtonVariant = 'contained' | 'outlined' | 'text' | 'fab' | 'menu';
  // variable to bind the button DOM-node to
  export let buttonElement: HTMLElement | null = null;
  // variant of button to render
  export let variant: ButtonVariant = 'contained';
  // whether the button is disabled
  export let disabled = false;
  // color of button to render
  export let color = '#6200ee';
  // disable elevation (applies to variants: `contained`, `fab`)
  export let unelevated = false;
  // whether to render the button full-width (applies to all buttons that contain content in default-slot)
  export let fullWidth = false;
  // whether to render a `fab`-variant button as `mini`
  export let mini = false;
</script>

<button
  bind:this={buttonElement}
  on:click
  use:ripple
  class:contained={variant === 'contained'}
  class:outlined={variant === 'outlined'}
  class:text={variant === 'text'}
  class:fab={variant === 'fab'}
  class:menu={variant === 'menu'}
  class:mini
  class:disabled
  class:unelevated
  class:full-width={fullWidth}
  class:has-content={$$slots.default}
  class:has-icon={$$slots.icon}
  style="--button-color: {color};"
>
  {#if $$slots.icon}
    <span class="icon">
      <slot name="icon" />
    </span>
  {/if}
  {#if $$slots.default}
    <span class="content">
      <Typography variant="button"><slot /></Typography>
    </span>
  {/if}
</button>

<style lang="postcss">
  button {
    /* variables that can be configured using preprocessor */
    --background-color-disabled: rgba(#000, 0.26);
    --border-radius: 4px;
    --color-disabled: rgba(#000, 0.26);
    --transition-duration: 280ms;
    --transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    align-items: center;
    border-radius: var(--border-radius);
    border-style: none;
    cursor: pointer;
    display: inline-flex;
    height: 36px;
    justify-content: center;
    outline: 0;
    position: relative;
    text-transform: uppercase;
    transition-duration: var(--transition-duration);
    transition-property: box-shadow;
    transition-timing-function: var(--transition-timing-function);
    white-space: nowrap;

    &::after {
      background-color: currentColor;
      border-radius: inherit;
      color: inherit;
      content: '';
      height: 100%;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    &:not(.disabled) {
      &:hover::after {
        /* TODO this value is different if background is white */

        /* see: https://material.io/design/interaction/states.html#anatomy -> Overview opacity values */
        opacity: 8%;
      }

      &:focus-visible::after {
        opacity: 24%;
      }

      &:focus-visible:hover::after {
        opacity: 24% + 8%;
      }
    }

    &.disabled {
      color: var(--color-disabled);
      pointer-events: none;
    }

    &.full-width {
      width: 100%;
    }

    &.has-content {
      min-width: 64px;
    }
  }

  button.has-icon {
    &.has-content {
      padding-left: 12px !important;
    }

    > .icon {
      height: 18px;
      width: 18px;
    }

    > .content {
      margin-left: 8px;
    }
  }

  button.contained {
    &.has-content {
      padding: 0 16px;
    }
  }

  button.fab {
    > .icon {
      height: 24px;
      width: 24px;
    }

    &.has-content {
      border-radius: 24px;
      height: 48px;
      padding: 0 20px;
    }

    &.has-content.has-icon > .content {
      margin-left: 12px;
    }

    &:not(.has-content) {
      border-radius: 50%;

      &.mini {
        height: 40px;
        padding: 0 8px;
        width: 40px;
      }

      &:not(.mini) {
        height: 56px;
        padding: 0 16px;
        width: 56px;
      }
    }
  }

  button.menu {
    background-color: transparent;
    border-radius: 50%;
    color: #fff;
    height: 48px;
    padding: 12px;
    width: 48px;

    > .icon {
      color: var(--button-color);
      filter: invert(1) grayscale(1) contrast(20);
      height: 24px;
      width: 24px;
    }
  }

  button.contained,
  button.fab {
    &:not(.disabled) {
      background-color: var(--button-color);
      color: #fff;

      &:not(.unelevated) {
        @mixin elevation 4;
      }

      &:not(.unelevated):active {
        @mixin elevation 8;
      }

      > .content {
        background-clip: text;
        background-color: inherit;
        color: transparent;
        filter: invert(1) grayscale(1) contrast(20);
      }

      > .icon {
        color: var(--button-color);
        filter: invert(1) grayscale(1) contrast(20);
      }
    }

    &.disabled {
      background-color: var(--background-color-disabled);
    }
  }

  button.outlined {
    border: 1px solid currentColor;

    &.has-content {
      padding: 0 16px;
    }
  }

  button.text {
    border: unset;

    &.has-content {
      padding: 0 8px;
    }
  }

  button.outlined,
  button.text {
    background-color: transparent;

    &:not(.disabled) {
      color: var(--button-color);
    }
  }

  button.contained,
  button.outlined,
  button.text {
    &:not(.has-content).has-icon {
      padding: 0 9px;
    }
  }
</style>
