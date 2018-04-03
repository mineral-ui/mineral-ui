/* @flow */
import React from 'react';
import Text from '../../../../library/Text';

export default [
  {
    type: 'do',
    description: `Use a
  [logical order](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#Usage_notes)
  for the headings in your app.`,
    example: (
      <div>
        <Text element="h1">Heading 1</Text>
        <Text>
          This is a paragraph. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Quisque molestie eros at nisl rhoncus, et condimentum
          dui elementum.
        </Text>
        <Text element="h2">Heading 2</Text>
        <Text>
          This is a paragraph. Praesent gravida metus at scelerisque ultrices.
          Suspendisse at facilisis massa.
        </Text>
      </div>
    )
  },
  {
    type: 'do',
    description: `Use the prose \`appearance\` for long blocks of text content,
to improve the reading experience.`,
    example: (
      <div>
        <Text element="h1">Title</Text>
        <Text appearance="prose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          molestie eros at nisl rhoncus, et condimentum dui elementum. Praesent
          gravida metus at scelerisque ultrices. Suspendisse at facilisis massa.
          Integer eleifend eleifend nibh posuere interdum. Sed eu nisl eu lectus
          condimentum ultricies id et sapien.
        </Text>
        <Text appearance="prose">
          Mauris vulputate justo nec velit fringilla, sed convallis elit
          hendrerit. Sed at viverra nibh. Maecenas pharetra turpis tempor velit
          viverra, ac commodo elit iaculis. Sed finibus ultricies nisl non
          dapibus. Nunc ut ullamcorper nulla, sit amet tempus turpis.
        </Text>
      </div>
    )
  },
  {
    type: 'do',
    description: `Use the mouse \`appearance\` for brief blocks of content when
you need to conserve space or display minor information.`,
    example: (
      <div>
        <Text appearance="mouse">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          molestie eros at nisl rhoncus, et condimentum dui elementum. Praesent
          gravida metus at scelerisque ultrices.
        </Text>
        <Text appearance="mouse">
          Suspendisse at facilisis massa. Integer eleifend eleifend nibh posuere
          interdum. Sed eu nisl eu lectus condimentum ultricies id et sapien.
        </Text>
      </div>
    )
  },
  {
    type: 'dont',
    description: `Don't use font weight in place of semantic meaning. Use a
heading \`element\` or a 'strong' \`element\` instead.`,
    example: (
      <div>
        <Text fontWeight="extraBold">Not a real heading</Text>
        <Text>
          This is a paragraph. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Quisque molestie eros at nisl rhoncus, et condimentum
          dui elementum.
        </Text>
      </div>
    )
  }
];
