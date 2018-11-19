# Foo Component

Description of the Foo component.

## Usage

### Basic Usage

```javascript
import React from 'react';
import Foo from 'mineral-ui/Foo';

export default () => {
  return <Foo />;
}
```

### Advanced Usage

```javascript
import React from 'react';
import Foo, { FooBar } from 'mineral-ui/Foo';

export default () => {
  return (
    <Foo>
      <FooBar />
    </Foo>
  );
}
```

## Exports

* `Foo` (default)
* `FooBar`

## API

### `Foo` API

| Prop | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| onClick | (e) => {}  | false | | Called when clicked |
| size | 'small' \| 'medium' \| 'large' | false | 'medium' | Available sizes |
| ...rest | any | false | | All other props will be applied to the root element |

### `FooBar` API

| Prop | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| onClick | (e) => {} | false | | Called when clicked |
| ...rest | any | false | | All other props will be applied to the root element |

## Dependencies

Identify any internal and/or 3rd party dependencies

## Accessibility

Identify a11y strategy, e.g. aria, role, keyboard controls, etc.

## Design Specs

Provide a link to design specs or imagery of such.

## Other Considerations

Identify other points of consideration, e.g. questions, key design decisions, MVP vs. future features, etc.