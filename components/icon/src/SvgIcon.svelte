<script lang="ts">
  // svg-path of icon
  export let path: string;
  // viewbox of icon
  export let viewBox = '0 0 24 24';
  // accessible name of icon
  export let label: string | null = null;
  // width of icon
  export let width = '100%';
  // height of icon
  export let height = '100%';
  // color of icon
  export let fillColor = 'currentColor';

  const styles = [`width: ${width}`, `height: ${height}`, `fill: ${fillColor}`];
</script>

<svg {viewBox} style={styles.join(';')}>
  <path d={path}>
    {#if label}
      <title>{label}</title>
    {/if}
  </path>
</svg>
