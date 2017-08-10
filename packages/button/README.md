# Button

Mineral UI `Button` component. Find out more about [Mineral UI](https://github.com/mineral-ui/mineral-ui).


## Installation

1. Install the package

```sh
npm install --save @mineral-ui/button
```

2. Install any missing peer dependencies reported by `npm` or `yarn`


## Usage

Wrap your app, or at least this branch of your app's render path, in [ThemeProvider](../../docs/styling.md#themeprovider-theme) in order for the styles to apply correctly.

```jsx
import React from 'react';
import Button from '@mineral-ui/button';

export default function MyComponent() {
  return (
    <div>
      <Button>Do Something</Button>
    </div>
  );
}
```
