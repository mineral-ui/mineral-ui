/* @flow */
import { mineralTheme, ThemeProvider } from '../../../../../../library/themes';
import Card, { CardBlock, CardStatus } from '../../../../../../library/Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsumRtl';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  backgroundColor: mineralTheme.color_gray_10,
  description: `CardStatus reverses its alignment when the \`direction\` theme
variable is set to \`rtl\` (right-to-left).`,
  scope: {
    Card,
    CardBlock,
    CardStatus,
    loremIpsum,
    DemoLayout,
    ThemeProvider
  },
  source: `
    <DemoLayout dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <Card>
          <CardBlock>{loremIpsum}</CardBlock>
          <CardStatus variant="danger">غير متوفره</CardStatus>
        </Card>
      </ThemeProvider>
    </DemoLayout>`
};
