<script>
  const utm = '?utm_source=material-svelte&utm_campaign=oss';
</script>

<footer>
  <a href="https://vercel.com{utm}" target="_blank">
    <img
      class="vercel-logo"
      src="powered-by-vercel.svg"
      alt="Powered by Vercel"
    />
  </a>
  <a href="https://happo.io{utm}" target="_blank">
    <img
      class="happo-logo"
      src="happo-io-logo.svg"
      alt="Sponsored by happo.io"
    />
  </a>
</footer>

<style>
  footer {
    align-items: center;
    bottom: 0;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;
  }

  a {
    display: block;
    margin: 0;
  }

  img {
    display: block;
    margin: 0 10px;
  }

  .happo-logo {
    height: 40px;
  }
</style>
