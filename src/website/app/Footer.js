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
import { createStyledComponent, getNormalizedValue } from '../../styles';
import { createThemedComponent, mineralTheme } from '../../themes';
import Markdown from './Markdown';
import Section from './Section';
import siteColors from './siteColors';

type Props = {};

const ThemedSection = createThemedComponent(Section, {
  color_text: mineralTheme.color_white,

  Heading_color_4: mineralTheme.color_white,

  Link_color: siteColors.yellow,
  Link_color_active: siteColors.yellow_active,
  Link_color_focus: siteColors.yellow_focus,
  Link_color_hover: siteColors.yellow_hover
});

const Root = createStyledComponent(
  ThemedSection,
  ({ theme }) => ({
    backgroundColor: theme.color_black,
    color: theme.color_gray_40,

    // Inner
    '& > div': {
      paddingBottom: 1, // To prevent margin collapse
      paddingTop: 1, // To prevent margin collapse

      // Markdown
      '& > div': {
        '& > p[class]': {
          fontSize: theme.fontSize_mouse,
          lineHeight: theme.lineHeight,
          margin: `${getNormalizedValue(
            theme.baseline_1,
            theme.fontSize_mouse
          )} 0`
        },

        [theme.bp_home_navExpanded]: {
          display: 'flex',

          '& > p:last-child': {
            marginLeft: 'auto'
          }
        }
      }
    }
  }),
  {
    includeStyleReset: true
  }
).withProps({ element: 'footer' });

export default function Footer(props: Props) {
  return (
    <Root {...props}>
      <Markdown>
        {`Copyright © 2017 CA Technologies

We welcome feedback and contributions on [GitHub](https://github.com/mineral-ui/mineral-ui)`}
      </Markdown>
    </Root>
  );
}
