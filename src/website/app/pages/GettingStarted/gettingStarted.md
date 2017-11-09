Mineral UI helps you quickly build React apps with high-quality, accessible components.
Use npm or yarn to get components and themes that have been tested across modern browsers.

Below are a few simple steps to apply consistent styling and hierarchy to your app,
so you can focus on solving business problems.
Mineral UI is an open source project and welcomes all contributions.

## Installation

Install the [Mineral UI package](https://www.npmjs.com/package/mineral-ui):

```bash
npm install --save mineral-ui
```

or

```bash
yarn add mineral-ui
```

Then install any missing peer dependencies reported by `npm` or `yarn`.

## Usage

```jsx
import React from 'react';
import { render } from 'react-dom';
import Button from 'mineral-ui/Button';
import { ThemeProvider } from 'mineral-ui/themes';

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

<Callout title="Note">
  <p key="one">Your app must be wrapped in a <code key="two">ThemeProvider</code> at its root
  in order for the styles to apply correctly.</p>

  <p key="three">Also, please see our <a key="four" href="https://github.com/mineral-ui/mineral-ui/tree/master/docs/import-syntax.md">import syntax guidelines</a>.</p>
</Callout>

### Open Sans Font

Mineral UI is designed around [Open Sans](https://fonts.google.com/specimen/Open+Sans). For components to look their best, use Open Sans in your project.

To quickly include Open Sans in your app, copy this code into the `head` of your HTML document.

```html
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
```

For more options loading this font from Google, check out the "Family Selected"
popup in the [specimen](https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans).
You can also download the font file and serve it yourself if you’d like,
but we’ll leave that to you.

### Styling

This project uses CSS-in-JS and [Glamorous](https://glamorous.rocks) for styling components. Refer to the [styling page](/styling/) for details.

### Theming

Theming is a core concept in Mineral UI. Refer to the [theming page](/theming/) for details.

## Contributing

We welcome all contributors who abide by our
[Code of Conduct](https://github.com/mineral-ui/mineral-ui/blob/master/CODE_OF_CONDUCT.md).
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
