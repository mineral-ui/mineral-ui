/* @flow */
import Text from '../../../../../library/Text';

export default {
  id: 'headings',
  title: 'Headings',
  description: `Create a heading with Text by using the \`element\` prop to
apply the appropriate styles and semantics. If you need a heading with styles
that vary from the semantic meaning, e.g. an \`h1\` that looks like an \`h3\`,
you can use the [\`appearance\`](#appearance) prop.`,
  scope: { Text },
  source: `
    <div>
      <Text element="h1">Heading 1</Text>
      <Text element="h2">Heading 2</Text>
      <Text element="h3">Heading 3</Text>
      <Text element="h4">Heading 4</Text>
      <Text element="h5">Heading 5</Text>
      <Text element="h6">Heading 6</Text>
    </div>`
};
