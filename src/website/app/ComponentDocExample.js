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
    margin: `0 0 ${theme.spacing_double}`
  }),
  livePreview: ({ backgroundColor, theme }) => ({
    backgroundColor,
    border: `1px solid ${theme.borderColor}`,
    padding: theme.spacing_double
  }),
  liveEditor: ({ theme }) => ({
    fontSize: theme.fontSize_ui,
    maxHeight: `${parseFloat(theme.spacing_quad) * 10}em`,
    overflow: 'auto'
  })
};

const Root = createStyledComponent('div', styles.componentDocExample);
const Description = createStyledComponent(Markdown, styles.description);
const MyLivePreview = createStyledComponent(LivePreview, styles.livePreview, {
  rootEl: 'div'
});
const MyLiveEditor = createStyledComponent(LiveEditor, styles.liveEditor);

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

    const fake = () => {
      const texts = [
        'Text to explain what’s special about this example.',
        'Slightly longer text to explain what’s so special about this particular example.',
        'Text to explain what’s special about this example. Text to explain what’s special about this example. Text to explain what’s special about this example.'
      ];
      return texts[Math.floor(Math.random() * texts.length)];
    };

    // $FlowFixMe
    const fakeDescription = `${description || ''} ${fake()}`;

    return (
      <Root className={className} id={id}>
        <Heading level={3} id={id}>
          {title}
        </Heading>
        <Description>
          {fakeDescription}
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
