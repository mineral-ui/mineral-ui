<a name="0.9.0"></a>
# [0.9.0](https://github.com/mineral-ui/mineral-ui/compare/v0.8.0...v0.9.0) (2017-10-27)


### Features

* **button:** Add `element` prop to Button component ([416aee6](https://github.com/mineral-ui/mineral-ui/commit/416aee6))
* **colors,styles,themes:** New public /colors, /styles, and /themes ([b481fe9](https://github.com/mineral-ui/mineral-ui/commit/b481fe9))


### BREAKING CHANGES

* **colors,styles,themes:** File reorganization - import paths will need updated.  Moved createThemedComponent, mineralTheme, and ThemeProvider from /utils to /themes.  Moved createStyledComponent from /utils to /styles. Removed styleVariables from public API.  Moved color from /utils to /colors.



<a name="0.8.0"></a>
# [0.8.0](https://github.com/mineral-ui/mineral-ui/compare/v0.6.0...v0.8.0) (2017-10-18)

### Features

* **dropdown,popover:** Improve a11y ([1370c03](https://github.com/mineral-ui/mineral-ui/commit/1370c03))

<a name="0.7.0"></a>
# [0.7.0](https://github.com/mineral-ui/mineral-ui/compare/v0.6.0...v0.7.0) (2017-10-13)


### Bug Fixes

* **utils:** Remove immutability-helper ([dca418e](https://github.com/mineral-ui/mineral-ui/commit/dca418e))


### Features

* **all:** Add stack, inline, inset space variables ([71b58a2](https://github.com/mineral-ui/mineral-ui/commit/71b58a2))
* **button:** Change default size from 'medium' to 'large' ([ab2b0cc](https://github.com/mineral-ui/mineral-ui/commit/ab2b0cc))
* **button:** Update styles ([27ecf95](https://github.com/mineral-ui/mineral-ui/commit/27ecf95))
* **icon,menu-item:** Update variant icons ([854061b](https://github.com/mineral-ui/mineral-ui/commit/854061b))
* **menu-item:** Update styles ([24734f4](https://github.com/mineral-ui/mineral-ui/commit/24734f4))
* **theme:** Update variant text colors ([1759314](https://github.com/mineral-ui/mineral-ui/commit/1759314))


### BREAKING CHANGES

* **menu-item:** Some component theme variables removed
* **button:** Some component theme variables removed
* **all:** Remove spacing_* theme variables. Add space_inline_xx,
space_inset_xx, space_stack_xx theme variables. Remove spacing_xx
variables. Update components to use the new variables.



<a name="0.6.0"></a>
# [0.6.0](https://github.com/mineral-ui/mineral-ui/compare/v0.5.0...v0.6.0) (2017-10-10)


### Features

* **dropdown,popover:** Dropdown and Popover updates ([23b96ff](https://github.com/mineral-ui/mineral-ui/commit/23b96ff))

### BREAKING CHANGES

* **dropdown,popover:** Remove `autoFocus` and `restoreFocus` props from Dropdown and Popover.  Remove `DropdownContent_paddingVertical` theme variable.



<a name="0.5.0"></a>
# [0.5.0](https://github.com/mineral-ui/mineral-ui/compare/v0.4.0...v0.5.0) (2017-09-29)


### Features

* **dropdown:** Add new component ([5ee58ba](https://github.com/mineral-ui/mineral-ui/commit/5ee58ba))
* **menu:** Add new component ([7fbd662](https://github.com/mineral-ui/mineral-ui/commit/7fbd662))


<a name="0.4.0"></a>
# [0.4.0](https://github.com/mineral-ui/mineral-ui/compare/v0.3.0...v0.4.0) (2017-09-16)


### Features

* **popover:** Flip on viewport ([5fe6e34](https://github.com/mineral-ui/mineral-ui/commit/5fe6e34))


### BREAKING CHANGES

* **popover:** Remove boundariesElement prop



<a name="0.3.0"></a>
# [0.3.0](https://github.com/mineral-ui/mineral-ui/compare/v0.2.0...v0.3.0) (2017-09-15)


### Features

* **popover:** Adjust default modifiers for rendering improvements on small screens ([4fdb78e](https://github.com/mineral-ui/mineral-ui/commit/4fdb78e))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/mineral-ui/mineral-ui/compare/v0.1.0...v0.2.0) (2017-09-15)


### Bug Fixes

* **utils:** createThemedComponent only uses ThemeProvider to pass custom theme ([9f5aec1](https://github.com/mineral-ui/mineral-ui/commit/9f5aec1))


### Features

* **popover:** Add new Popover component ([2c706a8](https://github.com/mineral-ui/mineral-ui/commit/2c706a8))



<a name="0.1.0"></a>
# [0.1.0](https://github.com/mineral-ui/mineral-ui/compare/825ba31...v0.1.0) (2017-09-07)


### Bug Fixes

* **Link:** closes [#317](https://github.com/mineral-ui/mineral-ui/issues/317), closes [#255](https://github.com/mineral-ui/mineral-ui/issues/255) ([825ba31](https://github.com/mineral-ui/mineral-ui/commit/825ba31))
