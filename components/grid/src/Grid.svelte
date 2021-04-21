<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { key as contextKey } from './context';

  type GridDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
  type GridJustify =
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  type GridAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';

  export let columns = 12;
  export let gutters = '24px';
  export let margins = '24px';

  export let direction: GridDirection = 'row';
  export let justify: GridJustify = 'center';
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
