<script lang="ts">
  import { uid } from 'uid';
  import { ripple } from '@material-svelte/svelte-actions';

  /** id of the switch. auto-generated if not specified */
  export let id: string = uid();
  /** value of the switch */
  export let value: string | null = null;
  /** whether the switch is checked */
  export let checked = false;
  /** whether the switch is disabled */
  export let disabled = false;
  /** color when checked */
  export let checkedColor = '#6200ee';
  /** color when unchecked */
  export let uncheckedColor = '#fff';
</script>

<div
  class="switch"
  class:checked
  class:disabled
  style="--checked-color: {checkedColor}; --unchecked-color: {uncheckedColor}"
>
  <div class="wrap">
    <input type="checkbox" bind:checked {disabled} {value} {id} on:change />
    <div class="track" />
    <div class="thumb" use:ripple={{ triggerOnParent: true, centered: true }} />
  </div>
  {#if $$slots.default}
    <label for={id}>
      <slot {checked} />
    </label>
  {/if}
</div>

<style lang="postcss">
  .switch {
    display: inline-flex;
    position: relative;
  }

  .wrap {
    align-items: center;
    display: inline-flex;
    height: 24px;
    justify-content: center;
    width: 50px;
  }

  input {
    height: inherit;
    left: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: inherit;
  }

  label {
    align-items: center;
    align-self: stretch;
    display: flex;
    padding: 0 8px;
  }

  .track {
    background-color: #000;
    border-radius: 7px;
    height: 14px;
    opacity: 0.38;
    pointer-events: none;
    transition: background-color 280ms ease-out-quart;
    width: 36px;
  }

  .thumb {
    border-radius: 50%;
    height: 40px;
    pointer-events: none;
    position: absolute;
    transform: translateX(-11px);
    transition-duration: 280ms;
    transition-property: transform, background-color;
    transition-timing-function: ease-out-quart;
    width: 40px;
  }

  .switch.checked .thumb {
    transform: translateX(11px);
  }

  .thumb::after {
    background-color: var(--unchecked-color);
    border-radius: inherit;
    content: '';
    display: block;
    height: inherit;
    position: relative;
    transform: scale(0.5);
    transition: background-color 280ms ease-out-quart;
    width: inherit;
  }

  .switch:not(.disabled) {
    .wrap:hover .thumb {
      background-color: rgba(0, 0, 0, 0.08);
    }

    .thumb::after {
      @mixin elevation 4;
    }

    &.checked {
      .thumb::after,
      .track {
        background-color: var(--checked-color);
      }

      .track {
        opacity: 0.5;
      }
    }
  }

  .switch.disabled {
    .wrap {
      pointer-events: none;
    }

    .thumb::after {
      background-color: #bdbdbd;
    }

    .track {
      opacity: 0.12;
    }

    label {
      color: rgba(0, 0, 0, 0.38);
    }
  }
</style>
