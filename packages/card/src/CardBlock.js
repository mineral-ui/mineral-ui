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
import {
  createStyledComponent,
  getNormalizedValue
} from '@mineral-ui/component-utils';
import cardTheme from './cardTheme';

/**
 * Card block component
 */
export default createStyledComponent(
  'div',
  (props, baseTheme) => {
    const theme = cardTheme(baseTheme);

    // prettier-ignore
    return {
      fontSize: theme.CardBlock_fontSize,
      lineHeight: theme.CardBlock_lineHeight,
      marginBottom: getNormalizedValue(theme.CardRow_margin, theme.CardBlock_fontSize),
      marginTop: getNormalizedValue(theme.CardRow_margin, theme.CardBlock_fontSize),
      paddingLeft: getNormalizedValue(theme.CardRow_padding, theme.CardBlock_fontSize),
      paddingRight: getNormalizedValue(theme.CardRow_padding, theme.CardBlock_fontSize)
    };
  },
  {
    displayName: 'CardBlock'
  }
);
