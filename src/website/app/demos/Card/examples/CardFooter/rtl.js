/* @flow */
import { mineralTheme, ThemeProvider } from '../../../../../../library/themes';
import Card, { CardBlock, CardFooter } from '../../../../../../library/Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsumRtl';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  backgroundColor: mineralTheme.color_gray_10,
  description: `CardFooter reverses its alignment when the \`direction\` theme
variable is set to \`rtl\` (right-to-left).`,
  scope: {
    Card,
    CardFooter,
    CardBlock,
    loremIpsum,
    DemoLayout,
    ThemeProvider
  },
  source: `
    <DemoLayout dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <Card>
          <CardBlock>{loremIpsum}</CardBlock>
          <CardFooter
            title="تذييل العنوان"
            expandable
            triggerTitle={isOpen => isOpen ? 'تصغير المحتويات' : 'قم بتوسيع المحتويات'}>
            <CardBlock>{loremIpsum}</CardBlock>
          </CardFooter>
        </Card>
      </ThemeProvider>
    </DemoLayout>`
};
