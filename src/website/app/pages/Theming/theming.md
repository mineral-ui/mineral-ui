Theming is a core concept in Mineral UI.  Themes provide a consistent look and
feel across pages with varied functionality.  Mineral UI makes it simple to
implement and maintain theming across your app.

<Button primary element="a" href="/palette-demo/">Mineral UI Palette Demo</Button>

## Common Scenarios

### Theme your entire app

Wrap your app in a [ThemeProvider](#common-scenarios-api) in order for styles to
be properly applied. The ThemeProvider provides the theme to the tree of Mineral
UI components, and any other Glamorous components contained within.

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

ThemeProviders may be nested in order to apply a custom theme to a portion of
your app.  Nested ThemeProviders shallowly merge their theme with the parent
theme.  The theme itself is a simple shallow object of variables that are shared
across components.  
[See the default mineralTheme below for an example](#common-scenarios-theme-structure).

```jsx
<ThemeProvider>
  <ThemeProvider theme={{ color_themePrimary: 'darkgray' }}>
    <nav>Navigation<nav>
  </ThemeProvider>
  <main>The main part of your app</main>
</ThemeProvider>
```

### Theme a component

Each component has a set of component-level theme variables that may be
overridden to adjust styles on a per component basis.  These are documented on
the individual component pages,  e.g.
[Button theme variables](/components/button#theme-variables).

To theme a component, use [createThemedComponent](#common-scenarios-api) as
shown below.  It is effectively the same as wrapping your component with a
ThemeProvider.

```jsx
import { createThemedComponent } from 'mineral-ui/themes';

const MyButton = createThemedComponent(Button, {
  Button_backgroundColor: 'tomato'
});
```

### Create your own theme

Use [createTheme](#common-scenarios-api-{{53}}) in order to create a custom
theme. Once created, this theme can be applied using a ThemeProvider.

#### Use a custom color palette

Each theme variable with a color value derives that value from a color ramp in
[Mineral UI's palette](/color#guidelines-ramps). Those colors can be derived
from a different palette color (e.g. "danger" variables use `'bronze'` instead
of `'red'`, below) or a [custom color ramp](#common-scenarios-api-{{53}}-types)
can be used (e.g. `myAppColor` is used for "theme" variables, below).

```jsx
import React from 'react';
import { render } from 'react-dom';
import Button from 'mineral-ui/Button';
import { createTheme, ThemeProvider } from 'mineral-ui/themes';

const myAppColor = {
  [10]: '#faf0f4',
  [20]: '#fad4e4',
  [30]: '#fab4d1',
  [40]: '#f78bb8',
  [50]: '#ed5393',
  [60]: '#d6246e',
  [70]: '#b01355',
  [80]: '#8a1244',
  [90]: '#611535',
  [100]: '#421527'
}

const myTheme = createTheme({
  colors: {
    theme: myAppColor,
    danger: 'bronze',
    warning: 'dusk',
    success: 'teal'
  }
});

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

This component takes a theme property and provides it to the tree of components
contained within.  When nested, child themes will be shallowly merged with the
parent theme.

See the previous examples and the [ThemeProvider](/components/theme-provider)
page for more details.

### `createThemedComponent(component, theme)`

This function is useful when you need to override component-level theme
variables.  It is effectively the same as wrapping a ThemeProvider around a
single component.

**Parameters**

* `component`: A React component
* `theme`: A shallow object of theme variables or a function that accepts props
and context and returns an object of theme variables

**Returns**

* The original React component wrapped in a ThemeProvider with the merged theme
provided.

**Example**

```jsx
import { createThemedComponent } from 'mineral-ui/themes';

const MyButton = createThemedComponent(Button, {
  Button_backgroundColor: 'tomato'
});
```

### `createTheme(options)`

This function is useful when you want to create a new theme that uses a
different color scheme or otherwise overrides default values.

**Parameters**

* `options`: Optional. An object with the following shape. All properties are optional.

| Option           | Type            | Description                                    |
|------------------|-----------------|------------------------------------------------|
| `colors.theme`   | Color or Ramp   | Color used for all "theme" keys in the theme   |
| `colors.danger`  | Color or Ramp   | Color used for all "danger" keys in the theme  |
| `colors.success` | Color or Ramp   | Color used for all "success" keys in the theme |
| `colors.warning` | Color or Ramp   | Color used for all "warning" keys in the theme |
| `colors.black`   | string          | Color used for black in the theme              |
| `colors.gray`    | Ramp            | Color used for all "gray" values in the theme  |
| `colors.white`   | string          | Color used for black in the theme              |
| `overrides`      | Object          | <key, value> pairs of specific theme overrides |

<p key="types" id="common-scenarios-api-{{53}}-types">
  <strong key={0}>Types</strong>
</p>

* **Color**: String matching a color ramp name in the Mineral UI [palette](/color#guidelines-ramps)
* **Ramp**: Object matching this shape:

  ```
  const myRamp = {
    [10]: '<color>',
    [20]: '<color>',
    [30]: '<color>',
    [40]: '<color>',
    [50]: '<color>',
    [60]: '<color>',
    [70]: '<color>',
    [80]: '<color>',
    [90]: '<color>',
    [100]: '<color>',
    inflection: 70
  };
  ```

  <Callout title="Inflection Point">
    <p key={0}>
      Note the optional <code key={0}>inflection</code> property. Mineral UI's
      color ramps are designed to provide
      an <Link key={1} to="/color#guidelines-accessibility">accessible level of
      contrast</Link>, which they accomplish through two constraints:
    </p>
    <ol key={1}>
      <li key={0}>
        <Link key={0} to="/color#guidelines-ramps">Each ramp</Link> contains
        10 color values, each spaced roughly evenly from one another.
      </li>
      <li key={1}>
        Each ramp's inflection point (where text color changes from black to
        white to meet accessible contrast ratio standards) occurs at the
        <code key={0}>60</code> value.
      </li>
    </ol>
    <p key={2}>
      Your custom ramp must meet the first constraint of 10 values. But the
      inflection point, while advised to be <code key={0}>60</code>, may be
      different. You may define it with
      the <code key={1}>inflection</code> property to ensure adequate contrast.
    </p>
  </Callout>

**Returns**

* A new theme object

**Example**

```jsx
import { createTheme } from 'mineral-ui/themes';

const myTheme = createTheme({
  colors: { theme: 'dusk' },
  overrides: { fontFamily: 'Comic Sans MS' }
});
```

### `withTheme(component, options)`

A [higher order component (HOC)](https://reactjs.org/docs/higher-order-components.html)
that enables theme access inside any component.

**Parameters**

* `component`: A React component
* `options`: Optional. An object containing [Glamorous](https://github.com/paypal/glamorous/blob/master/src/with-theme.js)
options.

**Returns**

* The original React component with theme provided as a prop.

**Example**

```jsx
import { withTheme } from 'mineral-ui/themes';

const Direction = withTheme(({ theme }) => {
  return <span>{theme.direction}</span>;
});
```


## Theme Structure

Mineral UI themes are shallow objects of variables that are shared across
components. The values in the table below are from the default mineralTheme.
Note the naming convention: `[target]_[property]_[variation]_[state]`.

<!-- Table of theme variables here -->
