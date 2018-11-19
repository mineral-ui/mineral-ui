# Notification Component

Notifications are inline messages that are part of the content of a UI, and alert users to a specific screen area that requires their action or attention.  They may appear within a page or dialog.  They are not dismissable, and only disappear once the issue has been resolved.

## Usage

### Basic Usage

```javascript
import React from 'react';
import Notification from 'mineral-ui/Notification';

export default () => {
  return (
    <Notification
      title="Weekly Report Available"
      variant="info"
      actions={
        text: 'View Report'
      }>
      <Text>
        Your screen time was down 7% last week, for an average of 2 hours, 53 minutes a day.
      </Text>
    </Notification>
  );
}
```

## Exports

* `Notification` (default)

## API

### `Notification` API

| Prop | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| actions | Array<{}> | false | | Array of Button props |
| children | React$Node | false | | Body content of the Notification |
| compact | boolean | false | | Place actions on same line as title. Disallows body content - title only. |
| title | string \| React$Node | true | | Title of the Notification |
| variant | 'info' \| 'danger' \| 'success' \| 'warning' | false | 'info' | Intent of the Notification |
| ...rest | any | false | | All other props will be applied to the root element |

## Dependencies

* `Button` component used for actions
* Not a direct dependency, but it is expected that any content links are built using mineral-ui `Link` component

## Accessibility

* No custom focus management necessary, though any action buttons and/or links contained within must be focusable
* `role="alert"` applied to root, which implies `aria-live="assertive"`
* Unsure if need to specify `aria-labelledby` or `aria-describedby` referencing internal title and body elements, or if they will be picked up automatically.
* Should probably disable website Notification examples for screen-readers, perhaps using `aria-live="off"`

## Design Specs

https://app.uxpin.com/edit/7456669#?id_page=83831960

## Rough DOM Structure

```js
+---------------------------------------------------------+
| Notification                                            |
| +-----------------------------------------------------+ |
| | Header                                              | |
| | +-------------------------------------------------+ | |
| | | Title                                           | | |
| | +-------------------------------------------------+ | |
| +-----------------------------------------------------+ |
| +-----------------------------------------------------+ |
| | Body                                                | |
| +-----------------------------------------------------+ |
| +-----------------------------------------------------+ |
| | Footer                                              | |
| | +-------------------------------------------------+ | |
| | | Actions                             +---------+ | | |
| | |                                     | Button  | | | |
| | |                                     +---------+ | | |
| | +-------------------------------------------------+ | |
| +-----------------------------------------------------+ |
+---------------------------------------------------------+
```

## Other Considerations

* While this component is similar in structure to Dialog and Card, is the alternate children API needed/desired here?  It may be overkill.
* Should variant be a required prop, rather than defaulted to 'info'?