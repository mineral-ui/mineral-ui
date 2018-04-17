/* @flow */
import DemoLayout from '../../components/DemoLayout';
import GridItem from '../../components/GridItem';
import Grid from '../../components/Grid';

export default {
  id: 'span',
  title: 'Span',
  description: `The \`span\` prop determines the width of a GridItem, in terms
of the number of columns spanned. Be sure the total \`span\` values add up to
the [number of columns](/components/grid#columns) in the parent Grid.

_Note that the last row below does not line up with the others. This is because
the remaining space of 8 columns ([default 12 columns on the Grid] - [one
GridItem with a \`span\` of 4] = 8) is not divisible by 3 (number of "auto"
GridItems)._`,
  scope: { DemoLayout, Grid, GridItem },
  source: `
    <DemoLayout>
      <Grid>
        <GridItem span={1}>1</GridItem>
        <GridItem span={11}>11</GridItem>
      </Grid>
      <Grid>
        <GridItem span={2}>2</GridItem>
        <GridItem span={10}>10</GridItem>
      </Grid>
      <Grid>
        <GridItem span={3}>3</GridItem>
        <GridItem span={9}>9</GridItem>
      </Grid>
      <Grid>
        <GridItem span={4}>4</GridItem>
        <GridItem span={8}>8</GridItem>
      </Grid>
      <Grid>
        <GridItem span={5}>5</GridItem>
        <GridItem span={7}>7</GridItem>
      </Grid>
      <Grid>
        <GridItem>Auto</GridItem>
        <GridItem>Auto</GridItem>
        <GridItem span={6}>6</GridItem>
        <GridItem>Auto</GridItem>
      </Grid>
      <br />
      <Grid>
        <GridItem>Auto</GridItem>
        <GridItem>Auto</GridItem>
        <GridItem span={4}>4</GridItem>
        <GridItem>Auto</GridItem>
      </Grid>
    </DemoLayout>
  `
};
