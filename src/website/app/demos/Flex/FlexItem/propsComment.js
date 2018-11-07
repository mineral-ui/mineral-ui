/* @flow */
import React from 'react';

export default (
  <div>
    <p>
      In addition to the props above, FlexItem also accepts all props for{' '}
      <a href="/components/box" key={0}>
        Box
      </a>{' '}
      (and for{' '}
      <a href="/components/flex" key={1}>
        Flex
      </a>
      , if <code key={2}>flex</code> is <code key={3}>true</code>
      ).
    </p>
    <p>
      <em key={1}>
        Undocumented properties will be applied to the root element.
      </em>
    </p>
  </div>
);
