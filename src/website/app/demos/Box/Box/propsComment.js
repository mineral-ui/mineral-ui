/* @flow */
import React from 'react';

export default (
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
);
