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

export const color = {
  black: '#000',
  white: '#fff',

  red_10: '#fce3e3',
  red_20: '#fabebe',
  red_30: '#f79999',
  red_40: '#f27474',
  red_50: '#eb4d4d',
  red_60: '#db2929',
  red_70: '#c71818',
  red_80: '#ad0e0e',
  red_90: '#940909',
  red_100: '#7d0606',

  magenta_10: '#f7dae3',
  magenta_20: '#f7bacd',
  magenta_30: '#f590b0',
  magenta_40: '#f06591',
  magenta_50: '#e63e73',
  magenta_60: '#d92762',
  magenta_70: '#c91451',
  magenta_80: '#b30b43',
  magenta_90: '#a1083b',
  magenta_100: '#8d0633',

  purple_10: '#eedefa',
  purple_20: '#e1c5fa',
  purple_30: '#d5a7fa',
  purple_40: '#c588f7',
  purple_50: '#af64ed',
  purple_60: '#9545d8',
  purple_70: '#8136bf',
  purple_80: '#6d2aa3',
  purple_90: '#5f248f',
  purple_100: '#511f7a',

  indigo_10: '#e3e3fa',
  indigo_20: '#cacafa',
  indigo_30: '#adadf7',
  indigo_40: '#8d8df2',
  indigo_50: '#6c6ceb',
  indigo_60: '#4c4ce0',
  indigo_70: '#3737d3',
  indigo_80: '#2c2abd',
  indigo_90: '#2621a6',
  indigo_100: '#201d8f',

  blue_10: '#e6eefc',
  blue_20: '#c2dbfc',
  blue_30: '#9dc2fa',
  blue_40: '#72a5f2',
  blue_50: '#4a89e8',
  blue_60: '#2e6fd9',
  blue_70: '#1f5dc2',
  blue_80: '#164ea8',
  blue_90: '#114091',
  blue_100: '#0f397d',

  sky_10: '#e1f3fc',
  sky_20: '#c0e5fc',
  sky_30: '#9fd9fc',
  sky_40: '#79c7f7',
  sky_50: '#51b3f0',
  sky_60: '#2f9fe0',
  sky_70: '#1b8bcc',
  sky_80: '#0f75b0',
  sky_90: '#0a6091',
  sky_100: '#084d75',

  teal_10: '#e6faf7',
  teal_20: '#bcf7ee',
  teal_30: '#8df0de',
  teal_40: '#5ee6cd',
  teal_50: '#34d1b7',
  teal_60: '#20baa3',
  teal_70: '#15a18e',
  teal_80: '#0f8c7c',
  teal_90: '#0c7567',
  teal_100: '#0a6358',

  green_10: '#e8fcf2',
  green_20: '#c0fadc',
  green_30: '#95f5c3',
  green_40: '#67eba7',
  green_50: '#40db8d',
  green_60: '#1fc06f',
  green_70: '#10a35a',
  green_80: '#0a8f4c',
  green_90: '#06783f',
  green_100: '#046132',

  lime_10: '#f1fae6',
  lime_20: '#e7facf',
  lime_30: '#d2f7a8',
  lime_40: '#b5f07a',
  lime_50: '#9be650',
  lime_60: '#81d42f',
  lime_70: '#6cbf19',
  lime_80: '#5aa60d',
  lime_90: '#4a8c08',
  lime_100: '#3d7307',

  yellow_10: '#fcf1dc',
  yellow_20: '#fce4b6',
  yellow_30: '#fad48e',
  yellow_40: '#f7c868',
  yellow_50: '#f0b241',
  yellow_60: '#e3a322',
  yellow_70: '#d19411',
  yellow_80: '#bd8308',
  yellow_90: '#a67305',
  yellow_100: '#916504',

  orange_10: '#fce8e1',
  orange_20: '#fcd0c0',
  orange_30: '#fab69d',
  orange_40: '#f59776',
  orange_50: '#ed774c',
  orange_60: '#e05b2b',
  orange_70: '#cf4615',
  orange_80: '#bd3909',
  orange_90: '#a83207',
  orange_100: '#942c06',

  gray_10: '#f5f7fa',
  gray_20: '#ebeff5',
  gray_30: '#dde3ed',
  gray_40: '#c8d1e0',
  gray_50: '#afbacc',
  gray_60: '#8e99ab',
  gray_70: '#707a8a',
  gray_80: '#58606e',
  gray_90: '#434a54',
  gray_100: '#333840',

  slate_10: '#ebf3f7',
  slate_20: '#d3e4ed',
  slate_30: '#b1cfde',
  slate_40: '#8fb6c9',
  slate_50: '#709cb3',
  slate_60: '#598296',
  slate_70: '#47697a',
  slate_80: '#3a5663',
  slate_90: '#2e444f',
  slate_100: '#253740',

  dusk_10: '#eff1f8',
  dusk_20: '#d8dced',
  dusk_30: '#bdc4de',
  dusk_40: '#99a3c4',
  dusk_50: '#7680a6',
  dusk_60: '#596387',
  dusk_70: '#454e6e',
  dusk_80: '#373f59',
  dusk_90: '#2c3247',
  dusk_100: '#24293b'
};

export default {
  borderRadius_1: pxToEm(4.5),
  borderRadius_2: pxToEm(6),
  borderRadius_3: pxToEm(9),
  borderRadius_4: pxToEm(12),
  borderRadius_5: pxToEm(16),

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
