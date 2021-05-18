<script context="module" lang="ts">
  export type ButtonVariant =
    | 'contained'
    | 'outlined'
    | 'text'
    | 'fab'
    | 'icon';
</script>

<script lang="ts">
  import { ripple } from '@material-svelte/svelte-actions';
  import { Typography } from '@material-svelte/typography';

  /** variable to bind button-element to */
  export let buttonElement: HTMLButtonElement | null = null;
  /** variable to bind a-element to */
  export let anchorElement: HTMLAnchorElement | null = null;
  /** The button variant */
  export let variant: ButtonVariant = 'contained';
  /** The buttons font-color */
  export let fontColor = '#fff';
  /** The buttons background-color */
  export let backgroundColor = '#6200ee';
  /** whether the button is disabled */
  export let disabled = false;
  /** whether the buttons elevation is disabled */
  export let unelevated = false;
  /** whether the button should be full-width */
  export let fullWidth = false;
  /** whether a fab-button is mini */
  export let mini = false;
  /** whether the button is round */
  export let round = false;
  /** render the list-item as <a href> if specified */
  export let href: string | null = null;
</script>

{#if href}
  <a
    bind:this={anchorElement}
    on:click
    use:ripple
    class="button"
    class:contained={variant === 'contained'}
    class:outlined={variant === 'outlined'}
    class:text={variant === 'text'}
    class:fab={variant === 'fab'}
    class:icon={variant === 'icon'}
    class:mini
    class:round
    class:disabled
    class:unelevated
    class:full-width={fullWidth}
    class:has-content={$$slots.default}
    class:has-icon={$$slots.icon}
    style="--font-color: {fontColor}; --background-color: {backgroundColor};"
    {href}
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
  </a>
{:else}
  <button
    bind:this={buttonElement}
    on:click
    use:ripple
    class="button"
    class:contained={variant === 'contained'}
    class:outlined={variant === 'outlined'}
    class:text={variant === 'text'}
    class:fab={variant === 'fab'}
    class:icon={variant === 'icon'}
    class:mini
    class:round
    class:disabled
    class:unelevated
    class:full-width={fullWidth}
    class:has-content={$$slots.default}
    class:has-icon={$$slots.icon}
    style="--font-color: {fontColor}; --background-color: {backgroundColor};"
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
{/if}

<style lang="postcss">
  .button {
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
      transition-duration: var(--transition-duration);
      transition-property: opacity;
      transition-timing-function: var(--transition-timing-function);
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

    &.round {
      border-radius: 50%;
    }
  }

  .button:not(.icon).has-icon {
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

  .button.contained {
    &.has-content {
      padding: 0 16px;
    }
  }

  .button.fab {
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

  .button.icon {
    box-sizing: content-box;
    position: relative;

    > .icon {
      height: inherit;
      width: inherit;
    }

    &:not(.autosize) {
      height: 24px;
      margin: -12px;
      padding: 12px;
      width: 24px;
    }

    &.autosize {
      height: inherit;
      margin: -50%;
      padding: 50%;
      width: inherit;
    }
  }

  .button.contained,
  .button.fab {
    &:not(.disabled) {
      background-color: var(--background-color);
      color: var(--font-color);

      &:not(.unelevated) {
        @mixin elevation 4;
      }

      &:not(.unelevated):active {
        @mixin elevation 8;
      }
    }

    &.disabled {
      background-color: var(--background-color-disabled);
    }
  }

  .button.outlined {
    border: 1px solid currentColor;

    &.has-content {
      padding: 0 16px;
    }
  }

  .button.text {
    border: unset;

    &.has-content {
      padding: 0 8px;
    }
  }

  .button.outlined,
  .button.text {
    background-color: transparent;

    &:not(.disabled) {
      color: var(--background-color);
    }
  }

  .button.contained,
  .button.outlined,
  .button.text {
    height: 36px;

    &:not(.has-content).has-icon {
      padding: 0 9px;
    }
  }

  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
  }
</style>
