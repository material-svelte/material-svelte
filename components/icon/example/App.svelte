<script>
  import Icon from '../src/Icon.svelte';
  import { mdiHome } from '@mdi/js';
</script>

<svelte:head>
  <link href="https://unpkg.com/ress/dist/ress.min.css" rel="stylesheet" />
</svelte:head>

<Icon path={mdiHome} size="24px" color="#000" />
<div style="color: #f00;">
  <Icon path={mdiHome} size="24px" />
</div>
<div style=" height: 50px;width: 50px;">
  <Icon path={mdiHome} color="#000" />
</div>
