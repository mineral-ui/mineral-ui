/* @flow */
import IconFormatBold from 'mineral-ui-icons/IconFormatBold';
import IconFormatItalic from 'mineral-ui-icons/IconFormatItalic';
import IconFormatUnderlined from 'mineral-ui-icons/IconFormatUnderlined';
import Button from '../../../../../library/Button';
import ButtonGroup from '../../../../../library/ButtonGroup';
import { ThemeProvider } from '../../../../../library/themes';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `ButtonGroups support right-to-left (RTL) languages. Buttons
within ButtonGroup behave like [Button](/components/button#rtl) (Icons are
reversed when the \`direction\` theme variable is set to \`rtl\`. A subset of
[Icons that convey directionality](/components/icon#rtl) will be reversed).`,
  scope: {
    Button,
    ButtonGroup,
    IconFormatBold,
    IconFormatItalic,
    IconFormatUnderlined,
    ThemeProvider
  },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <ButtonGroup aria-label="Format text" mode="checkbox">
          <Button iconEnd={<IconFormatBold />}>بالخط العريض</Button>
          <Button iconEnd={<IconFormatItalic />}>مائل</Button>
          <Button iconEnd={<IconFormatUnderlined />}>أكد</Button>
        </ButtonGroup>
      </ThemeProvider>
    </div>`
};
