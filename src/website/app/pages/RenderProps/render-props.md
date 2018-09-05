## Overview

_Excerpted from the official [React docs][RenderProps]_:

> The term "render prop" refers to a simple technique for sharing code between
> React components using a prop whose value is a function.
>
> A component with a render prop takes a function that returns a React element
> and calls it instead of implementing its own render logic.
>
> ```jsx
> <DataProvider render={data => (
>   <h1>Hello {data.target}</h1>
> )} />
> ```

It’s important to note that just because the pattern is called "render props"
it does not mean that the prop will always be named "render". In fact, any prop
that accepts a function which a component then uses to know what to render is
technically a "render prop".


## Usage in Mineral

Numerous Mineral components make use of render props in order provide greater
customization and rendering flexibility. See: [Table][], [Select][],
[Dropdown][], [Popover][], and [Menu][].


### When to use

Render props are ideal to use when the default component implementation is
insufficient for the unique needs of your application and when the desired
customizations cannot be implemented by a simpler means, such as with Mineral's
robust [theming][] and/or [styling][] capabilities.


### Callback Argument

During the render cycle, the render prop callback function will be invoked with
an object argument containing the following information and utilities to help
customize your implementation.

* __props__: Props to be spread to your custom component
    * Note that these may not all be necessary for your implementation, or even
    valid DOM attributes, so you’ll want to apply them judiciously.  _If your
    component has been created with [createStyledComponent][], invalid DOM
    attributes will be removed automatically._
    * Further, you can override and/or compose these props as you see fit.
* __state__: The internal state of the component, if any.
* __helpers__: Miscellaneous helper methods, if any.


### Performance Considerations

#### Define render callbacks outside of render
Use an instance method, a static class method, or a separate named function that
is otherwise created outside of render. This prevents the creation of a new
function on each render cycle and thus does not break [PureComponent][] or
[shouldComponentUpdate][].

#### Minimize logic in render callback and move it to a class-based component
As the render callback function can potentially be invoked many times, it is
generally recommended to move logic into a class-based component that only
re-renders when appropriate via judicious prop forwarding and the considered
use of either [PureComponent][] or [shouldComponentUpdate][].

As this approach has some ergonomic disadvantages, and only sometimes provides
performance improvements, we recommend that you measure performance using your
browser's dev tools, and decide for yourself whether it is necessary.


### Additional Considerations

* Consider whether to build off of an existing component, e.g. `TableCell`,
or to start from scratch, e.g. `td`.  It is often, but not always, easier to
start with the default component implementation as a a base, and then simply
modify it.
* Consider whether your render callback is returning the appropriate element or
tag. e.g.  When providing a custom table cell implementation, rendering a `td`
element is appropriate, whereas a `div` is probably not.
* Consider additional props that the component accepts and whether your custom
renderer needs to support them. e.g. If the component supports a `size` prop,
but your renderer disregards it, that may provide an unexpected developer
experience.
* Consider all possible states when implementing your render callback, e.g.
disabled, hover, active, focus, etc.
* Consider how your customizations may affect other aspects of the component's
accessibility.
* Consider whether you need to support RTL languages. If so, you can use
`theme.direction` to conditionally apply the necessary styles.


## Examples

There are several noteworthy points to consider with respect to the following
examples.

* The render callbacks are kept small and lean as they can potentially be called
numerous times. In these cases, we passed all props through, but it may often be
better to apply them judiciously.
* Technically, the render callbacks could be simple function components that
contain the entire implementation, but we opted to create separate class
components to take advantage of [PureComponent][], so that they only re-render
when appropriate. Alternatively, they could implement [shouldComponentUpdate][].
* The custom components are created with [createStyledComponent][] in order to
apply custom styling with easy theme access and also to automatically filter out
invalid DOM attributes.
* [createThemedComponent][] is used in some examples to easily theme existing
component instances.
* The render callbacks, as well as the other components, should not be defined
in a render method. It is only done so here due to limitations in our example
editor; likewise components may re-render more than expected.

### Replace an Existing Component

The following example illustrates the customization of a [MenuItem][] in the
[Menu][] component by completely replacing the item implementation.

<ReplaceExisting />

### Modify or Extend an Existing Component

The following example illustrates the customization of a sortable header cell
in the [Table][] component by modifying the default implementation.

<ModifyExisting />

### Theme Access

The typical mechanisms of accessing and overriding themes, e.g.
[createStyledComponent][], [createThemedComponent][], [withTheme][], and
[ThemeProvider][] can be used in render callbacks as well, however there is an
additional case that demands an example.

#### Access a component theme, but render something custom

The following example illustrates the customization of a [MenuItem][] in the
[Menu][] component by completely replacing the item implementation, yet still
utilizing the item's theme. By using the item's theme, the custom implementation
can be visually consistent with the default MenuItem.

Note that the component theme is imported and composed with the base theme with
the help of the [withTheme][] higher order component (HOC).

Also note that using [withTheme][] will cause [shouldComponentUpdate][] (when
using a shallow comparison of props) to always return `true`, due to the
computed `theme` prop. A deep comparison can work around this behavior.

<ThemeAccess />

### More Examples

_More render prop examples can be found on the individual component pages for
those components that support render props._

[styling]: /styling
[theming]: /theming
[createStyledComponent]: /styling#customization-techniques-api
[createThemedComponent]: /theming#common-scenarios-api
[withTheme]: /theming#common-scenarios-api
[ThemeProvider]: /theming#common-scenarios-api

[Table]: /components/table
[Select]: /components/select
[Dropdown]: /components/dropdown
[Popover]: /components/popover
[Menu]: /components/menu
[MenuItem]: /components/menu-item

[RenderProps]: https://reactjs.org/docs/render-props.html
[PureComponent]: https://reactjs.org/docs/react-api.html#reactpurecomponent
[shouldComponentUpdate]: https://reactjs.org/docs/react-component.html#shouldcomponentupdate
