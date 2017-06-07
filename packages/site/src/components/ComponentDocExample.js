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
  mineralTheme,
  createStyledComponent,
  ThemeProvider
} from '@mineral-ui/style-utils';
import styleReset from './styleReset';

type Props = {|
  children?: MnrlReactNode,
  className?: string,
  description?: MnrlReactNode,
  source?: string,
  title?: string
|};

const styles = {
  componentDocExample: (props, theme) => ({
    ...styleReset(theme),
    '& + &': {
      borderTop: `1px solid ${theme.color_gray}`,
      marginTop: theme.measurement_d,
      paddingTop: theme.measurement_d
    }
  }),
  resizable: (props, theme) => ({
    border: `1px solid ${theme.color_gray}`,
    padding: theme.measurement_c
  }),
  title: (props, theme) => ({
    margin: `0 0 ${theme.measurement_b}`,
    fontSize: theme.font_size_b
  }),
  graf: (props, theme) => ({
    lineHeight: '1.5',
    margin: `0 0 ${theme.measurement_b}`
  }),
  code: (props, theme) => ({
    backgroundColor: theme.color_grayLight,
    color: theme.color_grayDark,
    display: 'block',
    fontFamily:
      '"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',
    fontSize: 'smaller',
    padding: theme.measurement_c
  })
};

const Root = createStyledComponent('div', styles.componentDocExample);
const Resizable = createStyledComponent('div', styles.resizable);
const Title = createStyledComponent('h2', styles.title);
const Graf = createStyledComponent('p', styles.graf);
const Code = createStyledComponent('code', styles.code);

export default function ComponentDocExample({
  children,
  className,
  description,
  source,
  title
}: Props) {
  return (
    <Root className={className}>
      <Title>{title}</Title>
      {typeof description === 'string'
        ? <Graf>{description}</Graf>
        : description}
      <Resizable>
        <ThemeProvider theme={mineralTheme}>
          {children}
        </ThemeProvider>
      </Resizable>
      {source &&
        <pre>
          <Code>{source}</Code>
        </pre>}
    </Root>
  );
}
