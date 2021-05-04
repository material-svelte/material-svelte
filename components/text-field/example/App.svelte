<script>
  import { mdiCloseCircleOutline, mdiCalendar } from '@mdi/js';
  import { Icon } from '@material-svelte/icon';
  import TextField from '../src/TextField.svelte';
</script>

<svelte:head>
  <link href="https://unpkg.com/ress/dist/ress.min.css" rel="stylesheet" />
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic"
    rel="stylesheet"
  />
</svelte:head>

<TextField />
<br />
<br />
<TextField label="Label" />
<br />
<br />
<TextField label="Label" placeholder="Placeholder" />
<br />
<br />
<TextField
  label="Label"
  placeholder="Placeholder"
  helperText="all work no play"
/>
<br />
<br />
<TextField label="Label">
  <Icon slot="leadingIcon" path={mdiCalendar} />
  <Icon slot="trailingIcon" path={mdiCloseCircleOutline} />
</TextField>
<br />
<br />
<TextField label="Label" placeholder="Placeholder">
  <Icon slot="leadingIcon" path={mdiCalendar} />
  <Icon slot="trailingIcon" path={mdiCloseCircleOutline} />
</TextField>
<br />
<br />
<TextField value="test" readonly />
<br />
<br />
<TextField maxlength={10} />
<br />
<br />
<TextField label="Label" value="Value" disabled />
<br />
<br />
<TextField label="Label" placeholder="Placeholder" dense>
  <Icon slot="leadingIcon" path={mdiCalendar} />
  <Icon slot="trailingIcon" path={mdiCloseCircleOutline} />
</TextField>
<br />
<br />

<TextField label="Label" placeholder="Placeholder" helperText="Error" error>
  <Icon slot="leadingIcon" path={mdiCalendar} />
  <Icon slot="trailingIcon" path={mdiCloseCircleOutline} />
</TextField>
<br />
<br />

<TextField variant="outlined" />
<br />
<br />
<TextField variant="outlined" label="Label" />
<br />
<br />
<TextField variant="outlined" label="Label" placeholder="Placeholder" />
<br />
<br />
<TextField
  variant="outlined"
  label="Label"
  placeholder="Placeholder"
  helperText="all work no play"
/>
<br />
<br />
<TextField variant="outlined" label="Label">
  <Icon slot="leadingIcon" path={mdiCalendar} />
  <Icon slot="trailingIcon" path={mdiCloseCircleOutline} />
</TextField>
<br />
<br />
<TextField variant="outlined" label="Label" placeholder="Placeholder">
  <Icon slot="leadingIcon" path={mdiCalendar} />
  <Icon slot="trailingIcon" path={mdiCloseCircleOutline} />
</TextField>
<br />
<br />
<TextField variant="outlined" label="Label" value="Value" disabled />
<br />
<br />

<TextField variant="outlined" label="Label" placeholder="Placeholder" disabled>
  <Icon slot="leadingIcon" path={mdiCalendar} />
  <Icon slot="trailingIcon" path={mdiCloseCircleOutline} />
</TextField>
<br />
<br />
<TextField variant="outlined" label="Label" placeholder="Placeholder" dense>
  <Icon slot="leadingIcon" path={mdiCalendar} />
  <Icon slot="trailingIcon" path={mdiCloseCircleOutline} />
</TextField>
<br />
<br />
<TextField
  variant="outlined"
  label="Label"
  placeholder="Placeholder"
  helperText="Error"
  error
>
  <Icon slot="leadingIcon" path={mdiCalendar} />
  <Icon slot="trailingIcon" path={mdiCloseCircleOutline} />
</TextField>
<br />
<br />
