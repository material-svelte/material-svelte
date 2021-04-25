<!-- required for svelte-action to access props -->
<svelte:options accessors={true} />

<script lang="ts">
  export let text: string;

  // element passed to popper
  export let popperElement: HTMLElement;
</script>

<div bind:this={popperElement}>
  {text}
</div>

<style>
  div {
    background-color: #ddd;
    border: 2px solid #000;
    border-radius: 5px;
  }
</style>
