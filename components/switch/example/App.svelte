<script>
  import Switch from '../src/Switch.svelte';
  let checked = false;
</script>

<Switch
  on:change={(e) => {
    console.log('changed', e);
  }}
  bind:checked
/>
Checked: {checked}
<Switch>label</Switch>
<br />
<Switch checked>checked</Switch>
<br />
<Switch disabled>disabled</Switch>
<br />
<Switch checked disabled>checked disabled</Switch>
