/* @flow */
import Text from '../../../../../library/Text';

export default {
  id: 'appearance',
  title: 'Appearance',
  description: 'Apply predefined styles with the `appearance` prop.',
  scope: { Text },
  source: `
    <div>
      <Text element="h1" appearance="h3">Heading 1 which looks like a Heading 3</Text>
      <Text appearance="prose">
        Prose (Long Form) Paragraph. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Quisque molestie eros at nisl rhoncus, et condimentum
        dui elementum. Praesent gravida metus at scelerisque ultrices.
      </Text>
      <Text appearance="mouse">
        Mousetype Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Quisque molestie eros at nisl rhoncus, et condimentum dui
        elementum. Praesent gravida metus at scelerisque ultrices. Suspendisse
        at facilisis massa. Integer eleifend eleifend nibh posuere interdum.
      </Text>
    </div>`
};
