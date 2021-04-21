<script lang="ts">
  import { onMount } from 'svelte';
  import { BreakpointObserver } from '@material-svelte/breakpoint-tools';
  import config from '$material-svelte-config';

  export let at: string | null = null;
  export let from: string | null = null;
  export let to: string | null = null;

  let _matches = false;

  onMount(() => {
    const observer = new BreakpointObserver({
      breakpoints: config.breakpoints,
    });
    if (at !== null || from === to) {
      observer.at(at || from, (matches) => {
        _matches = matches;
      });
    } else if (from !== null && to !== null) {
      observer.between(from, to, (matches) => {
        _matches = matches;
      });
    } else if (from !== null) {
      observer.from(from, (matches) => {
        _matches = matches;
      });
    } else if (to !== null) {
      observer.to(to, (matches) => {
        _matches = matches;
      });
    }
  });
</script>

<slot matches={_matches} />
