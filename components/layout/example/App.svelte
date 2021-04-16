<script>
  import Layout from '../src/Layout.svelte';
</script>

<svelte:head>
  <link href="https://unpkg.com/ress/dist/ress.min.css" rel="stylesheet" />
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic"
    rel="stylesheet"
  />
</svelte:head>

<Layout>
  <div slot="header" class="bar" />
  <div slot="navigation" class="drawer">
    <ul>
      {#each Array(50) as _, i}
        <li>{i}</li>
      {/each}
    </ul>
  </div>
  <main>
    <ul>
      {#each Array(50) as _, i}
        <li>{i}</li>
      {/each}
    </ul>
  </main>
</Layout>

<style>
  :global(body) {
    height: 100vh;
  }

  .bar {
    height: 50px;
  }

  ul {
    overflow: auto;
  }

  .drawer {
    display: flex;
    width: 200px;
  }
</style>
