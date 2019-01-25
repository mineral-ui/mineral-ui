/* @flow */
import Box from '../../common/DemoBox';

export default {
  id: 'element',
  title: 'Element',
  description: `Change the rendered element for Box with the
[\`as prop\`](/styling#customization-techniques-try-theming-first-{{8}}-{{14}}-prop).`,
  scope: { Box },
  source: `
    <Box as="section">This renders as a section, instead of a div.</Box>`
};
