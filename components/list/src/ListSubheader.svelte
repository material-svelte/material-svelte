<script context="module" lang="ts">
  export type ListSubheaderVariant = 'regular' | 'inset';
</script>

<script lang="ts">
  import { Typography } from '@material-svelte/typography';

  /** variant of subheader */
  export let variant: ListSubheaderVariant = 'regular';
</script>

<span class:regular={variant === 'regular'} class:inset={variant === 'inset'}>
  <Typography variant="caption">
    <slot />
  </Typography>
</span>

<style lang="postcss">
  span {
    color: rgba(0, 0, 0, 0.54);
    margin-top: 5px;
  }

  span.regular {
    margin-left: 16px;
  }

  span.inset {
    margin-left: 72px;
  }
</style>
