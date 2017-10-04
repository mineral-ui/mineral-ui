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
import { createStyledComponent, getNormalizedValue, pxToEm } from '../utils';
import { componentTheme as menuItemComponentTheme } from '../Menu/MenuItem';

type Props = Object;

export const componentTheme = (baseTheme: Object) => ({
  MenuGroupTitle_fontSize: pxToEm(12),
  MenuGroupTitle_fontWeight: baseTheme.fontWeight_bold,
  MenuGroupTitle_paddingTop: baseTheme.space_stack_md,
  MenuGroupTitle_paddingBottom: baseTheme.space_stack_sm,

  ...baseTheme
});

const Root = createStyledComponent(
  'h3',
  props => {
    const theme = {
      ...componentTheme(props.theme),
      ...menuItemComponentTheme(props.theme)
    };

    const paddingBottom = getNormalizedValue(
      theme.MenuGroupTitle_paddingBottom,
      theme.MenuGroupTitle_fontSize
    );

    const paddingTop = getNormalizedValue(
      theme.MenuGroupTitle_paddingTop,
      theme.MenuGroupTitle_fontSize
    );

    // We need to use MenuItem's total (Root + Content) left/right padding
    const paddingHorizontal = getNormalizedValue(
      `${parseFloat(theme.MenuItem_padding) +
        parseFloat(theme.MenuItemContent_padding)}em`,
      theme.MenuGroupTitle_fontSize
    );

    return {
      fontSize: theme.MenuGroupTitle_fontSize,
      fontWeight: theme.MenuGroupTitle_fontWeight,
      margin: 0,
      padding: `${paddingTop} ${paddingHorizontal} ${paddingBottom}`
    };
  },
  {
    displayName: 'MenuGroupTitle'
  }
);

/**
 * Menu group title component
 */
export default function MenuGroupTitle(props: Props) {
  return <Root {...props} />;
}
