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
import fontSize_base from './font-size-base';
import pxToEm from './pxToEm';

const spacing_quarter = pxToEm(2);
const spacing_half = pxToEm(4);
const spacing_1x = pxToEm(8);
const spacing_2x = pxToEm(16);
const spacing_3x = pxToEm(24);
const spacing_4x = pxToEm(32);
const spacing_8x = pxToEm(64);

export default {
  borderRadius_1: pxToEm(3),

  direction: 'ltr',

  fontFamily: 'Open Sans',
  fontFamily_system:
    '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontFamily_monospace: 'monospace',

  fontSize_base,
  fontSize_h1: pxToEm(34),
  fontSize_h2: pxToEm(28),
  fontSize_h3: pxToEm(22),
  fontSize_h4: pxToEm(18),
  fontSize_h5: pxToEm(14),
  fontSize_h6: pxToEm(14),
  fontSize_mouse: pxToEm(11),
  fontSize_prose: pxToEm(16),
  fontSize_ui: pxToEm(14),

  fontWeight_regular: 400,
  fontWeight_semiBold: 600,
  fontWeight_bold: 700,
  fontWeight_extraBold: 800,

  lineHeight: 1.25,
  lineHeight_prose: 1.5,

  shadow_1: '0 1px 2px 0 rgba(0,0,0,0.4)',
  shadow_2: '0 2px 4px 0 rgba(0,0,0,0.2), 0 1px 2px 0 rgba(0,0,0,0.4)',
  shadow_3: '0 4px 8px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.4)',
  shadow_4: '0 8px 16px 0 rgba(0,0,0,0.2), 0 4px 8px 0 rgba(0,0,0,0.4)',
  shadow_5: '0 24px 24px -8px rgba(0,0,0,0.4), 0 8px 16px 0 rgba(0,0,0,0.4)',

  size_small: pxToEm(24),
  size_medium: pxToEm(32),
  size_large: pxToEm(40),
  size_jumbo: pxToEm(52),

  space_inline_xxs: spacing_quarter,
  space_inline_xs: spacing_half,
  space_inline_sm: spacing_1x,
  space_inline_md: spacing_2x,
  space_inline_lg: spacing_3x,
  space_inline_xl: spacing_4x,
  space_inline_xxl: spacing_8x,

  space_inset_sm: spacing_1x,
  space_inset_md: spacing_2x,
  space_inset_lg: spacing_3x,

  space_stack_xxs: spacing_quarter,
  space_stack_xs: spacing_half,
  space_stack_sm: spacing_1x,
  space_stack_md: spacing_2x,
  space_stack_lg: spacing_3x,
  space_stack_xl: spacing_4x,
  space_stack_xxl: spacing_8x,

  zIndex_100: 100,
  zIndex_200: 200,
  zIndex_400: 400,
  zIndex_800: 800,
  zIndex_1600: 1600
};
