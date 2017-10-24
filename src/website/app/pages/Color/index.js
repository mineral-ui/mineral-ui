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
import { createStyledComponent } from '../../../../utils';
import Markdown from '../../Markdown';
import Callout from '../../Callout';
import ColorRamp from './ColorRamp';
import RampLegend from './RampLegend';
import Variants from './Variants';
import GuidelinePage from '../../GuidelinePage';
import content from './color.md';

type Props = {
  pageMeta: {
    title: string,
    canonicalLink: string
  }
};

const ramps = [
  'red',
  'magenta',
  'purple',
  'indigo',
  'blue',
  'sky',
  'teal',
  'green',
  'lime',
  'yellow',
  'orange',
  'slate',
  'dusk',
  'gray',
  'black'
];

const RampHolder = createStyledComponent('div', {
  display: 'flex',
  flexWrap: 'wrap'
});

export default function Color(props: Props) {
  return (
    <GuidelinePage {...props}>
      <Markdown scope={{ Callout, Variants }}>{content}</Markdown>
      <RampLegend />
      <RampHolder>
        {ramps.map(ramp => <ColorRamp key={ramp} ramp={ramp} />)}
      </RampHolder>
    </GuidelinePage>
  );
}
