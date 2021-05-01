<script lang="ts">
  import { uid } from 'uid';
  import { ripple } from '@material-svelte/svelte-actions';

  /** id of the radio. auto-generated if not specified */
  export let id: string = uid();
  /** value of the radio */
  export let value: string;
  /** group to bind the radio to */
  export let group: string;
  /** whether the radio is disabled */
  export let disabled = false;
  /** color when checked */
  export let checkedColor = 'currentColor';
  /** color when unchecked */
  export let uncheckedColor = 'currentColor';
</script>

<div
  class="radio"
  class:disabled
  style="--checked-color: {checkedColor}; --unchecked-color: {uncheckedColor}"
>
  <div class="wrap" use:ripple={{ centered: true }}>
    <input type="radio" bind:group on:change {disabled} {value} {id} />
    <svg class="frame" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="9" stroke-width="2px" />
    </svg>
    <svg class="dot" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="5" />
    </svg>
  </div>
  {#if $$slots.default}
    <label for={id}>
      <slot />
    </label>
  {/if}
</div>

<style lang="postcss">
  .radio {
    display: inline-flex;

    &.disabled {
      opacity: 0.3;
      pointer-events: none;
    }

    &:not(.disabled) {
      cursor: pointer;

      .wrap:hover::after {
        opacity: 0.16;
      }
    }
  }

  .frame,
  .wrap,
  .dot {
    height: 20px;
    width: 20px;
  }

  .wrap {
    border-radius: 50%;
    box-sizing: content-box;
    margin: -8px;
    padding: 8px;
    position: relative;

    &::after {
      background-color: currentColor;
      border-radius: inherit;
      content: '';
      height: 100%;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      transition-duration: 280ms;
      transition-property: opacity;
      transition-timing-function: ease-out-quart;
      width: 100%;
    }
  }

  input,
  .frame,
  .dot {
    position: absolute;
  }

  input {
    cursor: inherit;
    height: 100%;
    left: 0;
    margin: 0;
    opacity: 0;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .frame {
    fill: transparent;
    stroke: var(--unchecked-color);
  }

  .dot {
    fill: var(--unchecked-color);
    transform: scale(0);
    transition-duration: 150ms;
    transition-property: transform;
    transition-timing-function: ease-in-out-sine;
  }

  input:checked {
    ~ .dot {
      fill: var(--checked-color);
      transform: scale(1);
    }

    ~ .frame {
      stroke: var(--checked-color);
    }
  }

  label {
    align-self: center;
    cursor: inherit;
    margin-left: 8px;
  }
</style>
