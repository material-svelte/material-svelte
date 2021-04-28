<script context="module" lang="ts">
  export type GridItemSize = 'auto' | number | null;
</script>

<script lang="ts">
  import { getContext } from 'svelte';
  import { key as contextKey } from './context';
  import { BreakpointSlicer } from '@material-svelte/breakpoint-tools';
  import config from '$material-svelte-config';

  /** size of grid-item */
  export let size: GridItemSize = null;
  /** whether another grid will be nested in this grid-item */
  export let nested = false;

  const { columnsStore, guttersStore } = getContext(contextKey);

  const styles: string[] = [
    `--columns: ${$columnsStore}`,
    `--gutters: ${$guttersStore}`,
  ];

  const slicer = new BreakpointSlicer(config.breakpoints);
  let defaultSize = size;
  const sizes: { [key: string]: GridItemSize } = {};
  slicer.forEach((slice) => {
    const sliceSize = $$restProps[slice.name] || null;
    if ((defaultSize === null || defaultSize === 'auto') && sliceSize) {
      defaultSize = sliceSize;
    }
    sizes[slice.name] = sliceSize;
  });
  for (const [key, value] of Object.entries(sizes)) {
    if (value === null) {
      sizes[key] = defaultSize;
    }
  }

  for (const [key, value] of Object.entries(sizes)) {
    styles.push(`--size-${key}: ${value}`);
  }
</script>

<div class:nested class:auto={size === 'auto'} style={styles.join(';')}>
  <slot />
</div>

<style lang="postcss">
  div {
    width: calc(var(--size) / var(--columns) * 100% - var(--gutters));

    &:not(.nested) {
      margin: calc(var(--gutters) / 2);
    }

    &.nested {
      margin-left: calc(var(--gutters) / 2);
      margin-right: calc(var(--gutters) / 2);
    }

    &.auto {
      flex-grow: 1;
      min-width: 0;
      width: 0;
    }
  }

  @breakpoint each(breakpoint) {
    div {
      --size: var(--size-$(breakpoint));
    }
  }
</style>
