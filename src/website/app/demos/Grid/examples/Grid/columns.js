/* @flow */
import DemoLayout from '../../components/DemoLayout';
import GridItem from '../../components/GridItem';
import Grid from '../../components/Grid';
import renderGridItems from '../../components/renderGridItems';

export default {
  id: 'columns',
  title: 'Columns',
  description: `The number of columns used by Grid can be adjusted. This is used
in conjunction with [GridItem's \`span\` prop](/components/grid-item#span).

_In the illustration below, the first and third rows contain identical
GridItems. But the first row has \`columns\` set to 15, while the third uses the
default of 12. Therefore, the GridItem that spans 7 columns lines up nicely in
the first row (15 - 7 = 8, which is neatly divided into two for the remaining
"auto" GridItems), but does not in the third (12 - 7 = 5, which does not neatly
divide into 2)._`,
  scope: { DemoLayout, Grid, GridItem, renderGridItems },
  source: `
    <DemoLayout>
      <Grid columns={15}>
        <GridItem>Auto</GridItem>
        <GridItem span={7}>7</GridItem>
        <GridItem>Auto</GridItem>
      </Grid>
      <Grid columns={15}>{renderGridItems(15)}</Grid>
      <br />
      <Grid>
        <GridItem>Auto</GridItem>
        <GridItem span={7}>7</GridItem>
        <GridItem>Auto</GridItem>
      </Grid>
      <Grid>{renderGridItems(12)}</Grid>
    </DemoLayout>`
};
