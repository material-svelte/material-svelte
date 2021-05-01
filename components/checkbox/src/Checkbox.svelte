<script lang="ts">
  import { uid } from 'uid';
  import { ripple } from '@material-svelte/svelte-actions';
  import { SvgIcon } from '@material-svelte/icon';
  import {
    mdiCheckboxBlankOutline,
    mdiCheckboxMarked,
    mdiMinusBox,
  } from '@mdi/js';

  /** whether the checkbox is checked */
  export let checked: boolean | null = null;
  /** whether the checkbox is indeterminate */
  export let indeterminate = false;
  /** whether the checkbox is disabled */
  export let disabled = false;
  /** value of the checkbox */
  export let value: string | null = null;
  /** id of the checkbox. auto-generated if not specified */
  export let id: string = uid();
  /** color when checked */
  export let checkedColor = 'currentColor';
  /** color when unchecked */
  export let uncheckedColor = 'currentColor';
  /** color when indeterminate */
  export let indeterminateColor = 'currentColor';
  /** icon for checked state */
  export let checkedIcon: string = mdiCheckboxMarked;
  /** icon for unchecked state */
  export let uncheckedIcon: string = mdiCheckboxBlankOutline;
  /** icon for indeterminate state */
  export let indeterminateIcon: string = mdiMinusBox;

  let iconPath: string;
  let iconColor: string;
  $: {
    if (indeterminate) {
      iconPath = indeterminateIcon;
      iconColor = indeterminateColor;
    } else if (checked) {
      iconPath = checkedIcon;
      iconColor = checkedColor;
    } else {
      iconPath = uncheckedIcon;
      iconColor = uncheckedColor;
      checked = false;
    }
  }
</script>

<div class="checkbox" class:disabled style="--color: {iconColor}">
  <div class="wrap" use:ripple>
    <input
      type="checkbox"
      bind:checked
      bind:indeterminate
      {disabled}
      {value}
      {id}
      on:change
    />
    <span class="icon">
      <SvgIcon path={iconPath} />
    </span>
  </div>
  {#if $$slots.default}
    <label for={id}>
      <slot {checked} {indeterminate} />
    </label>
  {/if}
</div>

<style lang="postcss">
  .checkbox {
    display: inline-flex;
  }

  .wrap {
    border-radius: 50%;
    box-sizing: content-box;
    height: 24px;
    margin: -12px;
    padding: 12px;
    position: relative;
    width: 24px;
  }

  .checkbox:not(.disabled) {
    cursor: pointer;

    .wrap:hover::after {
      opacity: 0.16;
    }
  }

  .disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  .wrap::after,
  input {
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .wrap::after {
    background-color: currentColor;
    border-radius: inherit;
    content: '';
    transition-duration: 280ms;
    transition-property: opacity;
    transition-timing-function: ease-out-quart;
  }

  input {
    cursor: inherit;
    margin: 0;
    z-index: 1;
  }

  .icon {
    color: var(--color);
    height: inherit;
    position: absolute;
    width: inherit;
  }

  label {
    align-self: center;
    cursor: inherit;
    margin-left: 8px;
  }
</style>
