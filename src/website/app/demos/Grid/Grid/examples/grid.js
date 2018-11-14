/* @flow */
import GridItem from '../../common/DemoGridItem';
import Grid from '../../common/DemoGrid';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Use Grid and [GridItem](/components/grid-item) to lay out
components in a columnar fashion.`,
  scope: { Grid, GridItem },
  source: `
    <Grid>
      <GridItem>A</GridItem>
      <GridItem>B</GridItem>
      <GridItem>C</GridItem>
    </Grid>`
};
