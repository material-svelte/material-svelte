<script lang="ts">
  import SvgIcon from './SvgIcon.svelte';
  // svg-path of icon
  export let path: string;
  // accessible name of icon
  export let label: string | null = null;
  // width of icon
  export let width = '100%';
  // height of icon
  export let height = '100%';
  // color of icon
  export let fillColor = 'currentColor';
</script>

<i>
  <SvgIcon {path} {label} {width} {height} {fillColor} />
</i>

<style lang="postcss">
  i {
    display: block;
  }
</style>
