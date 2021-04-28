<script lang="ts">
  import { onMount } from 'svelte';
  import { BreakpointObserver } from '@material-svelte/breakpoint-tools';
  import config from '$material-svelte-config';

  /** breakpoint at which to match */
  export let at: string | null = null;
  /** breakpoint from which to match */
  export let from: string | null = null;
  /** breakpoint to which to match */
  export let to: string | null = null;

  let _matches = false;

  onMount(() => {
    const observer = new BreakpointObserver({
      breakpoints: config.breakpoints,
    });
    if (at) {
      observer.at(at, (matches: boolean) => {
        _matches = matches;
      });
    } else if (from && to) {
      observer.between(from, to, (matches: boolean) => {
        _matches = matches;
      });
    } else if (from) {
      observer.from(from, (matches: boolean) => {
        _matches = matches;
      });
    } else if (to) {
      observer.to(to, (matches: boolean) => {
        _matches = matches;
      });
    }
  });
</script>

<slot matches={_matches} />
