<script context="module" lang="ts">
  export type TypographyVariant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'overline';
</script>

<script lang="ts">
  // TODO could get rid of the whole if/else stuff if this PR gets accepted:
  // https://github.com/sveltejs/svelte/pull/5481
  /** variant of typography */
  export let variant: TypographyVariant;
  /** use markup of different variant */
  export let component: TypographyVariant = variant;
  /** font-family for typography */
  export let fontFamily = 'roboto, sans-serif';

  const tagMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    button: 'span',
    caption: 'span',
    overline: 'span',
  };

  const tag = tagMap[component];

  const style = `--font-family: ${fontFamily}`;
</script>

{#if tag === 'h1'}
  <h1 class={variant} {style}><slot /></h1>
{:else if tag === 'h2'}
  <h2 class={variant} {style}><slot /></h2>
{:else if tag === 'h3'}
  <h3 class={variant} {style}><slot /></h3>
{:else if tag === 'h4'}
  <h4 class={variant} {style}><slot /></h4>
{:else if tag === 'h5'}
  <h5 class={variant} {style}><slot /></h5>
{:else if tag === 'h6'}
  <h6 class={variant} {style}><slot /></h6>
{:else if tag === 'p'}
  <p class={variant} {style}><slot /></p>
{:else if tag === 'span'}
  <span class={variant} {style}><slot /></span>
{/if}

<style lang="postcss">
  @define-mixin common {
    font-family: var(--font-family);
    overflow: inherit;
    text-overflow: inherit;
  }

  .h1 {
    @mixin common;

    font-size: 96px;

    /* light 96 -1.5 */
    font-weight: 300;
    letter-spacing: -1.5px;
  }
  .h2 {
    @mixin common;

    font-size: 60px;

    /* light 60 -0.5 */
    font-weight: 300;
    letter-spacing: -0.5px;
  }
  .h3 {
    @mixin common;

    font-size: 48px;

    /* normal 48px 0px */
    font-weight: 400;
    letter-spacing: 0;
  }
  .h4 {
    @mixin common;

    font-size: 34px;

    /* normal 34px 0.25 */
    font-weight: 400;
    letter-spacing: 0.25px;
  }
  .h5 {
    @mixin common;

    font-size: 24px;

    /* normal 24 0 */
    font-weight: 400;
    letter-spacing: 0;
  }
  .h6 {
    @mixin common;

    font-size: 20px;

    /* medium 20 0.15 */
    font-weight: 500;
    letter-spacing: 0.15px;
  }
  .subtitle1 {
    @mixin common;

    font-size: 16px;

    /* normal 16 0.15 */
    font-weight: 400;
    letter-spacing: 0.15px;
  }
  .subtitle2 {
    @mixin common;

    font-size: 14px;

    /* medium 14 0.1 */
    font-weight: 500;
    letter-spacing: 0.1px;
  }
  .body1 {
    @mixin common;

    font-size: 16px;

    /* normal 16 0.5 */
    font-weight: 400;
    letter-spacing: 0.5px;
  }
  .body2 {
    @mixin common;

    font-size: 14px;

    /* normal 14 0.25 */
    font-weight: 400;
    letter-spacing: 0.25px;
  }
  .button {
    @mixin common;

    font-size: 14px;

    /* medium 14 1.25 uppercase */
    font-weight: 500;
    letter-spacing: 1.25px;
    text-transform: uppercase;
  }
  .caption {
    @mixin common;

    font-size: 12px;

    /* normal 12 0.4 */
    font-weight: 400;
    letter-spacing: 0.4px;
  }
  .overline {
    @mixin common;

    font-size: 10px;

    /* normal 10 1.5 uppercase */
    font-weight: 400;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
</style>
