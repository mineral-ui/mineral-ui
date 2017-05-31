
[![build status](https://travis-ci.org/mineral-ui/mineral-ui.svg?branch=master)](https://travis-ci.org/mineral-ui/mineral-ui)
[![managed with Waffle](https://img.shields.io/badge/managed_with-waffle-72b2e4.svg)](https://waffle.io/mineral-ui/mineral-ui)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat)](http://commitizen.github.io/cz-cli/)
[![formatted with Prettier](https://img.shields.io/badge/formatted_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> **_NOTE:_** _We’re just getting started. While we appreciate any feedback, we’re not yet ready to accept public contributions._

# [Mineral UI](https://mineral-ui.github.io/)

A design system and [React](https://facebook.github.io/react/) component library for the web brought to you by [CA Technologies](http://ca.com).


## Project Goals

- Consistent, thoughtful design
- Accessible and inclusive
- Performant
- Responsive
- Powerful and easy to develop with inside your app


## Getting Started

Mineral UI is distributed as a multitude of [npm packages](https://www.npmjs.com/search?q=@mineral-ui). E.g., to install the Hello and World packages:

1. Install project [peer dependencies](./docs/peer-dependencies.md)

  ```sh
  npm install --save @mineral-ui/style-utils glamorous glamor
  ```

2. Install the Mineral UI packages that you wish to use

  ```sh
  npm install --save @mineral-ui/hello @mineral-ui/world
  ```

3. Then, in your app, import and use just like any other React component

  _ES2015_

  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { ThemeProvider } from '@mineral-ui/style-utils';
  import Hello from '@mineral-ui/hello';
  import World from '@mineral-ui/world';

  const App = () => (
    <div>
      <Hello /> <World />
    </div>
  );

  ReactDOM.render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
    document.getElementById('app')
  );
  ```

  > Note: Your app must be wrapped in a [ThemeProvider](./docs/styling.md#themeprovider-theme) at its root in order for the styles to apply correctly.

### Styling

This project uses [Glamorous](https://github.com/paypal/glamorous/) for its styling. Please see our [documentation](./docs/styling.md) for details.


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

This project uses [SemVer](http://semver.org/) for its versioning. Each package (component) is versioned independently.


## Browser Support

Mineral UI supports the latest versions of Chrome, Firefox, Safari, Edge, and Internet Explorer 11.


## Roadmap

Future plans and high priority features and enhancements can be found in the [Roadmap](./ROADMAP.md) file.

## License

This project is licensed under the Apache 2.0 License — see the [License](./LICENSE.md) file for details.
