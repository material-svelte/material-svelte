<script lang="ts">
  import { Button } from '@material-svelte/button';
  import { Typography } from '@material-svelte/typography';
  import logo from '../../static/logo.svg';
</script>

<img src={logo} alt="material-svelte logo" />
<Typography variant="h4">Welcome to material-svelte</Typography>
<Typography variant="body1">A Component-Library for Svelte.</Typography>
<div class="links">
  <Button href="https://example.material-svelte.dev">See it in action</Button>
  <Button href="https://storybook.material-svelte.dev">
    See the storybook
  </Button>
</div>

<style>
  img {
    height: 50%;
  }

  .links {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
</style>
