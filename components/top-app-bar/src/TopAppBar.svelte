<script lang="ts">
  /** background-color of bar */
  export let backgroundColor = '#6200ee';
  /** font-color of bar */
  export let fontColor = '#fff';
  /** render prominent style */
  export let prominent = false;
  /** render dense style */
  export let dense = false;
  /** disable elevation */
  export let unelevated = false;
</script>

<header
  class:regular={!(dense || prominent)}
  class:prominent
  class:dense
  class:unelevated
  class:has-icon={$$slots.icon}
  class:has-title={$$slots.title}
  class:has-actions={$$slots.actions}
  style="--background-color: {backgroundColor}; --font-color: {fontColor};"
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
    --transition-duration: 280ms;
    --transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    align-items: center;
    align-items: flex-start;
    background-color: var(--background-color);
    color: var(--font-color);
    display: flex;
    padding-left: 16px;
    padding-right: 16px;
    transition-duration: var(--transition-duration);
    transition-property: height, padding-top, padding-bottom;
    transition-timing-function: var(--transition-timing-function);

    > .icon {
      opacity: 0;
      transition-duration: inherit;
      transition-property: width, opacity, margin-right;
      transition-timing-function: inherit;
      width: 0;
    }

    > .icon:not(:empty) {
      height: 24px;
      margin-right: 32px;
      opacity: 1;
      width: 24px;
    }

    > .title {
      align-self: flex-end;
      flex-grow: 1;
    }

    > .actions {
      display: inline-flex;

      /* TODO this is not safari compatible */
      gap: 24px;
      height: 24px;
    }

    &:not(.unelevated) {
      clip-path: inset(0 0 -48px 0);
      @mixin elevation 4;
    }
  }

  header.regular {
    height: 64px;
    padding-bottom: 20px;
    padding-top: 20px;
  }

  header.dense {
    height: 48px;
    padding-bottom: 12px;
    padding-top: 12px;
  }

  header.prominent {
    height: 128px;
    padding-bottom: 12px;
    padding-top: 20px;
  }

  header.prominent.dense {
    height: 96px;
    padding-top: 12px;
  }
</style>
