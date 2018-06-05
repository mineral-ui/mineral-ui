Mineral UI is built on a design system with styles ready to go out of the box.  We realize however that there will be cases when you need to customize styles for your unique needs.  Below are some different techniques for customizing Mineral UI styles across all levels of your application.

## Customization Techniques

### Themes

Theming is a core concept in Mineral UI.  It is powerful feature capable of providing style customizations from the application level to the component level and should generally be your first choice when looking to make style customizations. See the [theming page](/theming) for more details.

### createStyledComponent

This function creates a new styled component based on another component or DOM element.

```jsx
import { createStyledComponent } from 'mineral-ui/styles';
import Button from 'mineral-ui/Button';

const MyButton = createStyledComponent(Button, {
  outline: '3px dashed tomato'
});
```

See the [API documentation](#styling-api) and more examples below.

### CSS classes

Additional CSS classes can be applied to components using the standard React `className` prop.

```jsx
<Button className="myButton" />
```

Mineral UI uses [Emotion](https://emotion.sh/) for component styling.  Emotion
provides an additional styling utility, the
[css function](https://emotion.sh/docs/css), which generates a CSS class that
can be passed to a component using the standard React `className` prop.

```jsx
import { css } from 'react-emotion';

<Button className={css({ outline: '3px dashed tomato' })} />
```

<Callout title="Note">
  <p key={0}>
    Mineral UI does not currently
    support <a key={0} href="https://emotion.sh/docs/css#css-prop">Emotion's css prop</a> but
    intends to in the future when it is no longer reliant on a babel plugin.
  </p>
</Callout>

### Inline styles

Inline styles can be applied to components using the standard React `style` prop.

```jsx
<Button style={{ outline: '3px dashed tomato' }} />
```


## API

### `createStyledComponent(element, styles, options)`

This function is used to create a new styled component based on another component or DOM element.

**Parameters**

 * `element`: A React component or a DOM element tag name
 * `styles`: A [style rule object](https://emotion.sh/docs/css), an array of style rule objects, or a function that accepts props and context and returns either a style
 rule object or an array of style rule objects.
 * `options`: Optional. An object with the following shape. All properties are optional.

| Option              | Type          | Description                                                                                        |
|---------------------|---------------|----------------------------------------------------------------------------------------------------|
| `displayName`       | String        | Sets component displayName and CSS className label during development                              |
| `filterProps`       | Array<String> | Props that should not be passed to child components                                                |
| `forwardProps`      | Array<String> | Props that should be passed to child components. Takes precedence over `filterProps` and `rootEl`. |
| `includeStyleReset` | boolean       | Includes a minimal CSS style reset                                                                 |
| `rootEl`            | String        | HTML tag name of the rendered DOM node. Helps ensure that only valid attributes reach the DOM.     |
| `withProps`         | Object        | <key, value> pairs of props to apply to a component                                                |

**Returns**

* A React component

**Examples**

_With a simple style object_
```jsx
const StyledSample = createStyledComponent(Sample, {
  outline: '3px dashed tomato'
});
```

_With a style function.  Use a style function when you need access to the theme or other props._
```jsx
const StyledSample = createStyledComponent(Sample, ({ theme }) => ({
  outline: '3px dashed tomato',
  fontSize: theme.h1_fontSize
}));
```

_With a style object and additional options_
```jsx
const StyledSample = createStyledComponent(Sample, {
  outline: '3px dashed tomato'
}, {
  displayName: 'StyledSample',
  includeStyleReset: true
});
```
