/* @flow */
/* eslint-disable no-irregular-whitespace */
export default `The callback function will be invoked with an object parameter
containing the following information and utilities to help customize your
implementation.

* __props__: Props to be spread to your custom component
    * Note that these may not all be necessary for your implementation, or even
    valid DOM attributes, so you’ll want to apply them judiciously.  _If your
    component is a [glamorous](https://glamorous.rocks/) component, e.g. created
    with [createStyledComponent](/styling#customization-techniques-themes-createstyledcomponent),
    invalid DOM attributes will be removed automatically._
    * Further, you can override and/or compose these props as you see fit.
* __state__: The internal state of the component, if any.
* __helpers__: Miscellaneous helper methods, if any.

_Prior to reaching for this functionality, please consider whether the desired
outcome could be achieved using a simpler means, such as with Mineral's robust
[styling](/styling) and/or [theming](/theming) capabilities._`;
