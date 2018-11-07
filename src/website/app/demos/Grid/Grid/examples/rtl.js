/* @flow */
import { ThemeProvider } from '../../../../../../library/themes';
import GridItem from '../../common/DemoGridItem';
import Grid from '../../common/DemoGrid';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `Grid reverses its alignment when the \`direction\` theme
variable is set to \`rtl\` (right-to-left).`,
  scope: { Grid, GridItem, ThemeProvider },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <Grid>
          <GridItem>ا</GridItem>
          <GridItem>ب</GridItem>
          <GridItem>د</GridItem>
        </Grid>
      </ThemeProvider>
    </div>`
};
