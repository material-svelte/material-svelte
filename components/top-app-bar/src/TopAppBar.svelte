<script lang="ts">
  // render prominent style
  export let prominent = false;
  // render dense style
  export let dense = false;
  // disable elevation
  export let unelevated = false;
  // color of bar
  export let color = '#6200ee';
</script>

<header
  class:regular={!(dense || prominent)}
  class:prominent
  class:dense
  class:unelevated
  class:has-icon={$$slots.icon}
  class:has-title={$$slots.title}
  class:has-actions={$$slots.actions}
  style="--bar-color: {color}"
>
  {#if $$slots.icon}
    <span class="icon">
      <slot name="icon" />
    </span>
  {/if}
  {#if $$slots.title}
    <span class="title">
      <slot name="title" />
    </span>
  {/if}
  {#if $$slots.actions}
    <span class="actions">
      <slot name="actions" />
    </span>
  {/if}
</header>

<style lang="postcss">
  header {
    --background-color: var(--bar-color);

    align-items: center;
    background-color: var(--background-color);
    display: flex;

    > .icon,
    > .title,
    > .actions {
      padding: 8px 12px;
    }

    > .title {
      background-clip: text;
      background-color: inherit;
      color: transparent;
      filter: invert(1) grayscale(1) contrast(20);
      flex-grow: 1;
      padding-left: 20px;
    }

    > .actions {
      margin-left: auto;
    }

    &:not(.unelevated) {
      @mixin elevation 4;
    }
  }

  header.regular {
    height: 64px;
  }

  header.dense {
    height: 48px;
  }

  header.prominent {
    align-items: flex-start;
    height: 128px;
    padding-bottom: 12px;

    > .title {
      align-self: flex-end;
    }
  }

  header.prominent.dense {
    height: 96px;
  }
</style>
