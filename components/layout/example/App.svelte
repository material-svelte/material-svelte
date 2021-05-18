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
  <div slot="header" class="header" />
  <div slot="navigation" class="navigation">
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
  <div slot="footer" class="footer" />
</Layout>

<style>
  :global(body) {
    height: 100vh;
  }

  .header {
    background-color: #f00;
    height: 50px;
  }

  ul {
    overflow: auto;
  }

  .navigation {
    background-color: #0f0;
    display: flex;
    width: 200px;
  }

  main {
    background-color: #00f;
  }

  .footer {
    background-color: #ff0;
    height: 50px;
  }
</style>
