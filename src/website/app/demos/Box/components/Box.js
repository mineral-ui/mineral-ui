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
import { rgba } from 'polished';
import { createStyledComponent } from '../../../../../styles';
import _Box from '../../../../../Box';

type Props = {
  inline?: boolean,
  padding?: number | string,
  theme: Object
};

export const boxStyles = ({ inline, padding, theme }: Props) => {
  const styles = [
    {
      alignItems: 'center',
      backgroundColor: theme.color_theme_10,
      color: theme.color_theme_70,
      display: inline ? 'inline-flex' : 'flex',
      justifyContent: 'center',
      outline: `1px solid ${theme.color_theme_20}`,
      padding: padding ? null : theme.space_inset_sm,
      position: padding ? 'relative' : null
    }
  ];

  if (padding) {
    const borderWidth = theme[`space_inline_${padding}`] || padding;
    styles.push({
      '&::before': {
        borderColor: rgba(theme.color_theme_20, 0.5),
        borderStyle: 'solid',
        borderWidth,
        bottom: 0,
        content: '""',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
      }
    });
  }

  return styles;
};

export default createStyledComponent(_Box, props => boxStyles(props));
