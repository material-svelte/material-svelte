<script lang="ts">
  import cuid from 'cuid';

  // svg-path to render
  export let path: string;
  // size to render. occupy full space if not specified.
  export let size: string | null = null;
  // accessible name of icon
  export let label: string | null = null;
  // color to render. inherit parent-color if not specified.
  export let color: string | null = null;

  const styles = [];
  const clip = color === null;

  if (size) {
    styles.push(`--size: ${size}`);
  }

  if (color) {
    styles.push(`--color: ${color}`);
  }

  let clipId;
  if (clip) {
    clipId = cuid();
    styles.push(`--clip-path: url(#${clipId})`);
  }
</script>

<i class:size class:color style={styles.join(';')}>
  {#if clip}
    <svg viewBox="0 0 24 24" width="0" height="0">
      <clipPath
        id={clipId}
        clipPathUnits="objectBoundingBox"
        transform="scale({1 / 24} {1 / 24})"
      >
        <path d={path} />
      </clipPath>
    </svg>
  {:else}
    <svg viewBox="0 0 24 24">
      <path d={path}>
        {#if label}
          <title>{label}</title>
        {/if}
      </path>
    </svg>
  {/if}
</i>

<style lang="postcss">
  i {
    display: block;
  }

  i.size {
    height: var(--size);
    width: var(--size);
  }

  i:not(.size) {
    height: 100%;
    width: 100%;
  }

  i.color > svg {
    fill: var(--color);
  }

  i:not(.color) {
    background-color: currentColor;
    clip-path: var(--clip-path);
    color: inherit;
  }
</style>
