<script lang="ts">
  import { onMount } from 'svelte';

  /** whether the navigation should be clipped underneath the header */
  export let clippedNavigation = false;

  let navigation: HTMLElement;
  let header: HTMLElement;
  let footer: HTMLElement;

  let navigationWidth: number;
  let headerHeight: number;
  let footerHeight: number;
  let style: string;

  let transition = false;
  let initialized = false;

  function enableTransition() {
    header.addEventListener('transitionend', () => {
      transition = false;
    });
    transition = true;
  }

  $: {
    if (!initialized) {
      initialized = true;
    } else if (clippedNavigation || !clippedNavigation) {
      enableTransition();
    }
  }

  $: {
    const styles: string[] = [];
    if (navigationWidth) {
      styles.push(`--navigation-width: ${navigationWidth}px`);
    }
    if (headerHeight) {
      styles.push(`--header-height: ${headerHeight}px`);
    }
    if (footerHeight) {
      styles.push(`--footer-height: ${footerHeight}px`);
    }
    style = styles.join(';');
  }

  onMount(() => {
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === navigation) {
          navigationWidth = entry.contentRect.width;
        } else if (entry.target === header) {
          headerHeight = entry.contentRect.height;
        } else if (entry.target === footer) {
          footerHeight = entry.contentRect.height;
        }
      }
    });
    if (navigation) {
      ro.observe(navigation);
    }
    if (header) {
      ro.observe(header);
    }
    if (footer) {
      ro.observe(footer);
    }
  });
</script>

<div
  class="layout"
  class:transition
  class:clipped-navigation={clippedNavigation}
  {style}
>
  <div bind:this={header} class="header">
    <slot name="header" />
  </div>
  <div class="wrap">
    <div bind:this={navigation} class="navigation">
      <slot name="navigation" />
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
  {#if $$slots.footer}
    <div bind:this={footer} class="footer">
      <slot name="footer" />
    </div>
  {/if}
</div>

<style lang="postcss">
  .layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .layout:not(.clipped-navigation) {
    .header {
      margin-bottom: calc(-1 * var(--header-height, 0));
      margin-left: var(--navigation-width, 0);
    }
    .content {
      margin-bottom: var(--footer-height, 0);
      margin-top: var(--header-height, 0);
    }
    .footer {
      margin-left: var(--navigation-width, 0);
      margin-top: calc(-1 * var(--footer-height, 0));
    }
  }

  .layout.transition {
    .header {
      transition-duration: 0.5s;
      transition-property: margin-left, margin-bottom;
    }
    .content {
      transition-duration: 0.5s;
      transition-property: margin-top;
    }
  }

  .wrap {
    display: flex;
    flex: 1;
    flex-direction: row;
    overflow: hidden;
  }

  .header {
    z-index: 1;
  }

  .footer {
    z-index: 1;
  }

  .navigation {
    overflow: hidden;
  }

  .content {
    flex: 1;
    overflow: auto;
  }
</style>
