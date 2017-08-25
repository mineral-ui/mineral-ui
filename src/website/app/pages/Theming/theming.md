# Theming

Theming is a core concept in Mineral UI. To illustrate, consider the
signature of [createStyledComponent](/components/utils#create-styled-component),
e.g.:

```jsx
const MyComponent = createStyledComponent('div', props => ({
  backgroundColor: props.theme.color_primary
}));
```

The [ThemeProvider](/components/theme-provider)(s) in
your app provides the theme to other Mineral UI and/or Glamorous
components within that ThemeProvider. Your app
[must have a ThemeProvider at its root]/getting-started) and can
optionally nest additional ThemeProviders to apply a custom theme to a
section of your app. Nested ThemeProviders shallowly merge their theme
with the parent theme.

The theme itself (see the default mineralTheme below for an example) is
a simple shallow object of variables that are shared across components.

Each component can also have a “theme”, which is not a file, but rather
a set of variables available to override default values. E.g., if
Mineral UI’s [Button](/components/button) component looked like this:

```jsx
const Button = createStyledComponent('button', props => ({
  color: props.theme.Button_color || props.theme.color_primary
}));
```

The themes distributed as part of Mineral UI include a value for
`color_primary` but do not include a value for `Button_color`. In
our component code, we leave the component-level variable,
`Button_color`, as a hook for you to define if you’d like.
Component-level theme variables start with the capitalized component
name to differentiate from the global variables. When you’d like to
override the Mineral UI theme at a component level in your app, you can
use [createThemedComponent](/components/utils#create-themed-component):

```jsx
const MyButton = createThemedComponent(Button, {
  Button_color: 'tomato'
});
```

## Theme Variables

Themes in Mineral UI are made of the following variables. The values
below come from the default mineralTheme. Note the naming convention:
‘property_target_variant_state’.

<!-- Table of theme variables here -->
