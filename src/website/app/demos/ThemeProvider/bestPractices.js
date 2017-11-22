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
    description: `Try to keep global theme overrides all in one place, as they
will be easier to change later.`,
    example: `
\`\`\`
const myTheme = createTheme('blue', {
  color_text: 'rebeccapurple'
});

<ThemeProvider theme={myTheme}>
  <App />
</ThemeProvider>
\`\`\`
`
  },
  {
    type: 'do',
    description: `Use additional ThemeProviders to style different sections. You
might want to style different portions of your app with separate themes to
create a visual separation.`,
    example: `
\`\`\`
<ThemeProvider>
  <ThemeProvider theme={{
    color_text: 'darkgray'
  }}>
    <nav>Navigation<nav>
  </ThemeProvider>
  <main>The main part of your app</main>
</ThemeProvider>
\`\`\`
`
  },
  {
    type: 'dont',
    description: `Don't override themes unless you really need to. Try to use
the default Mineral UI theme as-is. We've designed the colors, typography and
layout as a system to provide turn-key consistency for your app.`,
    example: `
\`\`\`
<ThemeProvider theme={{ color_text: '#f00' }}>
  <div>Awesome custom app</div>
</ThemeProvider>
\`\`\`
`
  }
];
