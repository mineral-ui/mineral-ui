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
import { Link as ReactRouterLink } from 'react-router-dom';
import { createThemedComponent } from '../../themes';
import Link from '../../Link';

type Props = {
  children?: React$Node,
  element?: $FlowFixMe,
  href?: string,
  to?: string
};

// prettier-ignore
const componentTheme = baseTheme => ({
  Link_borderColor_focus: baseTheme.SiteLink_borderColor_focus || baseTheme.borderColor_focus,
  Link_color: baseTheme.SiteLink_color || baseTheme.color_text_primary,
  Link_color_active: baseTheme.SiteLink_color_active || baseTheme.color_text_primary_active,
  Link_color_hover: baseTheme.SiteLink_color_hover || baseTheme.color_text_primary_hover,
  Link_color_focus: baseTheme.SiteLink_color_focus || baseTheme.color_text_primary_focus,

  ...baseTheme
});

const Root = createThemedComponent(Link, ({ theme }) => ({
  ...componentTheme(theme)
}));

export default function SiteLink({ element, to, ...restProps }: Props) {
  const rootProps = {
    element: to ? element || ReactRouterLink : element,
    to,
    ...restProps
  };

  delete rootProps.context; // Ignore context prop injected from Marksy.compile()

  return <Root {...rootProps} />;
}
