<script lang="ts">
  import { getContext } from 'svelte';
  import { Grid, GridItem } from '@material-svelte/grid';

  const { title } = getContext('$layout');
  title.set('Grid');
</script>

<Grid>
  <GridItem size={12}>
    <div>size=12</div>
  </GridItem>

  <GridItem size={6}>
    <div style="height: 100px">size=6</div>
  </GridItem>
  <GridItem size={6}>
    <div>size=6</div>
  </GridItem>

  <GridItem size={3}><div>size=3</div></GridItem>
  <GridItem size={3}><div>size=3</div></GridItem>
  <GridItem size={3}><div>size=3</div></GridItem>
  <GridItem size={3}><div>size=3</div></GridItem>
</Grid>

<Grid>
  <GridItem size="auto"><div>auto</div></GridItem>
  <GridItem size={6}><div>size=6</div></GridItem>
  <GridItem size="auto"><div>auto</div></GridItem>
</Grid>

<Grid>
  <GridItem>
    <div class="cell" style="font-size: 1em; padding: 10px 0">1</div>
  </GridItem>
  <GridItem>
    <div class="cell" style="font-size: 2em; padding: 20px 0">2</div>
  </GridItem>
  <GridItem>
    <div class="cell" style="font-size: 3em; padding: 30px 0">3</div>
  </GridItem>
</Grid>

<Grid>
  <GridItem xsmall={12}><div>xsmall=12</div></GridItem>
  <GridItem xsmall={12} small={6}><div>xsmall=12 small=6</div></GridItem>
  <GridItem xsmall={12} small={6}><div>xsmall=12 small=6</div></GridItem>
  <GridItem xsmall={6} small={3}><div>xsmall=6 small=3</div></GridItem>
  <GridItem xsmall={6} small={3}><div>xsmall=6 small=3</div></GridItem>
  <GridItem xsmall={6} small={3}><div>xsmall=6 small=3</div></GridItem>
  <GridItem xsmall={6} small={3}><div>xsmall=6 small=3</div></GridItem>
</Grid>

<Grid align="stretch">
  <GridItem size={6} xsmall={12} nested>
    <Grid margins="0px">
      <GridItem size={6}><div>size=6</div></GridItem>
      <GridItem size={6}><div>size=6</div></GridItem>
      <GridItem size={4}><div>size=4</div></GridItem>
      <GridItem size={4}><div>size=4</div></GridItem>
      <GridItem size={4}><div>size=4</div></GridItem>
    </Grid>
  </GridItem>
  <GridItem xsmall={12} small={6}><div>xsmall=12 small=6</div></GridItem>
</Grid>

<style>
  div {
    align-items: center;
    background-color: #bbb;
    display: flex;
    justify-content: center;
    padding: 16px;
  }
  .cell {
    background-color: #f90;
    box-sizing: border-box;
    height: 100%;
    width: 50px;
  }
</style>
