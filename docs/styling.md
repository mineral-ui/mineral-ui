# Styling

This project uses [Glamorous](https://github.com/paypal/glamorous/) for its styling. ([Why?](https://github.com/mineral-ui/mineral-ui/blob/master/docs/discussions/styling.md))


##### Contents

1. [Quick Start](#quick-start)
1. [Using Themes](#using-themes)
1. [Common Scenarios](#common-scenarios)
1. [API](#api)


## Quick Start

Using CSS, you might have done something like this:

```css
.Button {
  background-color: white;
  border: 0;
  color: royalblue;
  padding: 0.5rem 1rem;
}

.Button:hover, .Button:focus {
  outline: 1px dotted skyblue;
}

.Button--primary {
  background-color: royalblue;
  color: white;
}

.Button > .Icon {
  color: inherit;
}
```

Which you then apply to your component via the `className` prop:

```jsx
export default function Button({ children, kind }) {
  return (
    <button className={`Button ${kind === 'primary' ? 'Button--primary' : ''}`}>{children}</button>
  );
}
```

In Mineral UI, the above would be done like so:

```jsx
import { createStyledComponent } from '@mineral-ui/component-utils';

export default createStyledComponent('button', (props, theme) => ({
  backgroundColor: props.kind === 'primary' ? 'royalblue' : 'white',
  border: 0,
  color: props.kind === 'primary' ? 'white' : 'royalblue',
  padding: '0.5rem 1rem',

  '&:hover,&:focus': {
    outline: '1px dotted skyblue'
  }
}));
```

##### To Convert CSS Rules to JS Object:

1. Remove identifying class (`.Button`, above) in all selectors, as it is no longer needed
    - For pseudo selectors and pseudo elements, replace it with an `&` (`.Button:hover` -> `&:hover`)
1. Wrap pseudo selectors and pseudo elements in quotes to make them a string
1. Remove spaces after commas between multiple selectors (`'&:hover, &:focus'` -> `'&:hover,&:focus'`)
1. Selectors become keys in the JS object, so place a `:` after them
1. Change CSS property names to `camelCase` – they are now object keys as well – and change non-integer values into strings
1. Modifier classes are no longer necessary; just directly reference the props to write your styles
1. Try to avoid descendant selectors

[More details and examples](https://github.com/threepointone/glamor/blob/master/docs/howto.md).


## Using Themes

Theming is a core concept in Mineral UI. To illustrate, consider the signature of [`createStyledComponent()`](#createstyledcomponentelement-styles-options), e.g.:

```js
const MyComponent = createStyledComponent('div', (props, theme) => ({
  backgroundColor: theme.color_primary
}));
```

 The [`ThemeProvider`](#themeprovider-theme)(s) in your app provides the theme to other Mineral UI and/or Glamorous components within that ThemeProvider. Your app [must have a ThemeProvider at its root](../README.md#getting-started) and can optionally nest additional ThemeProviders to apply a custom theme to a section of your app. Nested ThemeProviders shallowly merge their theme with the parent theme.

The theme itself (see the default [MineralTheme](../packages/component-utils/src/mineralTheme.js) for an example) is a simple shallow object of variables that are shared across components.

Each component can also have a "theme", which is not a file, but rather a set of variables available to override default values. E.g., if Mineral UI's Button component looked like this:

```js
const Button = createStyledComponent('button', (props, theme) => ({
  color: theme.Button_color || theme.color_primary
}));
```

The themes distributed as part of Mineral UI include a value for `color_primary` but do not include a value for `Button_color`. In our component code, we leave the component-level variable, `Button_color`, as a hook for you to define if you'd like. Component-level theme variables start with the capitalized component name to differentiate from the global variables. When you'd like to override the Mineral UI theme at a component level in your app, you can use [`createThemedComponent`](#createthemedcomponentelement-theme):

```js
const MyButton = createThemedComponent(Button, {
  Button_color: 'tomato'
});
```


## Styling Your App, Common Scenarios

When using Mineral UI components in your app, as you come across styling needs, you should consider your options in this order. This helps your app maintain design consistency and ensures future upgrades go smoothly.


### Styling a Specific Component

#### 1. Component Theme Variable Override

If you need to override a component-specific theme variable for a specific component.

```jsx
const MyButton = createThemedComponent(Button, {
  Button_color_text: 'tomato'
});
```

#### 2. Global Theme Variable Override

If you need to override a global theme variable for a specific component.

```jsx
const MyButton = createThemedComponent(Button, {
  color_primary: 'tomato'
});
```

#### 3. Style Override

If you need to override or write arbitrary styles for a specific component. _Use of this wrapper is not encouraged, as it is more likely to break with future updates._

```jsx
const MyButton = createStyledComponent(Button, (props, theme) => ({
  color: theme.color_warning,
  letterSpacing: '1px'
}));
```


### Styling Multiple Components

#### 1. Global Theme Variable Override

If you need to override a global theme variable for all child components.

```jsx
<ThemeProvider theme={{ color_primary: 'tomato' }}>
  {/* Any components placed here will have their primary theme color overridden */}
</ThemeProvider>
```

#### 2. Component Theme Variable Override

If you need to override a component-specific theme variable for all child components, consider using a themed component instead.

```jsx
const MyButton = createThemedComponent(Button, {
  Button_color_text: 'tomato'
});
```


## API

To help ease future upgrades, we provide a few wrappers around Glamorous's API:


### `createStyledComponent(element, styles, options)`

This is how you apply arbitrary styles to a component.

`element`: a React component _or_ a string representation of an HTML element

`styles`: an [object of style rules](https://github.com/threepointone/glamor/blob/master/docs/howto.md) _or_ a function that accepts props, theme, and context and returns an object of style rules

`options`: An object of optional configuration. A mix of Mineral UI and [Glamorous options](https://github.com/paypal/glamorous/#glamorous-api). Most common uses are setting a display name on your component, `{displayName: 'MyComponentName'}`, declaring which props to forward on to the element, `{forwardProps: [href, customProp]}`, and including a style reset `{ includeStyleReset: true }`.

##### Example Usage
```jsx
const Button = createStyledComponent('button', (props, theme) => ({
  color: theme.Button_color_text || theme.color_primary,
  fontSize: theme.font_size_3,
  padding: props.large ? `${theme.measurement_2} ${theme.measurement_3}` : `${theme.measurement_1} ${theme.measurement_2}`
}));

// Then, in render:

<Button large>This is a styled button</Button>
```


### `createThemedComponent(element, theme)`

If you only need to style the themed properties of a component, you can use this helper. It's effectively the same as wrapping a `ThemeProvider` around a single component.

`element`: a React component _or_ a string representation of an HTML element

`theme`: a shallow object of theme variables _or_ a function that accepts props, theme, and context and returns an object of theme variables

##### Example Usage
```jsx
const MyButton = createThemedComponent(Button, {
  Button_color_text: '#c33'
});

// Then, in render:

<MyButton>This is a themed button</MyButton>
```


### `<ThemeProvider theme>`

Wrap any number of components in a `ThemeProvider` to have those components reference the specified theme. That theme will be shallowly merged with the parent theme.

`theme`: a shallow object of theme variables and their values (defaults to `mineralTheme`)

##### Example Usage
```jsx
// In render:

<ThemeProvider theme={myCustomTheme}>
  {/* Any components placed here will use myCustomTheme */}
</ThemeProvider>
```
