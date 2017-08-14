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

  shadow_1: 'rgba(0,0,0,0.5) 0 1px 2px',
  shadow_2: 'rgba(0,0,0,0.5) 0 1px 1px, rgba(0,0,0,0.35) 0 2px 4px',
  shadow_3: 'rgba(0,0,0,0.5) 0 1px 1px, rgba(0,0,0,0.25) 0 2px 8px',
  shadow_4: 'rgba(0,0,0,0.5) 0 1px 1px, rgba(0,0,0,0.30) 0 4px 10px',
  shadow_5: 'rgba(0,0,0,0.5) 0 1px 2px, rgba(0,0,0,0.60) 0 15px 15px',

  size_small: pxToEm(24),
  size_medium: pxToEm(32),
  size_large: pxToEm(40),
  size_jumbo: pxToEm(52),

  spacing_quarter: pxToEm(2),
  spacing_half: pxToEm(4),
  spacing_single: pxToEm(8),
  spacing_oneAndAHalf: pxToEm(12),
  spacing_double: pxToEm(16),
  spacing_triple: pxToEm(24),
  spacing_quad: pxToEm(32),

  zIndex_100: 100,
  zIndex_200: 200,
  zIndex_400: 400,
  zIndex_800: 800,
  zIndex_1600: 1600
};
