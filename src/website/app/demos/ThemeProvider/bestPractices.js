/* @flow */
export default [
  {
    type: 'do',
    description: `Try to keep global theme overrides all in one place, as they
will be easier to change later.`,
    example: `
\`\`\`
const myTheme = createTheme({
  overrides: {
    color_required: 'rebeccapurple'
  }
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
    color: 'darkgray'
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
<ThemeProvider theme={{ color: '#f00' }}>
  <div>Awesome custom app</div>
</ThemeProvider>
\`\`\`
`
  }
];
