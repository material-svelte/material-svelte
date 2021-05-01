<script context="module" lang="ts">
  export type ListItemVisualVariant =
    | 'icon'
    | 'avatar'
    | 'thumbnail'
    | 'thumbnail-large';
  export type ListItemMetaVariant = 'icon' | 'text';
</script>

<script lang="ts">
  import { onMount, hasContext, getContext } from 'svelte';
  import { Typography } from '@material-svelte/typography';
  import { ripple } from '@material-svelte/svelte-actions';
  import { key as contextKey } from './context';

  /** id of the list-item. auto-generated if not specified */
  export let id: string | null = null;
  /** whether the list-item is selected */
  export let selected = false;
  /** whether the list-item is disabled */
  export let disabled = false;
  /** render the list-item in navigation-style (inherits from List if not specified) */
  export let navigation: boolean | null = null;
  /** render the list-item as <a href> if specified */
  export let href: string | null = null;
  /** render the list-item in n-lines-style (auto-determined if not specified) */
  export let lines: number | null = null;
  /** variant of visual-slot */
  export let visualVariant: ListItemVisualVariant = 'icon';
  /** variant of meta-slot */
  export let metaVariant: ListItemMetaVariant = 'icon';

  if (lines === null) {
    lines = 1;
    for (const slot of ['overline', 'secondary', 'tertiary']) {
      if ($$slots[slot]) {
        lines += 1;
      }
    }
  }

  let element: HTMLLIElement;
  let handleClick: () => void;
  if (hasContext(contextKey)) {
    const {
      isNavigation,
      items,
      registerItem,
      deregisterItem,
      selectItem,
      isItemSelected,
    } = getContext(contextKey);
    if (navigation === null) {
      navigation = isNavigation();
    }
    onMount(() => {
      id = registerItem(element, id, selected);
      handleClick = () => {
        selectItem(id);
      };
      const unsubscribe = items.subscribe(() => {
        selected = isItemSelected(id);
      });
      return () => {
        unsubscribe();
        deregisterItem(id);
      };
    });
  }
</script>

<li
  bind:this={element}
  {id}
  class:one-line={lines === 1}
  class:two-lines={lines === 2}
  class:three-lines={lines === 3}
  class:has-visual={$$slots.visual}
  class:visual-icon={$$slots.visual && visualVariant === 'icon'}
  class:visual-avatar={$$slots.visual && visualVariant === 'avatar'}
  class:visual-thumbnail={$$slots.visual && visualVariant === 'thumbnail'}
  class:visual-thumbnail-large={$$slots.visual &&
    visualVariant === 'thumbnail-large'}
  class:has-meta={$$slots.meta}
  class:meta-icon={$$slots.meta && metaVariant === 'icon'}
  class:meta-text={$$slots.meta && metaVariant === 'text'}
  class:link={href}
  class:selected
  class:disabled
  class:navigation
  on:click={handleClick}
  on:click
  use:ripple
>
  {#if href}
    <a {href}>
      {#if $$slots.visual}
        <span class="visual">
          <slot name="visual" />
        </span>
      {/if}
      <span class="text">
        {#if $$slots.overline}
          <span class="overline">
            <Typography variant="overline">
              <slot name="overline" />
            </Typography>
          </span>
        {/if}
        <span class="primary">
          <span class="wrap">
            <Typography variant="body1">
              {#if $$slots.primary}
                <slot name="primary" />
              {:else if $$slots.default}
                <slot />
              {/if}
            </Typography>
            {#if $$slots.meta && metaVariant === 'text'}
              <span class="meta">
                <Typography variant="body2">
                  <slot name="meta" />
                </Typography>
              </span>
            {/if}
          </span>
        </span>
        {#if $$slots.secondary}
          <span class="secondary">
            <Typography variant="body2">
              <slot name="secondary" />
            </Typography>
          </span>
        {/if}
        {#if $$slots.tertiary}
          <span class="tertiary">
            <Typography variant="body2">
              <slot name="tertiary" />
            </Typography>
          </span>
        {/if}
      </span>
      {#if $$slots.meta && metaVariant === 'icon'}
        <span class="meta">
          <slot name="meta" />
        </span>
      {/if}
    </a>
  {:else}
    {#if $$slots.visual}
      <span class="visual">
        <slot name="visual" />
      </span>
    {/if}
    <span class="text">
      {#if $$slots.overline}
        <span class="overline">
          <Typography variant="overline">
            <slot name="overline" />
          </Typography>
        </span>
      {/if}
      <span class="primary">
        <span class="wrap">
          <Typography variant="body1">
            {#if $$slots.primary}
              <slot name="primary" />
            {:else if $$slots.default}
              <slot />
            {/if}
          </Typography>
          {#if $$slots.meta && metaVariant === 'text'}
            <span class="meta">
              <Typography variant="body2">
                <slot name="meta" />
              </Typography>
            </span>
          {/if}
        </span>
      </span>
      {#if $$slots.secondary}
        <span class="secondary">
          <Typography variant="body2">
            <slot name="secondary" />
          </Typography>
        </span>
      {/if}
      {#if $$slots.tertiary}
        <span class="tertiary">
          <Typography variant="body2">
            <slot name="tertiary" />
          </Typography>
        </span>
      {/if}
    </span>
    {#if $$slots.meta && metaVariant === 'icon'}
      <span class="meta">
        <slot name="meta" />
      </span>
    {/if}
  {/if}
</li>

<style lang="postcss">
  li,
  li.link > a {
    align-items: center;
    display: flex;
  }

  li:not(.link),
  li.link > a {
    padding-left: 16px;
    padding-right: 16px;

    &.visual-thumbnail-large {
      padding-left: 0;
    }
  }

  li.link > a {
    align-self: stretch;
    color: inherit;
    text-decoration: none;
    width: 100%;
  }

  li:hover {
    background-color: rgba(0, 0, 0, 0.04);
    text-decoration: none;
  }

  li.disabled {
    pointer-events: none;
  }

  li.selected {
    background-color: rgba(0, 0, 0, 0.08);
  }

  li.navigation {
    border-radius: 4px;
    margin: 4px 8px;
    min-height: 40px !important;
  }

  .visual {
    display: block;
  }

  .text {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden;
    pointer-events: none;
    white-space: nowrap;

    > span {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .overline,
    .secondary,
    .tertiary,
    .meta {
      color: rgba(0, 0, 0, 0.54);
    }

    .wrap {
      align-items: first baseline;
      align-self: flex-end;
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .meta {
      margin-left: 44px;
    }
  }

  li.meta-icon > .meta {
    align-items: center;
    display: flex;
    height: 24px;
    justify-content: center;
    margin-left: 16px;
    min-width: 24px;
  }

  li.one-line {
    &:not(.has-visual) {
      min-height: 48px;
    }

    &.visual-icon,
    &.visual-avatar {
      height: 56px;
    }

    &.visual-thumbnail,
    &.visual-thumbnail-large {
      height: 72px;
    }

    &.visual-icon > .visual {
      height: 24px;
      margin-right: 32px;
      width: 24px;
    }

    &.visual-avatar > .visual {
      height: 40px;
      margin-right: 16px;
      width: 40px;
    }

    &.visual-thumbnail > .visual {
      height: 56px;
      margin-right: 16px;
      width: 56px;
    }

    &.visual-thumbnail-large > .visual {
      height: 56px;
      margin-right: 16px;
      width: 100px;
    }
  }

  li.two-lines,
  li.three-lines {
    .text {
      align-self: flex-start;

      > span {
        align-items: flex-end;
        display: flex;
      }
    }
  }

  li.two-lines {
    &:not(.has-visual) {
      height: 64px;
    }

    &.visual-icon,
    &.visual-avatar,
    &.visual-thumbnail,
    &.visual-thumbnail-large {
      height: 72px;
    }

    &.visual-icon > .visual {
      align-self: start;
      height: 24px;
      margin-right: 32px;
      margin-top: 16px;
      width: 24px;
    }

    &.visual-avatar > .visual,
    &.visual-thumbnail > .visual {
      height: 40px;
      margin-right: 16px;
      width: 40px;
    }

    &.visual-thumbnail-large > .visual {
      height: 56px;
      margin-right: 16px;
      width: 100px;
    }

    &:not(.has-visual) > .text {
      > span:first-child.primary {
        height: 28px;
      }

      > span:first-child.overline {
        height: 24px;
      }
    }

    &.has-visual > .text {
      > span:first-child {
        height: 32px;
      }
    }

    .text > span:not(:first-child) {
      height: 20px;
    }
  }

  li.three-lines {
    height: 88px;

    &.visual-icon > .visual {
      height: 24px;
      margin-right: 32px;
      width: 24px;
    }

    &.visual-avatar > .visual,
    &.visual-thumbnail > .visual {
      height: 40px;
      margin-right: 16px;
      width: 40px;
    }

    &.visual-icon > .visual,
    &.visual-avatar > .visual,
    &.visual-thumbnail > .visual {
      align-self: start;
      margin-top: 16px;
    }

    &.visual-thumbnail-large > .visual {
      height: 56px;
      margin-right: 20px;
      width: 100px;
    }

    .text > span:first-child {
      height: 28px;
    }

    .text > span:not(:first-child) {
      height: 20px;
    }

    &.meta-icon > .meta {
      align-self: start;
      margin-top: 16px;
    }
  }
</style>
