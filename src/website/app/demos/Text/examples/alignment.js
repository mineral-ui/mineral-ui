/* @flow */
import Text from '../../../../../library/Text';
import { ThemeProvider } from '../../../../../library/themes';

export default {
  id: 'alignment',
  title: 'Alignment',
  description: `Set the horizontal alignment of your text content with the
\`align\` prop.`,
  scope: { Text, ThemeProvider },
  source: `
    <div>
      <Text align="end">Align End</Text>
      <Text align="center">Align Center</Text>
      <Text align="justify">
        Align Justify: justified text should stretch the width of the container
        for each separate line. This example contains words of many lengths to
        display that lines are justified correctly. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Curabitur mattis luctus nunc, in posuere
        odio viverra et. Quisque aliquam tincidunt ante ac mollis. Vestibulum
        et massa eget velit ultricies feugiat non non augue. Nulla nisl augue,
        ullamcorper ac dui.
      </Text>
    </div>`
};
