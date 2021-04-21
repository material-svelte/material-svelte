<script lang="ts">
  import Breakpoint from '../src/Breakpoint.svelte';
</script>

<Breakpoint at="small" let:matches>
  {#if matches}
    i'm at small
  {/if}
</Breakpoint>

<Breakpoint from="small" let:matches>
  {#if matches}
    i'm from small
  {/if}
</Breakpoint>

<Breakpoint to="small" let:matches>
  {#if matches}
    i'm to small
  {/if}
</Breakpoint>

<Breakpoint from="small" to="large" let:matches>
  {#if matches}
    i'm between small and large
  {/if}
</Breakpoint>
