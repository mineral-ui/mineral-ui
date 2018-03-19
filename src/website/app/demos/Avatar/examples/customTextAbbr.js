/* @flow */
import Avatar from '../../../../../library/Avatar';

export default {
  id: 'custom-text-abbr',
  title: 'Custom Text Abbreviation',
  description: `By default, the first letter of text \`children\` will be used
as the rendered abbreviated text. Pass a string to the \`abbr\` prop to provide
a custom abbreviation.`,
  scope: { Avatar },
  source: `
    <Avatar abbr="B">Dr. Bernard Johnson</Avatar>`
};
