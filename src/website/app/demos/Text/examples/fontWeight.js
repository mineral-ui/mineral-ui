/* @flow */
import Text from '../../../../../library/Text';

export default {
  id: 'font-weight',
  title: 'Font Weight',
  description: `Text is available in the following font weights. You can apply a
custom font weight by passing in a number.`,
  scope: { Text },
  source: `
    <div>
      <Text fontWeight="semiBold">Semi-bold Text</Text>
      <Text fontWeight="bold">Bold Text</Text>
      <Text fontWeight="extraBold">Extra-bold Text</Text>
      <Text fontWeight={300}>Light Text</Text>
    </div>`
};
