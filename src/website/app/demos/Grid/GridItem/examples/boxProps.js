/* @flow */
import GridItem from '../../common/DemoGridItem';
import Grid from '../../common/DemoGrid';

export default {
  id: 'box-props',
  title: 'Box Props',
  description: `Because GridItem composes the [Box](/components/box) component,
it accepts any of [Box's props](/components/box#props), **except** \`width\` (use
[\`span\`](#span), instead).`,
  scope: { Grid, GridItem },
  source: `
    <Grid>
      <GridItem>A</GridItem>
      <GridItem padding="lg">B</GridItem>
      <GridItem>C</GridItem>
    </Grid>`
};
