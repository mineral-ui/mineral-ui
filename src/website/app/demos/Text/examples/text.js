/* @flow */
import IconCloud from 'mineral-ui-icons/IconCloud';
import Text from '../../../../../library/Text';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Text renders content with the correct styles and semantics.
Text can include complex content, such as an [Icon](/components/icon), and can
be rendered as any HTML element.`,
  scope: { IconCloud, Text },
  source: `
    <Text>
      Lorem ipsum <IconCloud size="large" /> dolor sit amet, consectetur
      adipiscing elit. Sed non purus id dolor maximus eleifend nec in nunc.
      Integer quis lacinia leo, in suscipit orci. Donec enim augue, vehicula vel
      enim a, vestibulum tempus nunc.
    </Text>`
};
