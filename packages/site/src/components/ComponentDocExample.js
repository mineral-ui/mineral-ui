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
import {
  createStyledComponent,
  getNormalizedValue
} from '@mineral-ui/component-utils';

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
  h4: ({ theme }) => ({
    margin: `${getNormalizedValue(
      theme.spacing_quad,
      theme.fontSize_h4
    )} 0 ${getNormalizedValue(theme.spacing_double, theme.fontSize_h4)} 0`,
    fontSize: theme.fontSize_h4,

    '&:hover,&:focus': {
      '& > a': {
        visibility: 'visible'
      }
    }
  }),
  p: ({ theme }) => ({
    lineHeight: theme.lineHeight_prose,
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
const Anchor = createStyledComponent('a', styles.anchor);
const H4 = createStyledComponent('h4', styles.h4);
const P = createStyledComponent('p', styles.p);
const MyLivePreview = createStyledComponent(LivePreview, styles.livePreview, {
  rootEl: 'div'
});
const MyLiveEditor = createStyledComponent(LiveEditor, styles.liveEditor);

type Props = {
  backgroundColor?: string,
  className?: string,
  description?: MnrlReactNode,
  hideSource?: boolean,
  id: string,
  scope: Object,
  slug: string,
  source: string,
  title?: MnrlReactNode
};

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
      slug,
      source,
      title
    } = this.props;

    return (
      <Root className={className} id={id}>
        <H4>
          {title} <Anchor href={`/components/${slug}#${id}`}>#</Anchor>
        </H4>
        {typeof description === 'string'
          ? <P>
              {description}
            </P>
          : description}
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
