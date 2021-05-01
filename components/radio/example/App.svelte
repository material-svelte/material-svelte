<script lang="ts">
  import Radio from '../src/Radio.svelte';

  let group = '1';
</script>

GROUP: {group}
<div>
  <Radio bind:group value="1" checkedColor="red" />
  <Radio bind:group value="2" />
  <Radio bind:group value="3" />
  <Radio bind:group value="4" disabled />
  <Radio bind:group value="5">label</Radio>
</div>

<style>
  div {
    left: 50%;
    position: absolute;
    top: 50%;
  }
</style>
