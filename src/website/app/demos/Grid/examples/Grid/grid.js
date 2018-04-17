/* @flow */
import GridItem from '../../components/GridItem';
import Grid from '../../components/Grid';

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
