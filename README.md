
[![build status](https://travis-ci.com/mineral-ui/mineral-ui.svg?branch=master)](https://travis-ci.com/mineral-ui/mineral-ui)
[![dependency status](https://david-dm.org/mineral-ui/mineral-ui.svg)](https://david-dm.org/mineral-ui/mineral-ui)
[![managed with Waffle](https://img.shields.io/badge/managed_with-Waffle-72b2e4.svg)](https://waffle.io/mineral-ui/mineral-ui)
[![Commitizen friendly](https://img.shields.io/badge/Commitizen-friendly-brightgreen.svg?style=flat)](https://github.com/commitizen/cz-cli)
[![code style Prettier](https://img.shields.io/badge/code_style-Prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# [Mineral UI](https://mineral-ui.com/)

A design system and [React](https://reactjs.org/) component library for the web that lets you quickly build high-quality, accessible apps. Created by [CA Technologies](http://ca.com).

## Project Goals

- Consistent, thoughtful design
- Accessible and inclusive
- Performant
- Responsive
- Powerful and easy to develop with inside your app


## Getting Started

### Installation

Install the [Mineral UI package](https://www.npmjs.com/package/mineral-ui) and
its dependencies.

```bash
npm install --save mineral-ui emotion emotion-theming react-emotion react react-dom
```

or

```bash
yarn add mineral-ui emotion emotion-theming react-emotion react react-dom
```


### Usage

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

> Your app must be wrapped in a [ThemeProvider](https://mineral-ui.com/components/theme-provider/) at its root in order for the styles to apply correctly.

> Also, please see our [import syntax guide](https://mineral-ui.com/import-syntax).


### Open Sans Font

Mineral UI was designed around [Open Sans](https://fonts.google.com/specimen/Open+Sans). To get the components to look right, you will need to include this font in your project yourself or our styles will fall back to system fonts. To quickly include this font in your app, copy this code into the `<head>` of your HTML document.

```html
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
```

For more options loading this font from Google, check out the Selected Family popup, in the [specimen](https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans). You can also download the font file and serve it yourself if you'd like, but we'll leave that to you.


### Styling

This project uses CSS-in-JS and [Emotion](https://emotion.sh/) for component styling. Refer to the [styling page](https://mineral-ui.com/styling/) for details.

## Questions

If you have read through the documentation but are still facing difficulties, we are happy to help. Please reproduce your error by forking our [Mineral UI Starter](https://codesandbox.io/s/v410y75m0) and adding the relevant code there. Then, send us a message on the Flowdock "Mineral & Styleguide" Flow or open an issue including the relevant link.

## Contributing

We welcome all contributors who abide by our [Code of Conduct](./CODE_OF_CONDUCT.md). Please see the [Contributors Guide](./CONTRIBUTING.md) and [Developer Docs](./docs/README.md) for more details on submitting a PR, setting up a local dev environment, running tests, etc...


### How You Can Help

All of the work for this project is accomplished via pull requests and issues. You can submit a PR or issue to:

- Update components (PR)
- Update tests (PR)
- Improve documentation (PR)
- Suggest a change/improvement/feature (issue)
- Report a bug (issue)

Thank you for offering your time, expertise, and feedback. It’s greatly appreciated!


## Versioning

Until this project reaches a 1.0 milestone, minor version numbers will simply be incremented during each release.  The [Changelog](./CHANGELOG.md) will continue to document the different types of updates, including any "breaking changes".

After the 1.0 milestone, this project will follow [SemVer](http://semver.org/).


## Browser Support

Mineral UI supports the latest versions of Chrome, Firefox, Safari, Edge, and Internet Explorer 11.


## Roadmap

Future plans and high priority features and enhancements can be found on the [Roadmap](https://mineral-ui.com/roadmap).


## License

This project is licensed under the Apache 2.0 License — see the [License](./LICENSE.md) file for details.
