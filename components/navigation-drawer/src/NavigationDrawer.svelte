<script lang="ts">
  /** whether NavigationDrawer is open */
  export let open = false;
  /** whether NavigationDrawer is modal */
  export let modal = false;
  /** whether NavigationDrawer is elevated */
  export let elevated = false;
</script>

{#if modal}
  <div
    class="wrap"
    class:open
    on:click={() => {
      open = !open;
    }}
  >
    <nav class="modal" class:open class:elevated>
      {#if $$slots.header}
        <div class="header">
          <slot name="header" />
        </div>
      {/if}
      <slot />
    </nav>
    <div class="overlay" />
  </div>
{:else}
  <nav class:open class:elevated>
    {#if $$slots.header}
      <div class="header">
        <slot name="header" />
      </div>
    {/if}
    <slot />
  </nav>
{/if}

<style lang="postcss">
  nav {
    --transition-duration: 280ms;
    --transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --width: 256px;

    height: 100%;
    overflow: auto;
    transition-duration: var(--transition-duration);
    transition-property: transform, margin-right;
    transition-timing-function: var(--transition-timing-function);
    width: var(--width);

    &.elevated,
    &.modal {
      @mixin elevation 4;
    }

    &:not(.elevated) {
      border-right: solid 1px rgba(0, 0, 0, 0.12);
    }

    &:not(.open) {
      margin-right: calc(-1 * var(--width));
      transform: translateX(-100%);
    }
  }

  .wrap {
    --transition-duration: 280ms;
    --transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --width: 256px;

    display: flex;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    transition-delay: var(--transition-duration);
    transition-duration: 0s;
    transition-property: z-index;
    width: 100%;
    z-index: -1;

    > nav {
      /* TODO where should we get the color from ? */
      background-color: #fff;
    }

    > .overlay {
      background-color: rgba(0, 0, 0, 0.5);
      flex: 1;
      opacity: 0;
      transition-duration: var(--transition-duration);
      transition-property: opacity;
      transition-timing-function: var(--transition-timing-function);
    }

    &.open {
      transition-delay: 0s;
      transition-duration: 0s;
      z-index: 10;

      > .overlay {
        opacity: 1;
      }
    }
  }
</style>
