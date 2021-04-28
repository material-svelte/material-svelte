<script>
  import { Icon } from '@material-svelte/icon';
  import { mdiHome } from '@mdi/js';
  import Button from '../src/Button.svelte';
</script>

<svelte:head>
  <link href="https://unpkg.com/ress/dist/ress.min.css" rel="stylesheet" />
</svelte:head>

<div style="display: flex; margin: 16px 0;">
  <Button variant="contained">Click Me</Button>
  <Button variant="outlined">Click Me</Button>
  <Button variant="text">Click Me</Button>
</div>
<div style="display: flex; margin: 16px 0;">
  <Button variant="contained">
    <Icon slot="icon" path={mdiHome} />
  </Button>
  <Button variant="outlined">
    <Icon slot="icon" path={mdiHome} />
  </Button>
  <Button variant="text">
    <Icon slot="icon" path={mdiHome} />
  </Button>
</div>
<div style="display: flex; margin: 16px 0;">
  <Button variant="contained">
    <Icon slot="icon" path={mdiHome} />
    Click Me
  </Button>
  <Button variant="outlined">
    <Icon slot="icon" path={mdiHome} />
    Click Me
  </Button>
  <Button variant="text">
    <Icon slot="icon" path={mdiHome} />
    Click Me
  </Button>
</div>
<div style="display: flex; margin: 16px 0;">
  <Button variant="fab" />
  <Button variant="fab" mini />
  <Button variant="fab">Click Me</Button>
</div>
<div style="display: flex; margin: 16px 0;">
  <Button variant="fab">
    <Icon slot="icon" path={mdiHome} />
  </Button>
  <Button variant="fab" mini>
    <Icon slot="icon" path={mdiHome} />
  </Button>
  <Button variant="fab">
    <Icon slot="icon" path={mdiHome} />
    Click Me
  </Button>
</div>
