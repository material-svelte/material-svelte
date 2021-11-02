<script context="module" lang="ts">
  export type TextFieldVariant = 'filled' | 'outlined';
</script>

<script lang="ts">
  import { uid } from 'uid';

  /** variable to bind input-element to */
  export let inputElement: HTMLInputElement | null = null;
  /** variant of TextField */
  export let variant: TextFieldVariant = 'filled';
  /** id of input-element */
  export let id: string = uid();
  /** value of input element */
  export let value = '';
  /** placeholder-text of input-element */
  export let placeholder = '';
  /** label of TextField */
  export let label: string | null = null;
  /** helper text of TextField **/
  export let helperText: string | null = null;
  /** color of decorations when focused */
  export let focusColor = '#6200ee';
  /** whether the TextField is disabled */
  export let disabled = false;
  /** whether the TextFields height is reduced */
  export let dense = false;
  /** whether the TextField is in error-state */
  export let error = false;
  /** color of decorations when in error-state */
  export let errorColor = '#f44336';
</script>

<div
  class="text-field"
  class:filled={variant === 'filled'}
  class:outlined={variant === 'outlined'}
  class:has-leading-icon={$$slots.leadingIcon}
  class:disabled
  class:dense
  class:error
  style="--focus-color: {focusColor}; --error-color: {errorColor}"
>
  <div class="wrap">
    {#if $$slots.leadingIcon}
      <span class="leading-icon">
        <slot name="leadingIcon" />
      </span>
    {/if}
    <div class="input-wrap">
      <input
        type="text"
        bind:this={inputElement}
        bind:value
        on:input
        on:change
        on:focus
        on:blur
        {id}
        {disabled}
        placeholder={placeholder || ' '}
        {...$$restProps}
      />
      {#if label}
        <label for={id}>{label}</label>
      {/if}
      <fieldset>
        {#if label && variant === 'outlined'}
          <legend>{label}</legend>
        {/if}
      </fieldset>
    </div>
    {#if $$slots.trailingIcon}
      <span class="trailing-icon">
        <slot name="trailingIcon" />
      </span>
    {/if}
  </div>
  {#if helperText}
    <p class="helper">{helperText}</p>
  {/if}
</div>

<style lang="postcss">
  .text-field {
    border: 0;
    display: inline-flex;
    flex-direction: column;
    margin: 0;
    min-width: 240px;
    padding: 0;
    position: relative;
    vertical-align: top;
  }

  .wrap {
    align-items: center;
    border: 0;
    display: flex;
    height: 56px;
    position: relative;

    &:focus-within label {
      color: var(--focus-color);
    }
  }

  .dense .wrap {
    height: 40px;
  }

  legend {
    margin-left: 12px;
    padding: 0 4px;
  }

  .has-leading-icon legend {
    margin-left: 44px;
  }

  label,
  legend {
    color: rgba(0, 0, 0, 0.54);
    display: block;
    font-size: 0.75rem;
    font-weight: 400;
    height: 0;
    letter-spacing: 0.00938em;
    line-height: 20px;
    pointer-events: none;
    position: relative;
    transform-origin: top left;
    transition-duration: 150ms;
    transition-property: transform, font-size;
    transition-timing-function: linear;
  }

  .leading-icon,
  .trailing-icon {
    color: rgba(0, 0, 0, 0.54);
    height: 24px;
    width: 24px;
  }

  .leading-icon {
    margin-left: 12px;
    margin-right: -4px;
  }

  .input-wrap {
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
    margin-left: 16px;
  }

  input {
    caret-color: var(--focus-color);
    line-height: 20px;
    outline: none;
  }

  fieldset {
    border: 0;
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .trailing-icon {
    margin-right: 12px;
  }

  .helper {
    color: rgba(0, 0, 0, 0.54);
    font-size: 0.75rem;
    height: 16px;
    margin: 0;
    margin-top: 3px;
    padding: 0 16px;
  }

  .error .helper {
    color: var(--error-color);
  }

  .disabled {
    label,
    input,
    input::placeholder,
    .leading-icon,
    .trailing-icon {
      color: rgba(0, 0, 0, 0.38);
    }
  }

  .filled {
    .wrap {
      background-color: rgba(0, 0, 0, 0.09);
      border-bottom: 1px solid rgba(0, 0, 0, 0.42);
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    &:not(.disabled):hover .wrap {
      background-color: rgba(0, 0, 0, 0.13);
      border-bottom: 1px solid rgba(0, 0, 0, 0.87);
    }

    .wrap::after {
      background-color: var(--focus-color);
      bottom: -1px;
      content: '';
      height: 2px;
      left: 50%;
      position: absolute;
      transition: width 150ms linear, left 150ms linear;
      width: 0;
    }

    .wrap:focus-within::after,
    &.error .wrap::after {
      left: 0;
      width: 100%;
    }

    &.disabled .wrap::after {
      color: rgba(0, 0, 0, 0.38);
    }

    &.error label {
      color: var(--error-color);
    }

    &.error .wrap::after {
      background-color: var(--error-color);
    }

    input {
      align-self: flex-end;
      padding-bottom: 8px;
      padding-top: 20px;
    }

    input[placeholder=' ']:placeholder-shown:not(:focus) ~ label {
      font-size: 1rem;
      transform: translateY(10px);
    }

    &.dense input {
      padding-bottom: 0;
    }
  }

  .outlined {
    .wrap {
      label {
        transform: translateY(-10px);
      }

      legend {
        transform: translateY(-10px);
        visibility: hidden;
      }
    }

    &:not(.disabled):not(.error):not(:focus-within):hover fieldset {
      border-color: rgba(0, 0, 0, 0.87);
    }

    &:focus-within fieldset {
      border-color: var(--focus-color);
      border-width: 2px;
    }

    input {
      height: 100%;
    }

    input[placeholder=' ']:placeholder-shown:not(:focus) {
      ~ label {
        font-size: 1rem;
        transform: translateY(18px);
      }

      /* stylelint-disable-next-line selector-max-compound-selectors */
      ~ fieldset legend {
        max-width: 0;
        padding: 0;
        transition: transform 150ms linear, max-width 0s linear 150ms,
          padding 0s linear 150ms;
      }
    }

    fieldset {
      border: 1px solid rgba(0, 0, 0, 0.42);
      border-radius: 4px;
    }

    &.error label {
      color: var(--error-color);
    }

    &.error fieldset {
      border-color: var(--error-color);
    }

    &.dense input[placeholder=' ']:placeholder-shown:not(:focus) ~ label {
      transform: translateY(10px);
    }
  }
</style>
