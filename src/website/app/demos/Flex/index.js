/* @flow */
import React from 'react';
import bestPractices from './bestPractices';

import flexExamples from './examples/Flex';
import flexItemExamples from './examples/FlexItem';

const flexDoc = require('!!react-docgen-loader!../../../../library/Flex/Flex');
const flexItemDoc = require('!!react-docgen-loader!../../../../library/Flex/FlexItem');

export default [
  {
    bestPractices: bestPractices.flex,
    doc: flexDoc,
    examples: flexExamples,
    propsComment: (
      <div>
        <p>
          In addition to the props above, FlexItem also accepts all props for{' '}
          <a href="/components/box" key={0}>
            Box
          </a>.
        </p>
        <p>
          <em key={1}>
            Undocumented properties will be applied to the root element.
          </em>
        </p>
      </div>
    ),
    slug: 'flex',
    title: 'Flex',
    whenHowToUse: `Flex, together with [FlexItem](/components/flex-item), provides an
easy way to align components next to or on top of one another. With configurable
gutters, many alignment options, and optionally responsive properties, it is
powerful and flexible enough to be the foundation of your app's layout.`
  },
  {
    bestPractices: bestPractices.flexItem,
    doc: flexItemDoc,
    examples: flexItemExamples,
    propsComment: (
      <div>
        <p>
          In addition to the props above, FlexItem also accepts all props for{' '}
          <a href="/components/box" key={0}>
            Box
          </a>.
        </p>
        <p>
          <em key={1}>
            Undocumented properties will be applied to the root element.
          </em>
        </p>
      </div>
    ),
    slug: 'flex-item',
    title: 'FlexItem',
    whenHowToUse: `FlexItem, together with [Flex](/components/flex), provides an easy
way to align components next to or on top of one another. With many alignment
options and optionally responsive properties, it is powerful and flexible enough
to be the foundation of your app's layout.`
  }
];
