/* @flow */
import React from 'react';
import { componentTheme as navLinkComponentTheme } from '../../../../library/Navigation/NavLink';
// TODO: temp
import { componentTheme as overflowListComponentTheme } from '../../../../library/OverflowList/OverflowList';
import bestPractices from './bestPractices';

import horizontalNavigationExamples from './examples/HorizontalNavigation';
import navLinkExamples from './examples/NavLink';

const horizontalNavigationDoc = require('!!react-docgen-loader!../../../../library/Navigation/HorizontalNavigation');
const navLinkDoc = require('!!react-docgen-loader!../../../../library/Navigation/NavLink');

export default [
  {
    bestPractices,
    componentTheme: [overflowListComponentTheme],
    doc: horizontalNavigationDoc,
    examples: horizontalNavigationExamples,
    slug: 'horizontal-navigation',
    title: 'HorizontalNavigation',
    whenHowToUse: `TODO`
  },
  {
    componentTheme: navLinkComponentTheme,
    doc: navLinkDoc,
    propsComment: (
      <p>
        Unlike most other components, which apply undocumented properties to the
        root element, NavLink applies undocumented properties to the{' '}
        <em>
          <code>a</code> element within the <code>li</code> element
        </em>
        .
      </p>
    ),
    examples: navLinkExamples,
    slug: 'nav-link',
    title: 'NavLink'
  }
];
