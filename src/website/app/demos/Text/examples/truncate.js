/* @flow */
import Text from '../../../../../library/Text';

export default {
  id: 'truncate',
  title: 'Truncate',
  description: `You can truncate Text with an ellipsis. Passing \`true\` will
apply a max-width of \`'100%'\`, passing a number will apply it in pixels, and
strings (\`'50%', '15em'\`) are passed directly. Note that the \`element\` must
be block-level (like the default \`'p'\`) for this to display correctly.`,
  scope: { Text },
  source: `
    <div>
      <Text truncate>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
        id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.
      </Text>
      <Text truncate={200}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
        id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.
      </Text>
      <Text truncate="50%">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus
        id dolor maximus eleifend nec in nunc. Integer quis lacinia leo.
      </Text>
    </div>`
};
