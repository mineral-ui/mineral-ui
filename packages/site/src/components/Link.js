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
import darken from 'polished/lib/color/darken';
import { Link } from 'react-router-dom';
import { createStyledComponent } from '@mineral-ui/component-utils';
import styleReset from './styleReset';

const styles = (props, theme) => ({
  ...styleReset(theme),
  textDecoration: 'none',
  ':link,:visited': {
    color: theme.color_interactive
  },
  ':hover,:focus': {
    color: darken(0.1, theme.color_interactive)
  },
  ':active': {
    color: darken(0.15, theme.color_interactive)
  }
});

export const RouterLink = createStyledComponent(Link, styles, {
  forwardProps: ['to']
});

export default createStyledComponent('a', styles);
