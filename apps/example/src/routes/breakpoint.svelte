<script lang="ts">
  import { onMount, getContext } from 'svelte';
  import { Breakpoint } from '@material-svelte/breakpoint';
  import { BreakpointObserver } from '@material-svelte/breakpoint-tools';
  import config from '$material-svelte-config';

  const { title } = getContext('$layout');
  title.set('Breakpoint');

  let matchedSliceName: string;
  onMount(() => {
    const observer = new BreakpointObserver({
      breakpoints: config.breakpoints,
    });
    observer.onChange(({ slice, matches }) => {
      console.log('SLICE CHANGED:', slice);
      if (matches) {
        matchedSliceName = slice.name;
      }
    });
    observer.at('small', (matches) => {
      console.log('AT small:', matches);
    });
    observer.from('small', (matches) => {
      console.log('FROM small:', matches);
    });
    observer.to('small', (matches) => {
      console.log('TO small:', matches);
    });
    observer.between('small', 'medium', (matches) => {
      console.log('BETWEEN:', matches);
    });
  });
</script>

<ul>
  {#each Object.keys(config.breakpoints) as breakpoint}
    <li>{breakpoint} - {config.breakpoints[breakpoint]}</li>
  {/each}
</ul>

<Breakpoint at="small" let:matches>
  {#if matches}
    <div>I am small</div>
  {/if}
</Breakpoint>

<Breakpoint from="small" to="medium" let:matches>
  {#if matches}
    <div>I am between small and medium</div>
  {/if}
</Breakpoint>

<div>Matched slice: {matchedSliceName}</div>

<div class="atrule-small">I am small</div>
<div class="atrule-medium">I am medium</div>

<style lang="postcss">
  .atrule-small,
  .atrule-medium {
    display: none;
  }

  @breakpoint at(small) {
    .atrule-small {
      display: block;
    }
  }

  @breakpoint at(medium) {
    .atrule-medium {
      display: block;
    }
  }
</style>
