/* @flow */
import React from 'react';
import bestPractices from './bestPractices';

import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../StartEnd/StartEnd');

export default {
  bestPractices,
  doc,
  examples,
  propsComment: (
    <p>
      In addition to the props above, StartEnd also accepts all props for{' '}
      <a href="../flex" key={0}>
        Flex
      </a>, <strong key={1}>except</strong> <code key={2}>justifyContent</code>{' '}
      and <code key={3}>wrap</code>.
      <br key={4} />
      <br key={5} />
      <em key={6}>
        Undocumented properties will be applied to the root element.
      </em>
    </p>
  ),
  slug: 'start-end',
  title: 'StartEnd',
  whenHowToUse: `StartEnd, as its name suggests, aligns content to the start
and end of a container. One side's content will fill the available width, while
the other will shrink to the smallest width possible.`
};
