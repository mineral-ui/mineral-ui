/* @flow */
import React from 'react';
import bestPractices from './bestPractices';

import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../library/StartEnd/StartEnd');

export default {
  bestPractices,
  doc,
  examples,
  propsComment: (
    <div>
      <p>
        In addition to the props above, StartEnd also accepts all props for{' '}
        <a href="/components/flex" key={0}>
          Flex
        </a>, <strong key={1}>except</strong>{' '}
        <code key={2}>justifyContent</code> and <code key={3}>wrap</code>.
      </p>
      <p>
        <em key={4}>
          Undocumented properties will be applied to the root element.
        </em>
      </p>
    </div>
  ),
  slug: 'start-end',
  title: 'StartEnd',
  whenHowToUse: `StartEnd, as its name suggests, aligns content to the start
and end of a container. One side's content will fill the available width, while
the other will shrink to the smallest width possible.`
};
