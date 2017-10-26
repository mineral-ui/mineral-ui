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
import { createStyledComponent } from '../../../../styles';
import color from '../../../../colors';
import IconAssignment from '../../../../Icon/IconAssignment';
import IconCheck from '../../../../Icon/IconCheck';
import IconSlowMotionVideo from '../../../../Icon/IconSlowMotionVideo';

const styles = {
  list: ({ theme }) => ({
    paddingLeft: 0,
    margin: `0 0 ${theme.space_stack_xl}`,
    '& li': {
      display: 'inline-block',
      marginRight: theme.space_inline_xl,
      '@media(max-width: 45em)': {
        display: 'block'
      }
    }
  }),
  icon: {
    verticalAlign: 'text-top'
  }
};

const Available = createStyledComponent(IconCheck, styles.icon);
const InDevelopment = createStyledComponent(IconSlowMotionVideo, styles.icon);
const Planned = createStyledComponent(IconAssignment, styles.icon);
const List = createStyledComponent('ul', styles.list);

export default function Legend() {
  return (
    <List aria-hidden="true">
      <li>
        <Available color={color.green_60} size="large" /> Available
      </li>
      <li>
        <InDevelopment color={color.yellow_60} size="large" /> In Development
      </li>
      <li>
        <Planned color={color.blue_60} size="large" /> Planned
      </li>
    </List>
  );
}
