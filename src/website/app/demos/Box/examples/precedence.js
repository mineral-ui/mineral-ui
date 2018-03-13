/* @flow */
import Box from '../components/Box';

export default {
  id: 'precedence',
  title: 'Precedence',
  hideFromProd: true,
  description: `In order of precedence, Box accepts the following:

1. \`margin[Bottom|Left|Right|Top]\`
1. \`marginStart\` (left, for left-to-right languages; right, for RTL languages)
1. \`marginEnd\` (right, for left-to-right languages; left, for RTL languages)
1. \`marginHorizontal\` (left & right)
1. \`marginVertical\` (top & bottom)
1. \`margin\` (all sides)`,
  scope: { Box },
  source: `
    <div>
      <Box margin={10} marginHorizontal={20} marginStart={30}>10 20 10 30</Box>
      <Box margin={10} marginHorizontal={20} marginEnd={30}>10 30 10 20</Box>
      <Box margin={10} marginHorizontal={20} marginStart={30} marginLeft={40}>10 20 10 40</Box>
      <Box margin={10} marginHorizontal={20} marginEnd={30} marginRight={40}>10 40 10 20</Box>
      <Box margin={10} marginVertical={20} marginTop={40}>40 10 20 10</Box>
      <Box margin={10} marginVertical={20} marginBottom={40}>20 10 40 10</Box>
    </div>
  `
};
