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
import { css } from 'glamor';
import lighten from 'polished/lib/color/lighten';
import darken from 'polished/lib/color/darken';
import { createStyledComponent } from '../../styles';

type Props = {
  error?: string,
  pastDelay: boolean,
  timedOut: boolean
};

const Message = createStyledComponent('div', ({ fancy, theme }) => {
  const loading = css.keyframes({
    '0%': { backgroundPosition: '0 0' },
    '100%': { backgroundPosition: '100% 0' }
  });

  let styles = {
    color: theme.color_text_primary,
    fontSize: '1.5em',
    margin: `${theme.baseline_2} auto`,
    width: 'min-content'
  };

  if (fancy) {
    styles = {
      ...styles,
      animation: `${loading} 2s`,
      animationIterationCount: 'infinite',
      background: `linear-gradient(90deg,
        ${lighten(0.1, theme.color_text_primary)},
        ${darken(0.2, theme.color_text_primary)},
        ${lighten(0.1, theme.color_text_primary)},
        ${darken(0.2, theme.color_text_primary)}
      )`,
      backgroundPosition: '0 0',
      backgroundSize: '300% 100%',
      color: 'white',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    };
  }

  return styles;
});

export default function Loading({ error, pastDelay, timedOut }: Props) {
  if (pastDelay) {
    return <Message fancy>Loading...</Message>;
  } else if (timedOut || error) {
    return <Message>Sorry, there was a problem loading the page.</Message>;
  } else {
    return null;
  }
}
