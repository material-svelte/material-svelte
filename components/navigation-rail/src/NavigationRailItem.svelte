<script lang="ts">
  import { hasContext, getContext } from 'svelte';
  import { key as contextKey } from './context';
  import { ripple } from '@material-svelte/svelte-actions';
  import { SvgIcon } from '@material-svelte/icon';
  import { Typography } from '@material-svelte/typography';

  /** font-color of active item */
  export let activeFontColor = '#6200ee';
  /** font-color of inactive item */
  export let inactiveFontColor = '#5e6367';
  /** svg-path of icon */
  export let iconPath: string;
  /** text for label */
  export let label: string | null = null;
  /** whether to render in compact-mode (inherits from container if undefined) */
  export let compact: boolean | null = null;
  /** whether to render as active */
  export let active = false;
  /** if not undefined render <a href> */
  export let href: string | null = null;

  if (hasContext(contextKey)) {
    const { compactStore } = getContext(contextKey);
    compactStore.subscribe((value: boolean) => {
      compact = value;
    });
  }
</script>

{#if href}
  <a
    {href}
    use:ripple
    class="navigation-rail-item"
    class:has-label={label}
    class:active
    class:compact
    style="--active-font-color: {activeFontColor}; --inactive-font-color: {inactiveFontColor}"
  >
    <SvgIcon path={iconPath} width="24px" height="24px" />
    {#if label}
      <span class="label">
        <Typography variant="body1">{label}</Typography>
      </span>
    {/if}
  </a>
{:else}
  <div
    use:ripple
    on:click
    class="navigation-rail-item"
    class:has-label={label}
    class:active
    class:compact
    style="--active-font-color: {activeFontColor}; --inactive-font-color: {inactiveFontColor}"
  >
    <SvgIcon path={iconPath} width="24px" height="24px" />
    {#if label}
      <span class="label">
        <Typography variant="body1">{label}</Typography>
      </span>
    {/if}
  </div>
{/if}

<style lang="postcss">
  div,
  a {
    align-items: center;
    border-radius: 50%;
    color: var(--inactive-font-color);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 72px;
    padding-bottom: 24px;
    padding-top: 24px;
    position: relative;
    text-decoration: none;
    transition-duration: 280ms;
    transition-property: width, height, padding-top, padding-bottom;
    transition-timing-function: ease-out-quart;
    width: 72px;

    &.active {
      color: var(--active-font-color);
    }

    &.has-label {
      padding-bottom: 16px;
      padding-top: 14px;
    }

    &.compact {
      height: 56px;
      padding-bottom: 16px;
      padding-top: 16px;
      width: 56px;

      .label {
        height: 0;
        opacity: 0;
      }
    }

    .label {
      height: 18px;
      transition-duration: 280ms;
      transition-property: height, opacity;
      transition-timing-function: ease-out-quart;
    }

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
      transition-duration: 280ms;
      transition-property: opacity;
      transition-timing-function: ease-out-quart;
      width: 100%;
    }

    &:hover::after {
      opacity: 0.08;
    }
  }
</style>
