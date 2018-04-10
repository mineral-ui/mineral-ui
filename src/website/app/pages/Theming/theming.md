Theming is a core concept in Mineral UI.  Themes provide a consistent look and feel across pages with varied functionality.  Mineral UI makes it simple to implement and maintain theming across your app.

<Button primary element="a" href="/palette-demo/">Mineral UI Palette Demo</Button>

## Common Scenarios

### Theme your entire app

Wrap your app in a [ThemeProvider](#common-scenarios-api) in order for styles to be properly applied. The ThemeProvider provides the theme to the tree of Mineral UI components, and any other Glamorous components contained within.

```jsx
import React from 'react';
import { render } from 'react-dom';
import Button from 'mineral-ui/Button';
import { ThemeProvider } from 'mineral-ui/themes';

function App() {
  return (
    <ThemeProvider>
      <Button>
        Hello World
      </Button>
    </ThemeProvider>
  );
}

render(<App />, document.getElementById('app'));
```

### Theme a portion of your app

ThemeProviders may be nested in order to apply a custom theme to a portion of your app.  Nested ThemeProviders shallowly merge their theme with the parent theme.  The theme itself is a simple shallow object of variables that are shared across components.  [See the default mineralTheme below for an example](#common-scenarios-theme-structure).

```jsx
<ThemeProvider>
  <ThemeProvider theme={{ color_primary: 'darkgray' }}>
    <nav>Navigation<nav>
  </ThemeProvider>
  <main>The main part of your app</main>
</ThemeProvider>
```

### Theme a component

Each component has a set of component-level theme variables that may be overridden to adjust styles on a per component basis.  These are documented on the individual component pages,  e.g. [Button theme variables](/components/button#theme-variables).

To theme a component, use [createThemedComponent](#common-scenarios-api) as shown below.  It is effectively the same as wrapping your component with a ThemeProvider.

```jsx
import { createThemedComponent } from 'mineral-ui/themes';

const MyButton = createThemedComponent(Button, {
  Button_backgroundColor: 'tomato'
});
```

### Create your own theme

Use [createTheme](#common-scenarios-api) in order to create a custom theme.  Once created, this theme can be applied using a ThemeProvider.

```jsx
import React from 'react';
import { render } from 'react-dom';
import Button from 'mineral-ui/Button';
import { createTheme, ThemeProvider } from 'mineral-ui/themes';

const myTheme = createTheme('dusk');

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Button>
        Hello World
      </Button>
    </ThemeProvider>
  );
}

render(<App />, document.getElementById('app'));
```


## API

### `<ThemeProvider theme />`

This component takes a theme property and provides it to the tree of components contained within.  When nested, child themes will be shallowly merged with the parent theme.

See the previous examples and the [ThemeProvider](/components/theme-provider) page for more details.

### `createThemedComponent(component, theme)`

This function is useful when you need to override component-level theme variables.
It is effectively the same as wrapping a ThemeProvider around a single component.

**Parameters**

* `component`: A React component
* `theme`: A shallow object of theme variables or a function that accepts props and context and returns an object of theme variables

**Returns**

* The original React component wrapped in a ThemeProvider with the merged theme provided.

**Example**

```jsx
import { createThemedComponent } from 'mineral-ui/themes';

const MyButton = createThemedComponent(Button, {
  Button_backgroundColor: 'tomato'
});
```

### `createTheme(baseColor, overrides)`

This function is useful when you want to create a new theme that uses a different color scheme or otherwise overrides default values.

**Parameters**

* `baseColor`: Optional.  Default: 'blue'.  Color used to generate theme color scheme.  Value must be a valid [Mineral UI color](/color#guidelines-ramps).
* `overrides`: Optional.  A shallow object of variables to be spread on to the default theme.  Useful to override default values.

**Returns**

* A new theme object

**Example**

```jsx
import { createTheme } from 'mineral-ui/themes';

const myTheme = createTheme('dusk', {
  fontFamily: 'Comic Sans MS'
});
```


## Theme Structure

Mineral UI themes are shallow objects of variables that are shared across components. The values in the table below are from the default mineralTheme.
Note the naming convention: `[target]_[property]_[variation]_[state]`.

<!-- Table of theme variables here -->
