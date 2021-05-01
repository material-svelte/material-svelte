<script lang="ts">
  import SvgIcon from './SvgIcon.svelte';

  /** svg-path of icon */
  export let path: string;
  /** width of icon */
  export let width = 'inherit';
  /** height of icon */
  export let height = 'inherit';
  /** color of icon */
  export let fillColor = 'currentColor';
  /** accessible name of icon */
  export let label: string | null = null;
</script>

<i style="height: {height}; width: {width}">
  <SvgIcon {path} {label} {fillColor} />
</i>

<style lang="postcss">
  i {
    display: block;
  }
</style>
