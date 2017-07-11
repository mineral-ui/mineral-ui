# Archetype

Mineral UI `Card` component. Find out more about [Mineral UI](https://github.com/mineral-ui/mineral-ui).


## Installation

1. Install project [peer dependencies](../../docs/peer-dependencies.md), if not already installed

2. Install the package

  ```sh
  npm install --save @mineral-ui/card
  ```


## Usage

```jsx
import React from 'react';
import { Card, CardTitle, CardBlock } from '@mineral-ui/card';

export default function MyComponent() {
  return (
    <div>
      <Card>
        <CardTitle>My Card</CardTitle>
        <CardBlock>
          Content of my card.
        </CardBlock>
      </Card>
    </div>
  );
}
```
