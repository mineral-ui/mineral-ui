/* @flow */
import { mineralTheme, ThemeProvider } from '../../../../../../library/themes';
import Avatar from '../../../../../../library/Avatar';
import Card, { CardBlock, CardTitle } from '../../../../../../library/Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsumRtl';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  backgroundColor: mineralTheme.color_gray_10,
  description: `CardTitle reverses its alignment when the \`direction\` theme
variable is set to \`rtl\` (right-to-left).`,
  scope: {
    Avatar,
    Card,
    CardTitle,
    CardBlock,
    loremIpsum,
    DemoLayout,
    ThemeProvider
  },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <DemoLayout>
          <Card>
            <CardTitle
              avatar={<Avatar><img src="/images/avatar.svg" alt="نص بديل" /></Avatar>}
              subtitle="الترجمة هنا">
              عنوان البطاقة
            </CardTitle>
            <CardBlock>{loremIpsum}</CardBlock>
          </Card>
          <Card>
            <CardTitle secondaryText="نص ثانوي">
              عنوان البطاقة
            </CardTitle>
            <CardBlock>{loremIpsum}</CardBlock>
          </Card>
        </DemoLayout>
      </ThemeProvider>
    </div>`
};
