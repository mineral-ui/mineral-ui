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
export default [
  {
    type: 'do',
    title: 'override theme variables at the top level',
    example: `
\`\`\`
import mineralTheme from 'mineral-ui/themes/mineral';

<ThemeProvider theme={{
  ...mineralTheme,
  color_primary: 'rebeccapurple'
}}>
  <App />
</ThemeProvider>
\`\`\`
`,
    description: `Try to keep theme overrides all in one place, as they will be easier to change later.
If you are creating custom-themed components which will be re-used, it's fine to keep them in the component definition.`
  },
  {
    type: 'do',
    title: 'use a second or third themeprovider to style different sections',
    example: `
\`\`\`
<ThemeProvider>
  <div>The Main Part of your app</div>
  <ThemeProvider theme={{
    color_primary: 'limegreen'
  }}>
    <div>The admin section</div>
  </ThemeProvider
</ThemeProvider>
\`\`\`
`,
    description: `You might want to style different pages of your app with separate themes to create a visual separation.`
  },
  {
    type: 'dont',
    title: 'override themes unless you really need to',
    example: `
\`\`\`
<ThemeProvider theme={{ color_primary: '#f00' }}>
  <div>Awesome custom app</div>
</ThemeProvider>
\`\`\`
`,
    description: `Try to use the default Mineral UI theme as-is. We've designed the colors, typography and layout as a system to provide turn-key consistency for your app.`
  }
];
