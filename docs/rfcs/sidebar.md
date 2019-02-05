> Note: This RFC is based on [PR #815](https://github.com/mineral-ui/mineral-ui/pull/815).

# Sidebar Components

Components to display sidebar(s), left and/or right-aligned, either on top of or beside page content.

## Usage

### Basic Usage

```javascript
import React from 'react';
import { SidebarManager, Sidebar } from 'mineral-ui/Sidebar';

export default () => {
  return (
    <SidebarManager>
      <Sidebar>
        Left align
      </Sidebar>
      [Non-Panel Content]
    </SidebarManager>
  );
}
```

### Advanced Usage

```javascript
import React from 'react';
import { SidebarManager, Sidebar } from 'mineral-ui/Sidebar';

export default () => {
  return (
    <SidebarManager inline>
      <Sidebar isCollapsed>
        Left align, beside non-panel content, collapsed to small width
      </Sidebar>

      <Sidebar>
        Same, appears immediately to the right of the first panel, not collapsed
      </Sidebar>

      <SidebarManager>
        <Sidebar align="end">
          Right align, on top of non-sidebar content
        </Sidebar>
        [Non-Panel Content]
      </SidebarManager>
    </SidebarManager>
  );
}
```

Which would produce something like:

![demo gif](https://user-images.githubusercontent.com/12184856/51675863-39d0ef80-1fd5-11e9-8ed8-2ff23a85e367.gif)

_The code above would display the right Sidebar over the page content with an overlay, which is not depicted._

## Exports

* `SidebarManager` (default)
* `Sidebar`

## API

### `SidebarManager` API

_Extends Flex, if `inline = true`_

| Prop | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| children | React$Node | false | | Sidebars and non-panel content |
| inline | boolean | false | false | Panels display beside, rather than on top of, non-panel content |
| usePortal | boolean | false | true | Use a Portal to render the SidebarManager to the body rather than as a sibling to its parent. |
| ...rest | any | false | | All other props will be applied to the root element |

### `Sidebar` API

_Extends FlexItem if `inline = true`; extends Box otherwise_

| Prop | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| align | 'start' \| 'end' | false | 'start' | Alignment of panel |
| isCollapsed | boolean | false | | Panel displays with collapsed width when true |
| isOpen | boolean | false | | Panel displays when true |
| ...rest | any | false | | All other props will be applied to the root element |

## Dependencies

Identify any internal and/or 3rd party dependencies

* Box
* Dialog (probably needs refactored)
* Flex & FlexItem
* react-transition-group

## Accessibility

Identify a11y strategy, e.g. aria, role, keyboard controls, etc.

* Non-inline Sidebars should behave, in all respects, like modal Dialogs
    * Consider using `modeless` prop instead of `inline`, to match Dialog?
    * Includes focusing behavior of trigger
* Collapsed panels should expand when content within is focused

## Design Specs

This component was contributed outside of the design org, but these specs align closely:

- [Vertical Navigation](https://preview.uxpin.com/871cc8a4f408b19ba0af468631cd762258212741#/pages/90319558/simulate/no-panels?mode=i)
    - [Sub navigation](https://preview.uxpin.com/871cc8a4f408b19ba0af468631cd762258212741#/pages/90319565/simulate/no-panels?mode=i)
    - [Overflow & measurements](https://preview.uxpin.com/871cc8a4f408b19ba0af468631cd762258212741#/pages/90319572/simulate/no-panels?mode=i)
    - [Information Architecture (IA) cases](https://preview.uxpin.com/871cc8a4f408b19ba0af468631cd762258212741#/pages/92335488/simulate/no-panels?mode=i)

## Rough DOM Structure

```js
+-------------------------------------+
| SidebarManager                      |
| +---------+ +---------------------+ |
| | Sidebar | | Non-Sidebar Content | |
| +---------+ +---------------------+ |
+-------------------------------------+
```

## Other Considerations

Identify other points of consideration, e.g. questions, key design decisions, MVP vs. future features, etc.

### Notable Changes from Original PR

* Renamed SideBar to SidebarManager and SideBarPanel to Sidebar
* Non-panel content was outside of the SidebarManager component for non-inline cases, now that content is always placed inside.
* SidebarSpacer was removed, in favor of using layout components/styles on/inside the panels instead
* SidebarOverlay was removed, in favor of displaying the overlay conditionally, whether inline or not (to match Dialog)
