<script lang="ts">
  /** svg-path of icon */
  export let path: string;
  /** viewbox of icon */
  export let viewBox = '0 0 24 24';
  /** width of icon */
  export let width = 'inherit';
  /** height of icon */
  export let height = 'inherit';
  /** color of icon */
  export let fillColor = 'currentColor';
  /** accessible name of icon */
  export let label: string | null = null;
</script>

<svg {viewBox} style=" fill: {fillColor}; height: {height};width: {width}">
  <path d={path}>
    {#if label}
      <title>{label}</title>
    {/if}
  </path>
</svg>
