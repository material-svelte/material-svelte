<script context="module" lang="ts">
  export type ListDividerVariant = 'full' | 'middle' | 'inset';
</script>

<script lang="ts">
  /** variant of divider */
  export let variant: ListDividerVariant = 'full';
</script>

<hr
  class:full={variant === 'full'}
  class:middle={variant === 'middle'}
  class:inset={variant === 'inset'}
/>

<style lang="postcss">
  hr {
    background-color: rgba(0, 0, 0, 0.12);
    border: 0;
    height: 1px;
    margin: 0;
  }
  hr.middle {
    margin-left: 16px;
    margin-right: 16px;
  }
  hr.inset {
    margin-left: 72px;
  }
</style>
