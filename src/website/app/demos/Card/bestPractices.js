/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../utils';
import Card, { CardBlock, CardTitle, CardImage } from '../../../../Card';

const CardList = createStyledComponent('div', ({ theme }) => ({
  '& > div': {
    marginBottom: theme.space_stack_sm
  }
}));

export default {
  card: [
    {
      type: 'do',
      title: 'Use a Card',
      example: (
        <Card>
          <CardImage src="/images/500x281.png" alt="gradient placeholder" />
          <CardTitle minor subtitle="Card subtitle">
            Card Title
          </CardTitle>
          <CardBlock>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          </CardBlock>
        </Card>
      ),
      description:
        'Use a Card when you have different kinds of related content representing one data object.'
    },
    {
      type: 'dont',
      title: `use a Card when a list item would do`,
      example: (
        <CardList>
          <Card>
            <CardTitle>Friedrich Mohs</CardTitle>
          </Card>
          <Card>
            <CardTitle>Marie Tharp</CardTitle>
          </Card>
          <Card>
            <CardTitle>Alfred Wegener</CardTitle>
          </Card>
        </CardList>
      ),
      description:
        'Cards group elements. Using a List for single pieces of information is a more efficent design.'
    }
  ],
  cardBlock: [
    {
      type: 'do',
      title: 'use the CardBlock component',
      example: (
        <Card>
          <CardTitle>Card Title</CardTitle>
          <CardBlock>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
            vulputate interdum sollicitudin.
          </CardBlock>
        </Card>
      ),
      description:
        'Use the CardBlock component to add formatting to content in your Cards.'
    },
    {
      type: 'dont',
      title: 'forget to use a CardBlock',
      example: (
        <Card>
          <CardTitle minor>Minor Card Title</CardTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
            vulputate interdum sollicitudin.
          </p>
          <img src="/images/200x200.png" alt="gradient placeholder" />
        </Card>
      ),
      description:
        'Content placed into a Card outside the CardBlock will not have formatting applied.'
    }
  ],
  cardImage: [
    {
      type: 'do',
      title: 'use the CardImage component',
      example: (
        <Card>
          <CardImage src="/images/690x690.png" alt="gradient placeholder" />
          <CardTitle minor>Minor Card Title</CardTitle>
          <CardBlock>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
            vulputate interdum sollicitudin.
          </CardBlock>
        </Card>
      ),
      description:
        'Use the CardImage component with `src` and `alt` attributes.'
    },
    {
      type: 'dont',
      title: 'put multiple images loose in a Card',
      example: (
        <Card>
          <img src="/images/125x125.png" alt="gradient placeholder" />
          <img src="/images/125x125.png" alt="gradient placeholder" />
          <CardTitle minor>Minor Card Title</CardTitle>
          <CardBlock>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
            vulputate interdum sollicitudin.
          </CardBlock>
        </Card>
      ),
      description:
        'Using regular `<img />` tags will result in unformatted content.'
    }
  ],
  cardTitle: [
    {
      type: 'do',
      title: 'use the CardTitle component',
      example: (
        <Card>
          <CardTitle minor>Minor Card Title</CardTitle>
          <CardBlock>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
            vulputate interdum sollicitudin.
          </CardBlock>
        </Card>
      ),
      description: 'Use the CardTitle component to add headings to your Cards.'
    },
    {
      type: 'dont',
      title: 'use custom heading sizes',
      example: (
        <Card>
          <h1>Heading element</h1>
          <CardBlock>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis pretium massa. Aliquam erat volutpat.
          </CardBlock>
        </Card>
      ),
      description:
        'Regular `<h1>, <h2>` etc. will not be formatted automatically.'
    }
  ]
};
