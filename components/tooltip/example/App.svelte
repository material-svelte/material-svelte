<script>
  import { tooltip } from '../src/';
</script>

<svelte:head>
  <link href="https://unpkg.com/ress/dist/ress.min.css" rel="stylesheet" />
</svelte:head>

<div>
  <span use:tooltip={"I'm a tip"}>I'm text</span>
  <span use:tooltip={{ text: "I'm a tip", arrow: true }}>I'm text</span>
  <span use:tooltip={{ text: "I'm a tip", arrow: false, placement: 'top' }}>
    I'm text
  </span>
</div>

<style>
  div {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
  }
  :global(body) {
    height: 300vh;
  }
</style>
