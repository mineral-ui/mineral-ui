Mineral UI is built on a design system with styles ready to go out of the box.  We realize however that there will be cases when you need to customize styles for your unique needs.  Below are some different techniques for customizing Mineral UI styles across all levels of your application.

## Customization Techniques

### Themes

Theming is a core concept in Mineral UI.  It is powerful feature capable of providing style customizations from the application level to the component level and should generally be your first choice when looking to make style customizations. See the [theming page](/theming) for more details.

### createStyledComponent

This function is used to create a new styled component based on another component or DOM element.

```jsx
import { createStyledComponent } from 'mineral-ui/styles';
import Button from 'mineral-ui/Button';

const MyButton = createStyledComponent(Button, {
  outline: '3px dashed tomato'
});
```

See the [API documentation](#styling-api) and more examples below.

### Glamorous API

Mineral UI uses [Glamorous](https://glamorous.rocks) for styling components.  Glamorous provides an additional styling mechanism, the `css` prop.  The `css` prop functions similar to the standard React `style` prop, except that styles are applied via a generated CSS class rather than via inline styles.

```jsx
<Button css={{ outline: '3px dashed tomato' }} />
```

### CSS classes

Additional CSS classes can be applied to components using the standard React `className` prop.

```jsx
<Button className="myButton" />
```

These CSS class names can be defined using standard CSS or via [Glamor](https://github.com/threepointone/glamor).

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
 * `styles`: An [object of style rules](https://github.com/threepointone/glamor/blob/master/docs/howto.md)
 or a function that accepts props and context and returns an object of style
 rules
 * `options`: Optional. An object containing a mix of Mineral UI and
 [Glamorous options](https://glamorous.rocks/api).  Common uses include
    * setting a display name on your component: `{ displayName: 'MyComponent' }`,
    * declaring which props to forward to the DOM element: `{ forwardProps: [href, customProp] }`,
    * and including a style reset: `{ includeStyleReset: true }`

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
