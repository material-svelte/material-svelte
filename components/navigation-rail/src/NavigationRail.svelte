<script context="module" lang="ts">
  export type NavigationRailAlign = 'start' | 'center' | 'end';
</script>

<script lang="ts">
  import { setContext } from 'svelte';
  import { key as contextKey } from './context';
  import { writable } from 'svelte/store';

  /** whether to render a divider */
  export let divider = false;
  /** whether to render in compact-mode */
  export let compact = false;
  /** alignment of items */
  export let align: NavigationRailAlign = 'start';

  const compactStore = writable(compact);

  setContext(contextKey, {
    compactStore,
  });

  $: $compactStore = compact;
</script>

<div class="navigation-rail align-{align}" class:divider class:compact>
  {#if $$slots.fab}
    <div class="fab">
      <slot name="fab" />
    </div>
  {/if}
  <slot />
</div>

<style lang="postcss">
  .navigation-rail {
    border-right: 1px solid rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: column;
    height: 100%;
    transition-duration: 280ms;
    transition-property: width, border-right-color;
    transition-timing-function: ease-out-quart;
    width: 72px;

    &.compact {
      width: 56px;
    }

    &.divider {
      border-right-color: rgba(0, 0, 0, 0.12);
    }

    &.align-start {
      justify-content: flex-start;
      padding-top: 8px;
    }

    &.align-center {
      justify-content: center;
    }

    &.align-end {
      justify-content: flex-end;
      padding-bottom: 8px;

      .fab {
        order: 1;
      }
    }
  }

  .fab {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
    margin-top: 8px;
    width: inherit;
  }
</style>
