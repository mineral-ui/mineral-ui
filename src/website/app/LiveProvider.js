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
import dedent from 'dedent';
import {
  LiveProvider as ReactLiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';
import { createStyledComponent } from '../../utils';

type Props = {
  backgroundColor?: string,
  hideSource?: boolean,
  chromeless?: boolean,
  scope: Object,
  source: string
};

const styles = {
  livePreview: ({ backgroundColor, chromeless, theme }) => {
    return chromeless
      ? { padding: '1rem' }
      : {
          backgroundColor,
          border: `1px solid ${theme.borderColor}`,
          padding: theme.spacing_double
        };
  },
  liveEditor: ({ theme }) => ({
    fontSize: theme.fontSize_ui,
    maxHeight: `${parseFloat(theme.spacing_quad) * 10}em`,
    overflow: 'auto'
  })
};

const MyLivePreview = createStyledComponent(LivePreview, styles.livePreview, {
  rootEl: 'div'
});
const MyLiveEditor = createStyledComponent(LiveEditor, styles.liveEditor);

export default function LiveProvider({
  backgroundColor,
  hideSource,
  chromeless,
  scope,
  source
}: Props) {
  return (
    <ReactLiveProvider
      code={dedent(source)}
      scope={scope}
      mountStylesheet={false}>
      <MyLivePreview
        backgroundColor={backgroundColor}
        chromeless={chromeless}
      />
      {!hideSource && [<MyLiveEditor key={0} />, <LiveError key={1} />]}
    </ReactLiveProvider>
  );
}
