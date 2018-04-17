/* @flow */
import DemoLayout from '../../components/DemoLayout';
import GridItem from '../../components/GridItem';
import Grid from '../../components/Grid';
import renderGridItems from '../../components/renderGridItems';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Use [Grid](/components/grid) and GridItem to lay out
components in a columnar fashion. With no other props applied, GridItem will
fill the remaining space in a Grid equally with other GridItems.

_Note that the last row below, in which 5 GridItems are placed in a Grid, does
not line up with the [12 column default layout](/components/grid#columns),
because 12 is not divisible by 5._`,
  scope: { DemoLayout, Grid, GridItem, renderGridItems },
  source: `
    <DemoLayout>
      <Grid>
        <GridItem>A</GridItem>
        <GridItem>B</GridItem>
      </Grid>
      <Grid>
        <GridItem>A</GridItem>
        <GridItem>B</GridItem>
        <GridItem>C</GridItem>
      </Grid>
      <Grid>
        <GridItem>A</GridItem>
        <GridItem>B</GridItem>
        <GridItem>C</GridItem>
        <GridItem>D</GridItem>
      </Grid>
      <Grid>{renderGridItems(12)}</Grid>
      <br />
      <Grid>
        <GridItem>A</GridItem>
        <GridItem>B</GridItem>
        <GridItem>C</GridItem>
        <GridItem>D</GridItem>
        <GridItem>E</GridItem>
      </Grid>
    </DemoLayout>`
};
