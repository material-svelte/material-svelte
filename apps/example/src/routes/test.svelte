<script lang="ts">
  import { getContext } from 'svelte';
  const { title } = getContext('$layout');

  title.set('Test');
</script>

this is test
