<script lang="ts">
  import { Typography } from '@material-svelte/typography';
</script>

<footer>
  <Typography variant="h6">Sponsors:</Typography>
  <a
    href="https://vercel.com?utm_source=material-svelte&utm_campaign=oss"
    target="_blank"
  >
    <img
      class="vercel-logo"
      src="powered-by-vercel.svg"
      alt="Powered by Vercel"
    />
  </a>
  <a href="https://happo.io?_aid=667" target="_blank">
    <img
      class="happo-logo"
      src="happo-io-logo.svg"
      alt="Sponsored by happo.io"
    />
  </a>
</footer>

<style lang="postcss">
  footer {
    align-items: center;
    background-color: #6200ee;
    color: #fff;
    display: flex;
    justify-content: flex-end;
    padding: 5px;
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

  .vercel-logo {
    height: 30px;
  }

  .happo-logo {
    height: 30px;
    margin-top: 10px;
  }
</style>
