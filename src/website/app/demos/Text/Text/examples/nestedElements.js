/* @flow */
import Text from '../../../../../../library/Text';
import Link from '../../../../../../library/Link';

export default {
  id: 'nested-elements',
  title: 'Nested Elements',
  description: `Nested Text components (inside another Text) should render an
appropriate element. Standard HTML elements, like \`strong\` or \`code\`, will
display with expected styles.`,
  hideFromProd: true,
  scope: { Link, Text },
  source: `
    <div>
      <Text appearance="prose">
        This <Text as="strong">strong text</Text> is in a <Text as="code">paragraph</Text>.

        <Text>This <Text>span text</Text> is in a span</Text>

        This text is in a paragraph.

        <Link href="http://example.com"><Text>This link has a span inside</Text></Link>
      </Text>

      <hr />

      <Text appearance="prose" as="div">
        This text is in a div
        <Text>This <Text>span text</Text> is in a paragraph</Text>
      </Text>
    </div>`
};
