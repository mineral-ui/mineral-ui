/* @flow */
import React from 'react';

export default (
  <div>
    <p>
      In addition to the props above, GridItem also accepts all props for{' '}
      <a href="/components/box" key={0}>
        Box
      </a>
      , <strong key={1}>except</strong> <code key={2}>width</code>.
    </p>
    <p>
      <em key={1}>
        Undocumented properties will be applied to the root element.
      </em>
    </p>
  </div>
);
