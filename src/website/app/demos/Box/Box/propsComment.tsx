/* @flow */
import React from 'react';

export default (
  <div>
    <p>
      All of the margin/padding props above are applied in a specific{' '}
      <a href="#spacing">order of precedence</a>.
    </p>
    <p>
      <em>
        Undocumented properties, including{' '}
        <a href="/styling#customization-techniques-try-theming-first-{{8}}-{{14}}-prop">
          <code>as</code>
        </a>{' '}
        and{' '}
        <a href="/styling#customization-techniques-try-theming-first-{{22}}-prop">
          <code>css</code>
        </a>
        , will be applied to the root element.
      </em>
    </p>
  </div>
);
