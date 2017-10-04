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
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm
} from '../../../../../utils';

export default function customRender(
  item: Object,
  props: Object,
  theme: Object
) {
  const { isHighlighted, disabled, ...restProps } = props; // eslint-disable-line react/prop-types

  const Root = createStyledComponent(
    'a',
    {
      backgroundColor: isHighlighted && theme.color_theme_20,
      display: 'flex',
      padding: theme.MenuItem_padding,
      textDecoration: 'none',

      '&:focus': {
        backgroundColor: !disabled && theme.color_theme_20,
        outline: 0
      },

      '&:hover': {
        backgroundColor: !disabled && theme.color_theme_20
      },

      '&:active': {
        backgroundColor: !disabled && theme.color_theme_40
      }
    },
    {
      includeStyleReset: true
    }
  );
  const Avatar = createStyledComponent('img', {
    borderRadius: pxToEm(16),
    display: 'block',
    flex: '0 0 auto',
    height: pxToEm(32),
    marginLeft: theme.direction === 'rtl' && theme.space_inline_sm,
    marginRight: theme.direction === 'ltr' && theme.space_inline_sm,
    padding: theme.MenuItemIcon_padding,
    width: pxToEm(32)
  });
  const Content = createStyledComponent('span', function() {
    const fontSize = theme.MenuItemContent_fontSize;
    const paddingVertical = getNormalizedValue(pxToEm(7), fontSize);
    const paddingHorizontal = getNormalizedValue(
      theme.MenuItemContent_padding,
      fontSize
    );

    return {
      flex: '1 1 auto',
      fontSize,
      padding: paddingVertical + ' ' + paddingHorizontal,
      whiteSpace: 'normal',
      wordBreak: 'break-all'
    };
  });

  const rootProps = {
    disabled,
    tabIndex: 0,
    ...restProps
  };

  return (
    <Root {...rootProps}>
      {item.avatar && (
        <Avatar alt={`Photo of ${item.text}`} src={item.avatar} />
      )}
      <Content>{item.text}</Content>
    </Root>
  );
}
