# Mineral UI v0.57.0 Migration Guide

Mineral UI has been updated to enable recent React features ([see below](#Rationale)) and upgrade to the latest versions of [emotion][] (used for styling our components) and [react-popper][] (which powers components like [Popover][], [Dropdown][], [Select][], and [Tooltip][]). This update contains some breaking changes and other notable features, which are detailed below.

> If you're using emotion outside of Mineral UI's API or experiencing other difficulties, [emotion's Migration Guide][] may help you.


## Rationale

While this update contains significant breaking changes, we think it's the right choice for Mineral UI because these changes:

- Expose a smaller, more consistent API surface
- Allow access to useful emotion features
    - [`as`][as prop] & [`css`][css prop] props
    - [targeting other emotion components][]
    - smaller bundle size & faster performance
- Provide easier adoption for consumers already using emotion
- Allow access to useful React features
    - [Error boundaries, portals, reduced file size, and more][react blog 16]
    - [New lifecycle methods, context API][react blog 16.3]
- Address some tech debt and unblock future React updates


## ![Breaking][] Dependency Changes
* Remove `emotion` and `react-emotion`
* Add `@emotion/core` `@emotion/is-prop-valid` `@emotion/styled`
* Minimum supported React version is now [16.3][react changelog 16.3] (was [15.3][react changelog 15.3])


## API Changes

### ![Breaking][] `createStyledComponent` → `styled` (from emotion)

We've removed `createStyledComponent` in favor of using [emotion's `styled` function][styled] directly.

```js
import { createStyledComponent } from 'mineral-ui/styles';

createStyledComponent(ComponentOrElementToBeStyled, styles, options)

↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

import styled from '@emotion/styled';

styled(ComponentOrElementToBeStyled, options)(styles)
```


#### `options`


##### `displayName` → `label`

Instead of providing a `displayName` option, provide a [`label` property][label] in your styles.

> Note that [babel-plugin-emotion][] will auto-label components for you.

```js
import { createStyledComponent } from 'mineral-ui/styles';

createStyledComponent(ComponentOrElementToBeStyled, styles, {
  displayName: 'DisplayName'
})

↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

import styled from '@emotion/styled';

styled(ComponentOrElementToBeStyled, options)({
  label: 'DisplayName',
  // ...rest of your styles
})
```


##### `filterProps`, `forwardProps`, & `rootEl` → `shouldForwardProp`

These two options [carried over from Glamorous][emotion migration] have been deprecated in favor of emotion's [`shouldForwardProp`][shouldForwardProp] (combined with [`isPropValid`][isPropValid]).

The built-in tag-specific prop filtering provided with `rootEl`  has been deprecated in favor of using `shouldForwardProp` & `isPropValid`. In addition to the reduction in complexity in both the library and for consumers, this was deprecated because it was not significantly more useful in practice than a tag-agnostic approach, as used by `isPropValid`.

> From the [emotion docs][shouldForwardProp]: "By default, Emotion passes all props to custom components and only props that are valid html attributes for string tags."

```js
import { createStyledComponent } from 'mineral-ui/styles';

createStyledComponent(ComponentOrElementToBeStyled, styles, {
  filterProps: ['propToFilter'],
  forwardProps: ['propToForward']
})

↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';

styled(ComponentOrElementToBeStyled, {
  shouldForwardProp:
    (prop) =>
      prop === 'propToForward' || (prop !== 'propToFilter' && isPropValid(prop))
})(styles)
```


##### `includeStyleReset` → `componentStyleReset`

Instead of providing the option, call the function with the theme and spread the result at the start of your styles.

```js
import { createStyledComponent } from 'mineral-ui/styles';

createStyledComponent(ComponentOrElementToBeStyled, styles, {
  includeStyleReset: true
})

↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

import styled from '@emotion/styled';
import { componentStyleReset } from 'mineral-ui/styles';

styled(ComponentOrElementToBeStyled, options)(({ theme }) => ({
  ...componentStyleReset(theme),
  // ...rest of your styles
}))
```


##### `withProps` → _deprecated_

This option has been deprecated entirely. Internally, we use [recompose's `withProps` HOC][withProps] to meet this need.

```js
import { createStyledComponent } from 'mineral-ui/styles';

createStyledComponent(ComponentOrElementToBeStyled, styles, {
  withProps: { propName: 'propValue' }
})

↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

import styled from '@emotion/styled';
import withProps from 'recompose/with-props';

withProps({ propName: 'propValue' })(styled(ComponentOrElementToBeStyled, options)(styles))
```


#### `innerRef` prop

The `innerRef` prop on styled components has been deprecated; use `ref` instead.


#### `element` prop → `as` prop

A number of components had an `element` prop, which allowed changing the rendered element (or Component). These have been deprecated in favor of using [emotion's `as` prop][as prop] directly.

Affected components:

* [Box][]
* [Button][]
* [DialogTitle][]
* [Flex][]
* [FlexItem][]
* [Grid][]
* [GridItem][]
* [Link][]
* [NavItem][]
* [PrimaryNav][] & [SecondaryNav][] (`itemElement` -> `itemAs`)
* [StartEnd][]
* [Table][] (`titleElement` -> `titleAs`)
* [Text][]

> This also means that you can use the `as` prop on _any_ Mineral UI component.


### ![Breaking][] `createThemedComponent` → `themed`

This has been renamed and its signature has changed to match that of `styled`. It otherwise functions exactly the same as before.

```js
import { createThemedComponent } from 'mineral-ui/themes';

createThemedComponent(ComponentToBeThemed, theme)

↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

import { themed } from 'mineral-ui/themes';

themed(ComponentToBeThemed)(theme)
```


### ![Breaking][] Render props for [Dropdown][], [Popover][], and [Select][]

[react-popper's][react-popper] API changed, so the manner by which you provide custom components leveraging that API has changed as well. See each example for details:

* [Dropdown Custom Trigger][]
* [Popover Custom Content][]
* [Popover Custom Trigger][]
* [Select Custom Trigger][]


### ![Breaking][] [Button][] no longer has a default `type`

`button` elements have an implicit `type` of `'submit'`. [Button's][Button] `type` default value of `'button'` has been removed to use the implicit value.


### ![New][] `css` prop

Mineral UI components are ready to use with [emotion's `css` prop][css prop]:

```js
import Box from 'mineral-ui/Box';

render(
  <Box
    css={{
      backgroundColor: 'rebeccapurple',
      color: 'white'
    }}
    {...props}
  />
);
```


[emotion]: https://emotion.sh/
[react-popper]: https://fezvrasta.github.io/react-popper/
[emotion's Migration Guide]: https://emotion.sh/docs/migrating-to-emotion-10
[as prop]: https://emotion.sh/docs/styled#as-prop
[css prop]: https://emotion.sh/docs/css-prop
[targeting other emotion components]: https://emotion.sh/docs/styled#targeting-another-emotion-component
[react blog 16]: https://reactjs.org/blog/2017/09/26/react-v16.0.html
[react blog 16.3]: https://reactjs.org/blog/2018/03/29/react-v-16-3.html
[react changelog 16.3]: https://github.com/facebook/react/blob/master/CHANGELOG.md#1630-march-29-2018
[react changelog 15.3]: https://github.com/facebook/react/blob/master/CHANGELOG.md#1530-july-29-2016
[styled]: https://emotion.sh/docs/styled
[label]: https://emotion.sh/docs/labels
[babel-plugin-emotion]: https://emotion.sh/docs/babel-plugin-emotion
[emotion migration]: ./emotion-migration.md
[shouldForwardProp]: https://emotion.sh/docs/styled#customizing-prop-forwarding
[isPropValid]: https://www.npmjs.com/package/@emotion/is-prop-valid
[withProps]: https://github.com/acdlite/recompose/blob/master/docs/API.md#withprops

[Box]: https://mineral-ui.com/components/box
[Button]: https://mineral-ui.com/components/button
[DialogTitle]: https://mineral-ui.com/components/dialog-title
[Dropdown]: https://mineral-ui.com/components/dropdown
[Flex]: https://mineral-ui.com/components/flex
[FlexItem]: https://mineral-ui.com/components/flex-item
[Grid]: https://mineral-ui.com/components/grid
[GridItem]: https://mineral-ui.com/components/grid-item
[Link]: https://mineral-ui.com/components/link
[NavItem]: https://mineral-ui.com/components/nav-item
[Popover]: https://mineral-ui.com/components/popover
[PrimaryNav]: https://mineral-ui.com/components/primary-nav
[SecondaryNav]: https://mineral-ui.com/components/secondary-nav
[Select]: https://mineral-ui.com/components/select
[StartEnd]: https://mineral-ui.com/components/start-end
[Table]: https://mineral-ui.com/components/table
[Text]: https://mineral-ui.com/components/text
[Tooltip]: https://mineral-ui.com/components/tooltip

[Dropdown Custom Trigger]: https://mineral-ui.com/components/dropdown/custom-trigger
[Popover Custom Content]: https://mineral-ui.com/components/popover/custom-content
[Popover Custom Trigger]: https://mineral-ui.com/components/popover/custom-trigger
[Select Custom Trigger]: https://mineral-ui.com/components/select/custom-trigger

[Breaking]: https://img.shields.io/badge/-Breaking-red.svg?colorA=d05741&colorB=d05741
[New]: https://img.shields.io/badge/-New-green.svg?colorA=green&colorB=green
