/* @flow */
import Box from '../../../Box/common/DemoBox';
import GridItem from '../../common/DemoGridItem';
import Grid from '../../common/DemoGrid';

export default {
  id: 'box-props',
  title: 'Box Props',
  description: `Because Grid composes the [Box](/components/box) component, it
accepts any of [Box's props](/components/box#props).`,
  scope: { Box, Grid, GridItem },
  source: `
    <div>
      {/* You can apply Box props directly to Grid: */}
      <Grid padding="lg" width={1/2}>
        <GridItem>A</GridItem>
        <GridItem>B</GridItem>
        <GridItem>C</GridItem>
      </Grid>

      {/* Don't wrap Grid in a Box to apply spacing/sizing props:
        <Box padding="lg" width={1/2}>
          <Grid>
            <GridItem>A</GridItem>
            <GridItem>B</GridItem>
            <GridItem>C</GridItem>
          </Grid>
        </Box>
      */}
    </div>`
};
