/* @flow */
import React from 'react';
import bestPractices from './bestPractices';

import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../Box/Box');

export default {
  bestPractices,
  doc,
  examples,
  propsComment: (
    <p>
      All of the margin/padding props above are applied in a specific{' '}
      <a href="#spacing" key={0}>
        order of precedence
      </a>.
      <br key={1} />
      <br key={2} />
      <em key={3}>
        Undocumented properties will be applied to the root element.
      </em>
    </p>
  ),
  slug: 'box',
  title: 'Box',
  whenHowToUse: `Box serves as an invisible building block for the layout and
structure of your app. Use it to provide consistent size and spacing around
components.

In general, do not display content directly within Box. Rather, wrap Box around
other components.`
};
