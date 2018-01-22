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
import { createStyledComponent, pxToEm } from '../../../../../styles';
import _Flex from '../../../../../Flex';

type Props = {
  gutterWidth?: number | string,
  theme: Object
};

export const containerStyles = ({
  gutterWidth: propGutterSize,
  theme
}: Props) => {
  const gutterWidth = propGutterSize === undefined ? 'md' : propGutterSize;
  const gutter =
    typeof gutterWidth === 'number'
      ? pxToEm(gutterWidth / 2)
      : `${parseFloat(theme[`space_inline_${gutterWidth}`] || gutterWidth) /
          2}em`;
  const offset = gutterWidth ? `calc(${gutter} - 4px)` : -4;

  return {
    position: 'relative',

    '&::before': {
      border: `1px dotted ${theme.color_theme_30}`,
      bottom: -4,
      content: '""',
      left: offset,
      position: 'absolute',
      right: offset,
      top: -4,
      zIndex: -1
    }
  };
};

export default createStyledComponent(_Flex, props => ({
  ...containerStyles(props)
}));
