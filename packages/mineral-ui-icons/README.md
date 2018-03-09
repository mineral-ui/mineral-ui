
# mineral-ui-icons

Mineral UI icons packaged as a set of React components

### Installation

```sh
npm install --save mineral-ui-icons
```

### Import Syntax

#### Option 1 - ES

If tree shaking is supported and properly configured in your build chain, you can use the following import syntax. Care must be taken to ensure that it is working properly, else this syntax will cause all of the icons to be included in your bundle.

```js
import { IconHelp, IconHotTub } from 'mineral-ui-icons';
```

#### Option 2 - CommonJS

If your build chain does not support tree shaking, or if you are unsure and want to be safe, you should instead use the following import syntax.


```js
import IconHelp from 'mineral-ui-icons/IconHelp';
import IconHotTub from 'mineral-ui-icons/IconHotTub';
```

#### Plugins

There are several 3rd party plugins that allow you to write imports using the ES syntax described in option 1, without worrying about bundle size, and without yet having tree shaking working in your build chain. These may be useful as an interim step while you work towards the goal of adding tree shaking to your project.

* [babel-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports)
* [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)
* [babel-plugin-direct-import](https://www.npmjs.com/package/babel-plugin-direct-import)
* [babel-plugin-lodash](https://www.npmjs.com/package/babel-plugin-lodash)

### Usage

```jsx
import React from 'react';
import { render } from 'react-dom';
import IconHelp from 'mineral-ui-icons/IconHelp';
import { ThemeProvider } from 'mineral-ui/themes';

function App() {
  return (
    <ThemeProvider>
      <IconHelp />
    </ThemeProvider>
  );
}

render(<App />, document.getElementById('app'));
```

> Your app must be wrapped in a [ThemeProvider](../../docs/styling.md#themeprovider-theme) at its root in order for the styles to apply correctly.


### Publishing the `mineral-ui-icons` package

1. `npm run build:icons`
2. `npm version minor` (or major, prerelease, etc)
3. `npm run build`
4.  Commit changes and push to GitHub
5. `cd dist && npm publish`
