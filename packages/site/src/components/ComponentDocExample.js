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
import React, { Component } from 'react';
import { createStyledComponent } from '@mineral-ui/component-utils';
import styleReset from './styleReset';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';

const styles = {
  componentDocExample: (props, theme) => ({
    ...styleReset(theme),
    '& + &': {
      borderTop: `1px solid ${theme.color_gray}`,
      marginTop: theme.measurement_d
    }
  }),
  h4: (props, theme) => ({
    margin: `${theme.measurement_d} 0 ${theme.measurement_c} 0`,
    fontSize: `${parseFloat(theme.fontSize_h4) / 2}em`
  }),
  p: (props, theme) => ({
    lineHeight: '1.5',
    margin: `0 0 ${theme.measurement_c}`
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
const H4 = createStyledComponent('h4', styles.h4);
const P = createStyledComponent('p', styles.p);

type Props = {
  className?: string,
  description?: MnrlReactNode,
  scope: Object,
  source: string,
  title?: string
};

export default class ComponentDocExample extends Component {
  props: Props;

  render() {
    const { className, description, scope, source, title } = this.props;

    return (
      <Root className={className}>
        <H4>{title}</H4>
        {typeof description === 'string'
          ? <P>{description}</P>
          : description}
        <LiveProvider code={source} scope={scope}>
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </Root>
    );
  }
}
