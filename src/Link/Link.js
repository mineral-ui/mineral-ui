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
import { createStyledComponent } from '../utils';

type Props = {
  /** Content of the Link */
  children?: MnrlReactNode,
  /** A URL or a URL fragment that the Link points to */
  href?: string,
  /** Element to be used as the root node - e.g. "a" or { ReactRouterLink } */
  element?: $FlowFixMe,
  /** Available variants */
  variant?: 'regular' | 'danger' | 'success' | 'warning' // Should allow string | React class
};

export const componentTheme = (baseTheme: Object) => ({
  Link_borderColor_focus: baseTheme.borderColor_focus,
  Link_color: baseTheme.color_text_primary,
  Link_color_active: baseTheme.color_text_primary_active,
  Link_color_hover: baseTheme.color_text_primary_hover,
  Link_color_focus: baseTheme.color_text_primary_focus,

  ...baseTheme
});

const linkStyles = ({ variant, theme: baseTheme }) => {
  let theme = componentTheme(baseTheme);

  if (variant !== 'regular') {
    // prettier-ignore
    theme = {
      ...theme,
      Link_borderColor_focus: baseTheme[`borderColor_${variant}_focus`],
      Link_color: baseTheme[`color_text_${variant}`],
      Link_color_hover: baseTheme[`color_text_${variant}_hover`],
      Link_color_focus: baseTheme[`color_text_${variant}_focus`],
      Link_color_active: baseTheme[`color_text_${variant}_active`],
    };
  }

  return {
    color: theme.Link_color,
    textDecoration: 'none',

    '&:hover': {
      color: theme.Link_color_hover,
      textDecoration: 'underline'
    },
    '&:focus': {
      color: theme.Link_color_focus,
      outline: `1px solid ${theme.Link_borderColor_focus}`,
      outlineOffset: '2px'
    },
    // `:active` must be last, to follow LVHFA order:
    // https://developer.mozilla.org/en-US/docs/Web/CSS/:active
    '&:active': {
      color: theme.Link_color_active
    }
  };
};

/**
 * The Link component creates a hyperlink to external pages, files, anchors on the same page or another URL.
 * Links trigger an action, select an option, or provide a gateway to more information.
 * Links are used to reduce clutter on a page when there are potentially many actions available.
 *
 * Links with clear messaging and an appropriate variant applied communicate intention effectively.
 */
export default function Link({
  children,
  element = 'a',
  variant = 'regular',
  ...restProps
}: Props) {
  const rootProps = {
    variant,
    ...restProps
  };
  const Root = createStyledComponent(element, linkStyles, {
    displayName: 'Link',
    filterProps: ['variant']
  });

  return (
    <Root {...rootProps}>
      {children}
    </Root>
  );
}
