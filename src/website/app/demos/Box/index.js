/* @flow */
import React from 'react';
import bestPractices from './bestPractices';

import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../library/Box/Box');

export default {
  bestPractices,
  doc,
  examples,
  propsComment: (
    <div>
      <p>
        All of the margin/padding props above are applied in a specific{' '}
        <a href="#spacing" key={0}>
          order of precedence
        </a>
        .
      </p>
      <p>
        <em key={1}>
          Undocumented properties will be applied to the root element.
        </em>
      </p>
    </div>
  ),
  slug: 'box',
  title: 'Box',
  whenHowToUse: `Box serves as an invisible building block for the layout and
structure of your app. Use it to provide consistent size and spacing around
components.

In general, do not display content directly within Box. Rather, wrap Box around
other components.`
};
