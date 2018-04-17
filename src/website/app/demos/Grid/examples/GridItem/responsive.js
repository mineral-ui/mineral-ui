/* @flow */
import GridItem from '../../components/GridItem';
import Grid from '../../components/Grid';
import responsiveInstructions from '../../../Box/components/responsiveInstructions';

export default {
  id: 'responsive',
  title: 'Responsive',
  description: `GridItem's [\`span\`](#span) can be responsive:

${responsiveInstructions}

The code in the example below exhibits the following behavior:

1. When the viewport is less than 800px wide, it will display each GridItem
   full-width, which will stack them.
1. When the viewport is at least 800px wide, it will display the first item
   spanning 2 columns, the second spanning 4 columns, and the third, 6 columns.

<Callout title="Heads Up">
  <p key={0}>
    Notice there is no <code key={0}>breakpoints</code> prop defined for each
    GridItem below. <a href="/components/grid" key={1}>Grid</a> will
    automatically pass along any breakpoints defined to its GridItem children.
  </p>
</Callout>`,
  scope: { Grid, GridItem },
  source: `
    <Grid breakpoints={[800]}>
      <GridItem span={[12, 2]}>A</GridItem>
      <GridItem span={[12, 4]}>B</GridItem>
      <GridItem span={[12, 6]}>C</GridItem>
    </Grid>`
};
