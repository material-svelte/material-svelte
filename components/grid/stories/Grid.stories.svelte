<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Grid, GridItem } from '@material-svelte/grid';

  const meta = {
    title: 'Components/Grid',
    component: Grid,
    parameters: {
      options: { showPanel: true },
      actions: { disabled: true },
    },
    argTypes: {
      direction: {
        table: {
          type: { summary: 'row | row-reverse | column | column-reverse' },
          defaultValue: { summary: 'row' },
        },
        control: {
          type: 'select',
          options: ['row', 'row-reverse', 'column', 'column-reverse'],
        },
      },
      justify: {
        table: {
          type: {
            summary:
              'start | center | end | space-between | space-around | space-evenly',
          },
          defaultValue: { summary: 'center' },
        },
        control: {
          type: 'select',
          options: [
            'start',
            'center',
            'end',
            'space-between',
            'space-around',
            'space-evenly',
          ],
        },
      },
      align: {
        table: {
          type: { summary: 'start | center | end | stretch | baseline' },
          defaultValue: { summary: 'center' },
        },
        control: {
          type: 'select',
          options: ['start', 'center', 'end', 'stretch', 'baseline'],
        },
      },
    },
  };

  const disableAddons = {
    options: { showPanel: false },
    controls: { disabled: true },
  };
</script>

<Meta {...meta} />

<Story name="Playground" let:args>
  <Grid {...args}>
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
</Story>

<Story name="example" parameters={disableAddons}>
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
</Story>

<Story name="breakpoints" parameters={disableAddons}>
  <Grid>
    <GridItem xsmall={12}><div>xsmall=12</div></GridItem>
    <GridItem xsmall={12} small={6}><div>xsmall=12 small=6</div></GridItem>
    <GridItem xsmall={12} small={6}><div>xsmall=12 small=6</div></GridItem>
    <GridItem xsmall={6} small={3}><div>xsmall=6 small=3</div></GridItem>
    <GridItem xsmall={6} small={3}><div>xsmall=6 small=3</div></GridItem>
    <GridItem xsmall={6} small={3}><div>xsmall=6 small=3</div></GridItem>
    <GridItem xsmall={6} small={3}><div>xsmall=6 small=3</div></GridItem>
  </Grid>
</Story>

<Story name="nested" parameters={disableAddons}>
  <Grid>
    <GridItem size={6} nested>
      <Grid margins="0px">
        <GridItem size={6}><div>size=6</div></GridItem>
        <GridItem size={6}><div>size=6</div></GridItem>
        <GridItem size={4}><div>size=4</div></GridItem>
        <GridItem size={4}><div>size=4</div></GridItem>
        <GridItem size={4}><div>size=4</div></GridItem>
      </Grid>
    </GridItem>
    <GridItem size={6}><div>size=6</div></GridItem>
  </Grid>
</Story>

<style>
  div {
    align-items: center;
    background-color: #bbb;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 16px;
  }
  .cell {
    background-color: #f90;
    width: 50px;
  }
</style>
