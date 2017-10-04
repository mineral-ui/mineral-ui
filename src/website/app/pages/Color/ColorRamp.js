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
import ColorRampRow from './ColorRampRow';
import range from 'lodash/range';

type Props = {
  ramp: string
};

const Root = createStyledComponent('div', ({ theme }) => ({
  display: 'inline-block',
  marginRight: theme.space_inline_sm,
  marginBottom: theme.space_stack_sm,
  width: '12em',
  padding: 0,
  '@media(max-width: 60em)': {
    width: '100%',
    marginRight: 0
  }
}));

export default function ColorRamp({ ramp }: Props) {
  return (
    <Root>
      {ramp === 'black' ? (
        <ColorRampRow key={ramp} name={ramp} />
      ) : (
        range(10, 110, 10).map(step => (
          <ColorRampRow key={step} name={`${ramp}_${step}`} />
        ))
      )}
    </Root>
  );
}
