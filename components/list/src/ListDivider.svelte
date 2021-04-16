<script lang="ts">
  type ListDividerVariant = 'full' | 'middle' | 'inset';

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
