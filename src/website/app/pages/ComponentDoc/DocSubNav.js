/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { createStyledComponent, pxToEm } from '../../../../styles';
import Link from '../../SiteLink';
import Section from './DocSection';

type Props = {
  bestPractices?: Array<Object>,
  examples?: Array<any>,
  props?: boolean,
  whenHowToUse?: string
};

const styles = {
  navElement: ({ theme }) => ({
    display: 'inline-block',
    fontFamily: theme.fontFamily_headline,
    marginRight: theme.space_inline_lg,

    [theme.bp_moreSpacious]: {
      fontSize: pxToEm(22)
    }
  }),
  subnav: ({ theme }) => ({
    marginTop: pxToEm(89), // to baseline
    position: 'sticky',
    top: -1,
    zIndex: theme.zIndex_800,

    [theme.bp_moreSpacious]: {
      marginTop: pxToEm(108) // to baseline
    },

    '& > div': {
      backgroundColor: theme.color_white,
      borderBottom: `2px solid ${theme.borderColor}`,
      padding: `${pxToEm(6)} 0`
    }
  })
};

const Root = createStyledComponent(Section, styles.subnav).withProps({
  element: 'nav'
});
const NavElement = createStyledComponent(Link, styles.navElement);

export default function DocSubNav({
  bestPractices,
  examples,
  props,
  whenHowToUse,
  ...restProps
}: Props) {
  // there is no Examples h2, so we just link to the first example.
  let firstExampleId = 'examples';
  if (examples && examples.length > 0) {
    firstExampleId = examples[0].id;
  }

  const navElements = []; // only show the tabs menu if there is more than one tab
  if (examples && examples.length > 0) {
    navElements.push(
      <NavElement href={`#${firstExampleId}`} key="examples">
        Examples
      </NavElement>
    );
  }

  if (props) {
    navElements.push(
      <NavElement href="#api-and-theme" key="api-and-theme">
        API & Theme
      </NavElement>
    );
  }

  if (whenHowToUse || bestPractices) {
    navElements.push(
      <NavElement href="#usage" key="usage">
        Usage
      </NavElement>
    );
  }

  return navElements.length > 1 && <Root {...restProps}>{navElements}</Root>;
}
