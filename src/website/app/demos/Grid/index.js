/* @flow */
import React from 'react';
import bestPractices from './bestPractices';

import gridExamples from './examples/Grid';
import gridItemExamples from './examples/GridItem';

const gridDoc = require('!!react-docgen-loader!../../../../library/Grid/Grid');
const gridItemDoc = require('!!react-docgen-loader!../../../../library/Grid/GridItem');

export default [
  {
    bestPractices: bestPractices.grid,
    doc: gridDoc,
    examples: gridExamples,
    propsComment: (
      <div>
        <p>
          In addition to the props above, Grid also accepts all props for{' '}
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
    slug: 'grid',
    title: 'Grid',
    whenHowToUse: `Grid, together with [GridItem](/components/grid-item),
provides an easy way to align components to a columnar layout. With configurable
gutters, alignment options, and optionally responsive properties, it is powerful
and flexible enough to be the foundation of your app's layout.

Grid is a simpler version of [Flex](/components/flex), with the ability to set
the number of columns used when calculating item widths. If you need more
flexibility for your layout, or you do not need to align to a columnar layout,
use Flex instead.`
  },
  {
    bestPractices: bestPractices.gridItem,
    doc: gridItemDoc,
    examples: gridItemExamples,
    propsComment: (
      <div>
        <p>
          In addition to the props above, GridItem also accepts all props for{' '}
          <a href="/components/box" key={0}>
            Box
          </a>, <strong key={1}>except</strong> <code key={2}>width</code>.
        </p>
        <p>
          <em key={1}>
            Undocumented properties will be applied to the root element.
          </em>
        </p>
      </div>
    ),
    slug: 'grid-item',
    title: 'GridItem',
    whenHowToUse: `GridItem, together with [Grid](/components/grid),
provides an easy way to align components to a columnar layout. With optionally
responsive properties, it is powerful and flexible enough to be the foundation
of your app's layout.

GridItem is a simpler version of [FlexItem](/components/flex-item), with the
ability to set widths equal to column spans. If you need more flexibility for
your layout, or you do not need to align to a columnar layout, use FlexItem
instead.`
  }
];
