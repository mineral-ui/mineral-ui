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
import dedent from 'dedent';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { createStyledComponent } from '../../utils';
import Callout from './Callout';
import Heading from './Heading';
import Markdown from './Markdown';

type Props = {
  backgroundColor?: string,
  className?: string,
  description?: MnrlReactNode,
  hideSource?: boolean,
  id: string,
  scope: Object,
  source: string,
  title?: MnrlReactNode
};

const styles = {
  anchor: ({ theme }) => ({
    color: theme.color_caption,
    fontWeight: theme.fontWeight_semiBold,
    visibility: 'hidden'
  }),
  componentDocExample: ({ theme }) => ({
    '& + &': {
      borderTop: `1px solid ${theme.borderColor}`,
      marginTop: theme.spacing_quad
    }
  }),
  description: ({ theme }) => ({
    margin: `0 0 ${theme.spacing_quad}`
  }),
  livePreview: ({ backgroundColor, theme }) => ({
    backgroundColor,
    border: `1px solid ${theme.borderColor}`,
    padding: theme.spacing_double
  }),
  liveEditor: ({ theme }) => ({
    fontSize: theme.fontSize_ui,
    maxHeight: `${parseFloat(theme.spacing_quad) * 10}em`,
    overflow: 'auto',

    '& + .react-live-error': {
      backgroundColor: '#fce3e3', // color.red_10
      color: theme.color_text_danger,
      fontFamily: theme.fontFamily_monospace,
      fontSize: theme.fontSize_mouse,
      lineHeight: theme.lineHeight_prose,
      padding: theme.spacing_single,
      whiteSpace: 'pre',

      '&:first-line': {
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeight_semiBold,
        // Can't use margin/padding here, so this is to space off the heading
        // from the code
        lineHeight: 2 * theme.lineHeight_prose
      }
    }
  }),
  title: ({ theme }) => ({
    margin: `${parseFloat(theme.spacing_single) * 8}em 0 ${theme.spacing_quad}`
  })
};

const Root = createStyledComponent('div', styles.componentDocExample);
const Description = createStyledComponent(Markdown, styles.description);
const MyLivePreview = createStyledComponent(LivePreview, styles.livePreview, {
  rootEl: 'div'
});
const MyLiveEditor = createStyledComponent(LiveEditor, styles.liveEditor);
const Title = createStyledComponent(Heading, styles.title);

export default class ComponentDocExample extends Component {
  props: Props;

  render() {
    const {
      backgroundColor,
      className,
      description,
      hideSource,
      id,
      scope,
      source,
      title
    } = this.props;

    return (
      <Root className={className} id={id}>
        <Title level={3} id={id}>
          {title}
        </Title>
        <Description scope={{ Callout }}>
          {description || ''}
        </Description>
        <LiveProvider
          code={dedent(source)}
          scope={scope}
          mountStylesheet={false}>
          <MyLivePreview backgroundColor={backgroundColor} />
          {!hideSource && [<MyLiveEditor key={0} />, <LiveError key={1} />]}
        </LiveProvider>
      </Root>
    );
  }
}
