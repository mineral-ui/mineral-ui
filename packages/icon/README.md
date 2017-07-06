# Icon

Mineral UI `Icon` component. Find out more about [Mineral UI](https://github.com/mineral-ui/mineral-ui).

This package provides a large number of prepackaged icon components as well as
a generic Icon component to which you can provide your own SVG.


## Installation

1. Install project [peer dependencies](../../docs/peer-dependencies.md), if not already installed

2. Install the package

  ```sh
  npm install --save @mineral-ui/icon
  ```


## Usage

### Prepackaged Icons

```jsx
import React from 'react';
import IconHelp from '@mineral-ui/icon/lib/IconHelp';

export default function MyComponent() {
  return (
    <div>
      <IconHelp />
    </div>
  );
}
```

> Note that in the example above, we suggest importing the icon directly from the lib folder rather than destructuring from the package index.  While destructuring from the index may work, caution must be taken that your module bundler tree-shaking is configured and working properly otherwise you could inadvertently import all of the icons and bloat your bundle size unnecessarily.

### Custom Icon

```jsx
import React from 'react';
import Icon from '@mineral-ui/icon';

export default function MyComponent() {
  return (
    <div>
      <Icon>
        <svg>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
        </svg>      
      </Icon>
    </div>
  );
}
```
