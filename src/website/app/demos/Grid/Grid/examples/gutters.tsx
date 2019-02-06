/* @flow */
import GridItem from '../../common/DemoGridItem';
import DemoLayout from '../../common/DemoLayout';
import Grid from '../../common/DemoGrid';

export default {
  id: 'gutters',
  title: 'Gutters',
  description: `Grid will add a default horizontal gap between items. Use the
\`gutterWidth\` prop to define a different value, including \`0\` to disable
gutters altogether.

_Numbers will be appended with \`px\`. String values will be passed directly._`,
  scope: { DemoLayout, Grid, GridItem },
  source: `
    () => {
      const propValues = [
        'md', // default
        'xl',
        '2.5em',
        50,
        0
      ];

      const renderGrids = () =>
        propValues.map((value, index) => (
          <Grid gutterWidth={value} key={index}>
            <GridItem>A</GridItem>
            <GridItem>B</GridItem>
            <GridItem>C</GridItem>
          </Grid>
        ));

      return <DemoLayout>{renderGrids()}</DemoLayout>;
    }`
};
