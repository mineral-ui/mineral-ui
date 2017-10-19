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
import Button from '../../../../../Button';
import {
  blueTheme,
  duskTheme,
  indigoTheme,
  limeTheme,
  mineralTheme,
  purpleTheme,
  skyTheme,
  slateTheme,
  tealTheme,
  ThemeProvider
} from '../../../../../themes';
import IconFavorite from '../../../../../Icon/IconFavorite';

const icon = <IconFavorite />;

export default {
  id: 'available',
  title: 'Available themes',
  description: `To apply a different theme, simply import it, and pass it to your [ThemeProvider](/components/theme-provider).

\`\`\`js
import limeTheme from 'mineral-ui/themes/limeTheme'; // Available themes: blueTheme, duskTheme, indigoTheme, limeTheme, mineralTheme, purpleTheme, skyTheme, slateTheme, tealTheme
\`\`\`
  `,
  scope: {
    Button,
    icon,
    ThemeProvider,
    blueTheme,
    duskTheme,
    indigoTheme,
    limeTheme,
    mineralTheme,
    purpleTheme,
    skyTheme,
    slateTheme,
    tealTheme
  },
  source: `
    <ThemeProvider theme={limeTheme}>
      <Button primary iconStart={icon}>I prefer choice!</Button>
    </ThemeProvider>
  `
};
