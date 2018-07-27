/* @flow */
import { ThemeProvider } from '../../../../../../library/themes';
import FlexItem from '../../components/FlexItem';
import Flex from '../../components/Flex';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `Flex reverses its alignment when the \`direction\` theme
variable is set to \`rtl\` (right-to-left).`,
  scope: { Flex, FlexItem, ThemeProvider },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <Flex>
          <FlexItem>ا</FlexItem>
          <FlexItem>ب</FlexItem>
          <FlexItem marginStart="auto">د</FlexItem>
        </Flex>
      </ThemeProvider>
    </div>`
};
