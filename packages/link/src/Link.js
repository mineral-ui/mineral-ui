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
import { createStyledComponent } from '@mineral-ui/component-utils';

type Props = {
  /** Content of the Link */
  children: MnrlReactNode,
  /** A URL or a URL fragment that the link points to */
  href?: string,
  /** Element to be used as the root node - e.g. "a" or { ReactRouterLink } */
  element?: $FlowFixMe // Should allow string | React class
};

const linkStyles = (props, baseTheme) => {
  const theme = {
    Link_color: baseTheme.color_link,
    Link_color_hover: baseTheme.color_link_hover,
    Link_color_focus: baseTheme.color_link_focus,
    Link_color_active: baseTheme.color_link_active,
    Link_fontSize: `${baseTheme.fontSize_base}px`,
    Link_fontWeight: baseTheme.fontWeight_regular,

    ...baseTheme
  };

  return {
    color: theme.Link_color,
    fontWeight: theme.Link_fontWeight,
    fontSize: theme.Link_fontSize,
    outline: null, // Using the browser's focus styles until design is finalized

    '&:hover': {
      color: theme.Link_color_hover
    },
    '&:focus': {
      color: theme.Link_color_focus
    },
    // `:active` must be last, to follow LVHFA order:
    // https://developer.mozilla.org/en-US/docs/Web/CSS/:active
    '&:active': {
      color: theme.Link_color_active
    }
  };
};

/**
 * The Link component creates a hyperlink to another URL.
 */
export default function Link({ children, element = 'a', ...restProps }: Props) {
  const Root = createStyledComponent(element, linkStyles, {
    displayName: 'Link',
    includeStyleReset: true,
    rootEl: element
  });

  return <Root {...restProps}>{children}</Root>;
}
