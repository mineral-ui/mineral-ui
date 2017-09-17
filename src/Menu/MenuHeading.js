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
import { componentTheme as buttonComponentTheme } from '../Button/Button';
import { componentTheme as menuItemComponentTheme } from '../Menu/MenuItem';

type Props = Object;

export const componentTheme = (baseTheme: Object) => ({
  MenuHeading_fontSize: pxToEm(12),
  MenuHeading_fontWeight: baseTheme.fontWeight_bold,
  MenuHeading_paddingTop: baseTheme.spacing_double,
  MenuHeading_paddingBottom: baseTheme.spacing_single,

  ...baseTheme
});

const Root = createStyledComponent(
  'h3',
  props => {
    const theme = {
      ...componentTheme(props.theme),
      ...menuItemComponentTheme(props.theme),
      ...buttonComponentTheme(props.theme)
    };

    const paddingBottom = getNormalizedValue(
      theme.MenuHeading_paddingBottom,
      theme.MenuHeading_fontSize
    );

    const paddingTop = getNormalizedValue(
      theme.MenuHeading_paddingTop,
      theme.MenuHeading_fontSize
    );

    // Because MenuItem is based on Button, we need to use Button's total
    // (Root + Content) left/right padding
    const paddingH = getNormalizedValue(
      `${parseFloat(theme.Button_padding_large) +
        parseFloat(theme.ButtonContent_padding_large)}em`,
      theme.MenuHeading_fontSize
    );

    // Button's left/right padding substracts the width of the border, so we
    // need to do that here, too.
    const paddingHMinusBorder = `${parseFloat(paddingH) -
      parseFloat(
        getNormalizedValue(
          pxToEm(theme.Button_borderWidth),
          theme.MenuHeading_fontSize
        )
      )}em`;

    return {
      backgroundColor: theme.MenuItem_backgroundColor,
      fontSize: theme.MenuHeading_fontSize,
      fontWeight: theme.MenuHeading_fontWeight,
      margin: 0,
      padding: `${paddingTop} ${paddingHMinusBorder} ${paddingBottom}`
    };
  },
  {
    displayName: 'MenuHeading'
  }
);

/**
 * Menu heading component
 */
export default function MenuHeading(props: Props) {
  return <Root {...props} />;
}
