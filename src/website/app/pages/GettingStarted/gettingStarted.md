# Getting Started

We made Mineral UI to help you quickly build React apps with a
high-quality UI.

## Installation

Install the [Mineral UI package](https://www.npmjs.com/package/mineral-ui):

```bash
npm install --save mineral-ui
```

Then install any missing peer dependencies reported by `npm` or `yarn`.

## Usage

```jsx
import React from 'react';
import { render } from 'react-dom';
import Button from 'mineral-ui/Button';
import ThemeProvider from 'mineral-ui/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Button>
        Hello World
      </Button>
    </ThemeProvider>
  );
}

render(<App />, document.getElementById('app'));
```

<p></p>

<Callout title="Note">
  <p>Your app must be wrapped in a <code>ThemeProvider</code> at its root
  in order for the styles to apply correctly.</p>

  <p>Also, please see our <a href="https://github.com/mineral-ui/mineral-ui/tree/master/docs/import-syntax.md">import syntax guidelines</a>.</p>
</Callout>

### Open Sans Font

Mineral UI was designed around
[Open Sans](https://fonts.google.com/specimen/Open+Sans). To get the
components to look right, you will need to include this font in your
project yourself or our styles will fall back to system fonts. To
quickly include this font in your app, copy this code into the \`head\`
of your HTML document.

```html
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
```

For more options loading this font from Google, check out the Seleted
Family popup, in the [specimen](https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans).
You can also download the font file and serve it yourself if you’d like,
but we’ll leave that to you.

### Styling

This project uses [Glamorous](https://github.com/paypal/glamorous) for
its styling. Please see our
[documentation](https://github.com/mineral-ui/mineral-ui/blob/master/docs/styling.md)
for details.

### Theming

Theming is a core concept in Mineral UI. Refer to the
[documentation](/guidelines/theming) for details.

## Contributing

We welcome all contributors who abide by our
[Code of Conduct](https://github.com/mineral-ui/mineral-ui/blob/master/CODE_OF_CONDUCT.md)
Please see the [Contributors Guide](https://github.com/mineral-ui/mineral-ui/blob/master/CONTRIBUTING.md)
and [Developer Docs](https://github.com/mineral-ui/mineral-ui/blob/master/docs/README.md)
for more details on submitting a PR, setting up a local dev environment,
running tests, etc...

## Browser Support

Mineral UI supports the latest versions of

- Chrome
- Firefox
- Safari
- Edge
- Internet Explorer 11
