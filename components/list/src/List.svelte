<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { key as contextKey } from './context';

  /** whether the list can be interacted with */
  export let disabled = false;
  /** whether list-items are selectable */
  export let selectable = false;
  /** whether multiple list-items are selectable */
  export let multiple = false;
  /** whether to render list-items in navigation-style */
  export let navigation = false;
  /** array with selected ids */
  export let selection: string[] = [];

  let element: HTMLUListElement;
  const items = writable(new Map());

  function isNavigation() {
    return navigation;
  }

  function registerItem(
    item: HTMLLIElement,
    itemId: string | null,
    initiallySelected: boolean
  ) {
    if (itemId === null) {
      const children = [...element.querySelectorAll('li')];
      itemId = children.indexOf(item).toString();
    }
    items.update((m) => {
      return m.set(itemId, initiallySelected);
    });
    if (initiallySelected) {
      selection.push(itemId);
    }
    return itemId;
  }

  function deregisterItem(itemId: string) {
    items.update((m) => {
      m.delete(itemId);
      return m;
    });
  }

  function selectItem(itemId: string) {
    if (selectable) {
      const selectedIds = [];
      items.update((m) => {
        for (const [k, v] of m.entries()) {
          if (multiple && k === itemId) {
            m.set(k, !v);
          } else if (!multiple) {
            m.set(k, k === itemId);
          }
          if (m.get(k)) {
            selectedIds.push(k);
          }
        }
        return m;
      });
      selection = selectedIds;
    }
  }

  function isItemSelected(itemId: string, currentlySelected: boolean) {
    if ($items.has(itemId)) {
      return $items.get(itemId);
    }
    return currentlySelected;
  }

  setContext(contextKey, {
    isNavigation,
    items,
    registerItem,
    deregisterItem,
    selectItem,
    isItemSelected,
  });
</script>

<ul bind:this={element} class:disabled>
  <slot />
</ul>

<style lang="postcss">
  ul {
    list-style: none;

    /* height: 100%; */
    padding: 8px 0;

    &.disabled {
      pointer-events: none;
    }
  }
</style>
