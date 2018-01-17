<a name="0.17.0"></a>
# [0.17.0](https://github.com/mineral-ui/mineral-ui/compare/v0.16.0...v0.17.0) (2018-01-17)


### Features

* **avatar:** New component ([dcfb069](https://github.com/mineral-ui/mineral-ui/commit/dcfb069))
* **card:** Add CardStatus and associated Icons ([3b84fdd](https://github.com/mineral-ui/mineral-ui/commit/3b84fdd))
* **card:** Update CardTitle `avatar` prop to accept Avatar ([2f575e0](https://github.com/mineral-ui/mineral-ui/commit/2f575e0))
* **colors:** Add getColor & getReadableTextColor utilities ([f35beb6](https://github.com/mineral-ui/mineral-ui/commit/f35beb6))


### BREAKING CHANGES

* **card:** `avatar` prop only accepts Avatar component rather than a raw `img`



<a name="0.16.0"></a>
# [0.16.0](https://github.com/mineral-ui/mineral-ui/compare/v0.15.0...v0.16.0) (2018-01-12)


### Features

* **form:** Update FormField to support grouped inputs ([d148473](https://github.com/mineral-ui/mineral-ui/commit/d148473))
* **radio,radiogroup:** New components ([67d7f83](https://github.com/mineral-ui/mineral-ui/commit/67d7f83))



<a name="0.15.0"></a>
# [0.15.0](https://github.com/mineral-ui/mineral-ui/compare/v0.14.0...v0.15.0) (2017-12-20)


### Features

* **card:** Update design; add functionality ([1891906](https://github.com/mineral-ui/mineral-ui/commit/1891906))
* **themes:** Add/update theme variables ([50344b8](https://github.com/mineral-ui/mineral-ui/commit/50344b8))


### BREAKING CHANGES

* **card:** Card - Change `CardRow_margin` & `CardRow_padding`
theme variables to `CardRow_marginVertical` &
`CardRow_paddingHorizontal`, respectively. CardTitle - Remove `minor`
prop and all associated theme variables; remove `meta` prop; remove
`CardTitle_marginTop` theme variable.



<a name="0.14.0"></a>
# [0.14.0](https://github.com/mineral-ui/mineral-ui/compare/v0.13.0...v0.14.0) (2017-12-15)


### Features

* **text-area:** New component ([d2bb771](https://github.com/mineral-ui/mineral-ui/commit/d2bb771))



<a name="0.13.0"></a>
# [0.13.0](https://github.com/mineral-ui/mineral-ui/compare/v0.12.0...v0.13.0) (2017-12-12)


### Features

* **form:** New components ([4baac24](https://github.com/mineral-ui/mineral-ui/commit/4baac24))
* **text-input:** New component ([b3f409b](https://github.com/mineral-ui/mineral-ui/commit/b3f409b))
* **themes:** Misc updates ([b45fb94](https://github.com/mineral-ui/mineral-ui/commit/b45fb94))


### BREAKING CHANGES

* **themes:** Remove “backgroundColor_input_*” keys



<a name="0.12.0"></a>
# [0.12.0](https://github.com/mineral-ui/mineral-ui/compare/v0.11.0...v0.12.0) (2017-11-17)


### Features

* **icon:** Extract pre-built icons to new mineral-ui-icons package ([6d156e8](https://github.com/mineral-ui/mineral-ui/commit/6d156e8))
* **mineral-ui-icons:** Add generated icons ([befc5d0](https://github.com/mineral-ui/mineral-ui/commit/befc5d0))


### BREAKING CHANGES

* **icon:** Pre-built icons are now available separately via the `mineral-ui-icons` package and are no longer contained within the Icon component.



<a name="0.11.0"></a>
# [0.11.0](https://github.com/mineral-ui/mineral-ui/compare/v0.10.0...v0.11.0) (2017-11-14)


### Bug Fixes

* **dependencies:** Update minimum React/ReactDOM peer dependency version ([7d49cbe](https://github.com/mineral-ui/mineral-ui/commit/7d49cbe))
* **icon,button,menuitem:** Improve icon a11y by using role=“img” ([970191c](https://github.com/mineral-ui/mineral-ui/commit/970191c))


### Features

* **dropdown,popover:** Add ability to render to body using ‘usePortal’ prop ([c8e914c](https://github.com/mineral-ui/mineral-ui/commit/c8e914c))



<a name="0.10.0"></a>
# [0.10.0](https://github.com/mineral-ui/mineral-ui/compare/v0.9.0...v0.10.0) (2017-10-31)


### Bug Fixes

* **dropdown,button:** Fix Dropdown keyboard nav ([29f33a5](https://github.com/mineral-ui/mineral-ui/commit/29f33a5))



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
