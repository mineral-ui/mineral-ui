/* @flow */
import Box from '../components/Box';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'spacing',
  title: 'Spacing',
  description: `Values for margin & padding
can be a [spacing theme variable](/theming#common-scenarios-theme-structure)
or a custom string or number.

In _order of precedence_, Box accepts the following spacing props:

1. \`margin[Bottom|Left|Right|Top]\`
1. \`marginStart\` (left, for left-to-right languages; right, for RTL languages)
1. \`marginEnd\` (right, for left-to-right languages; left, for RTL languages)
1. \`marginHorizontal\` (left & right)
1. \`marginVertical\` (top & bottom)
1. \`margin\` (all sides)

_Numbers < 1, e.g. \`1/2\`, will be converted to a percentage. Numbers ≥ 1 will
be appended with \`px\`. String values, e.g. \`"4em"\` or \`"20%"\`, will be
passed directly._

The same applies for \`padding\`.`,
  scope: { DemoLayout, Box },
  source: `
    /*
     * Spacing theme variables:
     * 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'
     */
    <DemoLayout>
      <Box>none</Box>
      <Box marginRight="xl">xl</Box>
      <Box marginRight="6em">6em</Box>
      <Box marginRight={120}>120</Box>
      <Box marginRight={1/3}>1/3</Box>
    </DemoLayout>`
};
