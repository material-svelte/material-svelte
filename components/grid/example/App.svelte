<script>
  import Grid from '../src/Grid.svelte';
  import GridItem from '../src/GridItem.svelte';
</script>

<div class="wrap">
  <Grid>
    <GridItem size={12}>size=12</GridItem>

    <GridItem size={6}>
      <div style="height: 50px">size=6</div>
    </GridItem>
    <GridItem size={6}>size=6</GridItem>

    <GridItem size={3}>size=3</GridItem>
    <GridItem size={3}>size=3</GridItem>
    <GridItem size={3}>size=3</GridItem>
    <GridItem size={3}>size=3</GridItem>
  </Grid>

  <Grid>
    <GridItem size="auto">auto</GridItem>
    <GridItem size={6}>size=6</GridItem>
    <GridItem size="auto">auto</GridItem>
  </Grid>

  <Grid justify="space-evenly">
    <GridItem>
      <div class="cell" style=" font-size: 1em;padding: 10px 0;">1</div>
    </GridItem>
    <GridItem>
      <div class="cell" style=" font-size: 2em;padding: 20px 0;">2</div>
    </GridItem>
    <GridItem>
      <div class="cell" style=" font-size: 3em;padding: 30px 0;">3</div>
    </GridItem>
  </Grid>

  <Grid>
    <GridItem xsmall={12}>xsmall=12</GridItem>
    <GridItem xsmall={12} small={6}>xsmall=12 small=6</GridItem>
    <GridItem xsmall={12} small={6}>xsmall=12 small=6</GridItem>
    <GridItem xsmall={6} small={3}>xsmall=6 small=3</GridItem>
    <GridItem xsmall={6} small={3}>xsmall=6 small=3</GridItem>
    <GridItem xsmall={6} small={3}>xsmall=6 small=3</GridItem>
    <GridItem xsmall={6} small={3}>xsmall=6 small=3</GridItem>
  </Grid>

  <Grid gutters="12px" align="stretch">
    <GridItem xsmall={12} small={6} nested>
      <Grid margins="0px" gutters="12px">
        <GridItem size={6}>6</GridItem>
        <GridItem size={6}>6</GridItem>
        <GridItem size={3}>3</GridItem>
        <GridItem size={3}>3</GridItem>
        <GridItem size={3}>3</GridItem>
        <GridItem size={3}>3</GridItem>
      </Grid>
    </GridItem>
    <GridItem xsmall={12} small={6}>xsmall=12 small=6</GridItem>
    <GridItem xsmall={12} small={6}>xsmall=12 small=6</GridItem>
    <GridItem xsmall={12} small={6}>xsmall=12 small=6</GridItem>
  </Grid>
</div>

<style>
  .cell {
    background-color: #f90;
    box-sizing: border-box;
    height: 100%;
    width: 50px;
  }
</style>
