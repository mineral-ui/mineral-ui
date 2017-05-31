# Styling

This project uses [Glamorous](https://github.com/paypal/glamorous/) for its styling. ([Why?](https://github.com/mineral-ui/mineral-ui/blob/master/docs/discussions/styling.md))


##### Contents

1. [Common Scenarios](#common-scenarios)
2. [API](#api)


## Common Scenarios

As you come across styling needs, you should consider your options in this order. This helps your app maintain design consistency and ensures future upgrades go smoothly.


### Styling a Specific Component

#### 1. Component Theme Variable Override

If you need to override a component-specific theme variable for a specific component.

```jsx
const MyButton = createThemedComponent(Button, {
  Button_color_text: '#c33'
});
```

#### 2. Global Theme Variable Override

If you need to override a global theme variable for a specific component.

```jsx
const MyButton = createThemedComponent(Button, {
  color_primary: '#c33'
});
```

#### 3. Style Override

If you need to override or include arbitrary styles for a specific component. Use of this pattern is not encouraged, as your styles are more likely to break with future updates.

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
<ThemeProvider theme={{ color_primary: '#c333' }}>
  {/* Any components placed here will have their primary theme color overridden */}
</ThemeProvider>
```

#### 2. Component Theme Variable Override

If you need to override a component-specific theme variable for all child components, consider using a themed component instead.

```jsx
const MyButton = createThemedComponent(Button, {
  Button_color_text: '#c33'
});
```


## API

To help ease future upgrades, we provide a few wrappers around Glamorous's API:


### `createStyledComponent(element, styles, options)`

This is how you apply arbitrary styles to a component.

`element`: a React component _or_ a string representation of an HTML element

`styles`: a function that accepts props and theme (from state) and returns an [object of style rules](https://github.com/threepointone/glamor/blob/master/docs/howto.md) _or_ a plain object of style rules

`options`: please reference the options documented for the [`glamorous()` API](https://github.com/paypal/glamorous/#glamorous-api)

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

`theme`: a shallow object of theme variables and their values

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
