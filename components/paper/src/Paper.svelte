<script lang="ts">
  type PaperVariant = 'elevated' | 'outlined';
  // variant of paper to render
  export let variant: PaperVariant = 'elevated';
  // elevation of paper (applies for elevated-variant only)
  export let elevation = 1;
  // whether to render border-radius
  export let square = false;
</script>

<div
  class="elevation-{elevation}"
  class:elevated={variant === 'elevated' && elevation > 0}
  class:outlined={variant === 'outlined'}
  class:square
>
  <slot />
</div>

<style lang="postcss">
  div {
    display: block;
    overflow-wrap: break-word;
    padding: 16px;
    text-decoration: none;
    transition-property: box-shadow, opacity, border-radius;
    white-space: normal;

    &:not(.square) {
      border-radius: 4px;
    }

    @for $i from 0 to 24 {
      &.elevated.elevation-$i {
        /* stylelint-disable-line selector-class-pattern */
        @mixin elevation $i;
      }
    }

    &.outlined {
      border: 1px solid rgba(0, 0, 0, 0.12);
    }
  }
</style>
