<script context="module" lang="ts">
  export type GridDirection =
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse';

  export type GridJustify =
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';

  export type GridAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
</script>

<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { key as contextKey } from './context';

  /** amount of colums */
  export let columns = 12;
  /** size of gutters */
  export let gutters = '24px';
  /** size of margins */
  export let margins = '24px';
  /** direction of grid-items */
  export let direction: GridDirection = 'row';
  /** justification of grid-items */
  export let justify: GridJustify = 'center';
  /** alignment of grid-items */
  export let align: GridAlign = 'center';

  const columnsStore = writable(columns);
  const guttersStore = writable(gutters);

  setContext(contextKey, {
    columnsStore,
    guttersStore,
  });
</script>

<div
  class="justify-{justify}"
  style="--gutters: {gutters}; --margins: {margins}; --direction: {direction}; --align: {align}"
>
  <slot />
</div>

<style lang="postcss">
  div {
    align-items: var(--align);
    display: flex;
    flex-direction: var(--direction);
    flex-wrap: wrap;
    margin-left: calc(var(--margins) - var(--gutters) / 2);
    margin-right: calc(var(--margins) - var(--gutters) / 2);
  }

  .justify-start {
    justify-content: flex-start;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-end {
    justify-content: flex-end;
  }

  .justify-space-between {
    justify-content: space-between;
  }

  .justify-space-around {
    justify-content: space-around;
  }

  .justify-space-evenly {
    justify-content: space-evenly;
  }
</style>
