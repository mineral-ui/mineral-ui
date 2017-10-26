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
import { createStyledComponent } from '../../styles';

type Props = {
  /* rendered chilren */
  children: React$Node,
  /* available font variants */
  variant?: 'ui' | 'prose' | 'mouse'
};

const componentTheme = baseTheme => ({
  Paragraph_color: baseTheme.color_text,
  Paragraph_fontSize_mouse: baseTheme.fontSize_mouse,
  Paragraph_fontSize_prose: baseTheme.fontSize_prose,
  Paragraph_fontSize_ui: baseTheme.fontSize_ui,

  Paragraph_lineHeight_normal: baseTheme.lineHeight,
  Paragraph_lineHeight_prose: baseTheme.lineHeight_prose,

  ...baseTheme
});

const Root = createStyledComponent('p', ({ variant, theme: baseTheme }) => {
  let theme = componentTheme(baseTheme);

  return {
    color: theme.Paragraph_color,
    fontSize: theme[`Paragraph_fontSize_${variant}`],
    lineHeight:
      variant === 'prose'
        ? theme.Paragraph_lineHeight_prose
        : theme.Paragraph_lineHeight_normal
  };
});

export default function Paragraph({
  children,
  variant = 'ui',
  ...restProps
}: Props) {
  return (
    <Root variant={variant} {...restProps}>
      {children}
    </Root>
  );
}
