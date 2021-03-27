<script lang="ts">
  import Footer from '$lib/Footer.svelte';
</script>

<main>
  <slot />
</main>
<Footer />

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    margin: 0 auto;
    padding: 1em;
    text-align: center;
  }
</style>
