export default [
  {
    type: 'do',
    title: 'override theme variables at the top level',
    example: `
\`\`\`
import { mineralTheme } from 'mineral-ui/utils';

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
