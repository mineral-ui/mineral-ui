/* @flow */
import { mineralTheme, ThemeProvider } from '../../../../../../library/themes';
import IconCloud from 'mineral-ui-icons/IconCloud';
import Button from '../../../../../../library/Button';
import Card, { CardActions, CardBlock } from '../../../../../../library/Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsumRtl';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  backgroundColor: mineralTheme.color_gray_10,
  description: `CardActions reverses its alignment when the \`direction\` theme
variable is set to \`rtl\` (right-to-left).`,
  scope: {
    Button,
    Card,
    CardActions,
    CardBlock,
    loremIpsum,
    DemoLayout,
    IconCloud,
    ThemeProvider
  },
  source: `
    <DemoLayout dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <Card>
          <CardBlock>{loremIpsum}</CardBlock>
          <CardActions>
            <Button>زر واحد</Button>
            <Button iconStart={<IconCloud />}>زر اثنين</Button>
          </CardActions>
        </Card>
      </ThemeProvider>
    </DemoLayout>`
};
