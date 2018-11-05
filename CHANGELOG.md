<a name="0.49.0"></a>
# [0.49.0](https://github.com/mineral-ui/mineral-ui/compare/v0.48.0...v0.49.0) (2018-11-05)


### Bug Fixes

* Fix error when importing from package index ([c121074](https://github.com/mineral-ui/mineral-ui/commit/c121074))
* **button-group:** Allow for styled/themed buttons ([cfa9235](https://github.com/mineral-ui/mineral-ui/commit/cfa9235))
* **Menu:** Assign correct colors to MenuItem backgroundColor theme vars ([6768ce9](https://github.com/mineral-ui/mineral-ui/commit/6768ce9))


### Performance Improvements

* Enable component prop-types to be removed in user apps during production mode minification ([00754c1](https://github.com/mineral-ui/mineral-ui/commit/00754c1))



<a name="0.48.0"></a>
# [0.48.0](https://github.com/mineral-ui/mineral-ui/compare/v0.47.0...v0.48.0) (2018-10-17)


### Features

* **table:** Provide rowIndex and columnKey to table rows and cells ([95c1e59](https://github.com/mineral-ui/mineral-ui/commit/95c1e59))



<a name="0.47.0"></a>
# [0.47.0](https://github.com/mineral-ui/mineral-ui/compare/v0.46.0...v0.47.0) (2018-09-27)


### Features

* **button,buttongroup,menuitem:** Update per new styles ([a08f8f3](https://github.com/mineral-ui/mineral-ui/commit/a08f8f3))



<a name="0.46.0"></a>
# [0.46.0](https://github.com/mineral-ui/mineral-ui/compare/v0.45.0...v0.46.0) (2018-09-24)


### Bug Fixes

* **button:** Prevent icon from shrinking with long content ([54a24e1](https://github.com/mineral-ui/mineral-ui/commit/54a24e1))
* **dialog:** DialogBody content overflows correctly ([cf0716b](https://github.com/mineral-ui/mineral-ui/commit/cf0716b))
* **dropdown,select:** Increment MenuItem ids across MenuGroups ([49d73cf](https://github.com/mineral-ui/mineral-ui/commit/49d73cf))


### Features

* **tabs:** New component ([5cbd2bd](https://github.com/mineral-ui/mineral-ui/commit/5cbd2bd))
* **tooltip:** Add support for `cursor` prop ([b32d773](https://github.com/mineral-ui/mineral-ui/commit/b32d773))


### Performance Improvements

* **dropdown,select,menu,menuitem:** Decrease Menu and MenuItem re-renders ([a648de5](https://github.com/mineral-ui/mineral-ui/commit/a648de5))



<a name="0.45.0"></a>
# [0.45.0](https://github.com/mineral-ui/mineral-ui/compare/v0.44.0...v0.45.0) (2018-09-13)


### Features

* **table:** Add render prop support ([79ac277](https://github.com/mineral-ui/mineral-ui/commit/79ac277))


### BREAKING CHANGES

* **table:** Rename theme variables that are used in sortable header cells. TableSortableHeaderCell_border_focus, TableSortableHeaderCell_color_focus



<a name="0.44.0"></a>
# [0.44.0](https://github.com/mineral-ui/mineral-ui/compare/v0.43.0...v0.44.0) (2018-08-29)


### Bug Fixes

* **dialog:** Remove top & bottom margins from first & last body children ([092e095](https://github.com/mineral-ui/mineral-ui/commit/092e095))



<a name="0.43.0"></a>
# [0.43.0](https://github.com/mineral-ui/mineral-ui/compare/v0.42.0...v0.43.0) (2018-08-28)


### Code Refactoring

* **overflow-container,table:** Extract shared OverflowContainer ([64ea73f](https://github.com/mineral-ui/mineral-ui/commit/64ea73f))


### Features

* **dialog:** Add components ([46fd1a6](https://github.com/mineral-ui/mineral-ui/commit/46fd1a6))


### BREAKING CHANGES

* **overflow-container,table:** Rename theme variable from `Table_boxShadow_focus` to `Table_outline_focus`



<a name="0.42.0"></a>
# [0.42.0](https://github.com/mineral-ui/mineral-ui/compare/v0.41.0...v0.42.0) (2018-08-13)


### Bug Fixes

* **pagination:** Renders in all supported React versions ([ccf03e5](https://github.com/mineral-ui/mineral-ui/commit/ccf03e5))


### Code Refactoring

* **table:** Improve sortable tables ([61e7e70](https://github.com/mineral-ui/mineral-ui/commit/61e7e70))


### BREAKING CHANGES

* **table:** Tables with a controlled `sort` will now need to sort their own data and pass that sorted data to the Table



<a name="0.41.0"></a>
# [0.41.0](https://github.com/mineral-ui/mineral-ui/compare/v0.40.0...v0.41.0) (2018-08-06)


### Bug Fixes

* **flex:** Gutter margins respect rtl & responsive props; FlexItem can flex ([4794144](https://github.com/mineral-ui/mineral-ui/commit/4794144))
* **pagination:** Fix IE11 layout issue ([5657281](https://github.com/mineral-ui/mineral-ui/commit/5657281))


### BREAKING CHANGES

* **flex:** Flex will now better respect its surrounding layout due
to removing the negative left & right margins, but the change may
require further layout adjustment in some cases.



<a name="0.40.0"></a>
# [0.40.0](https://github.com/mineral-ui/mineral-ui/compare/v0.39.0...v0.40.0) (2018-08-03)


### Features

* **pagination:** New component ([5837cbb](https://github.com/mineral-ui/mineral-ui/commit/5837cbb))
* **table:** Export defaultSortComparator ([4be37b9](https://github.com/mineral-ui/mineral-ui/commit/4be37b9))
* **text-input:** Add support for size html attribute with htmlSize prop ([3da3596](https://github.com/mineral-ui/mineral-ui/commit/3da3596))



<a name="0.39.0"></a>
# [0.39.0](https://github.com/mineral-ui/mineral-ui/compare/v0.38.0...v0.39.0) (2018-07-25)


### Bug Fixes

* **checkbox:** IE/Edge toggle indeterminate state on single click ([c3f1c41](https://github.com/mineral-ui/mineral-ui/commit/c3f1c41))
* **select,textarea,textinput:** Support component-level theme variables ([9a0de8f](https://github.com/mineral-ui/mineral-ui/commit/9a0de8f))
* **table:** Fix theme overrides ([48f132e](https://github.com/mineral-ui/mineral-ui/commit/48f132e))
* **table:** Make density and messages props optional ([9bb5639](https://github.com/mineral-ui/mineral-ui/commit/9bb5639))



<a name="0.38.0"></a>
# [0.38.0](https://github.com/mineral-ui/mineral-ui/compare/v0.37.0...v0.38.0) (2018-07-23)


### Features

* **table:** Add column sorting and row selection ([c987616](https://github.com/mineral-ui/mineral-ui/commit/c987616))


### Performance Improvements

* **checkbox,radio:** Convert to PureComponents ([d76adfe](https://github.com/mineral-ui/mineral-ui/commit/d76adfe))


### BREAKING CHANGES

* **table:** Rename theme variables TableColumnHeader_* to
TableHeaderCell_*



<a name="0.37.0"></a>
# [0.37.0](https://github.com/mineral-ui/mineral-ui/compare/v0.36.0...v0.37.0) (2018-07-10)


### Features

* **radio,checkbox:** Add hideLabel prop to accessibly hide the label ([2c081a1](https://github.com/mineral-ui/mineral-ui/commit/2c081a1))


### BREAKING CHANGES

* **radio,checkbox:** Rename theme variables RadioControl_marginHorizontal
to RadioText_marginHorizontal and CheckboxControl_marginHorizontal to
CheckboxText_marginHorizontal



<a name="0.36.0"></a>
# [0.36.0](https://github.com/mineral-ui/mineral-ui/compare/v0.35.0...v0.36.0) (2018-07-03)


### Features

* **table:** Add Table component ([9beafcf](https://github.com/mineral-ui/mineral-ui/commit/9beafcf))



<a name="0.35.0"></a>
# [0.35.0](https://github.com/mineral-ui/mineral-ui/compare/v0.34.0...v0.35.0) (2018-06-28)


### Bug Fixes

* **checkbox,checkbox-group:** Apply correct background to indeterminate ([fd57905](https://github.com/mineral-ui/mineral-ui/commit/fd57905))


### Code Refactoring

* **button,link:** Remove regular variant, see commit message for additional changes ([2445a8a](https://github.com/mineral-ui/mineral-ui/commit/2445a8a)), closes [#707](https://github.com/mineral-ui/mineral-ui/issues/707)


### Features

* **buttongroup:** Add new component ([5d72edb](https://github.com/mineral-ui/mineral-ui/commit/5d72edb))


### BREAKING CHANGES

* **button,link:** Remove ‘regular’ variant



<a name="0.34.0"></a>
# [0.34.0](https://github.com/mineral-ui/mineral-ui/compare/v0.33.0...v0.34.0) (2018-06-11)


### Bug Fixes

* **all:** Refactor functional components for flow-to-proptypes ([a961fa1](https://github.com/mineral-ui/mineral-ui/commit/a961fa1))
* **avatar:** Fix display of svg images in IE11 ([c0616a4](https://github.com/mineral-ui/mineral-ui/commit/c0616a4))
* **text-input:** Fix Safari display of search inputs ([e979e78](https://github.com/mineral-ui/mineral-ui/commit/e979e78))
* **themes:** Ensure base theme overrides component theme ([c2221e1](https://github.com/mineral-ui/mineral-ui/commit/c2221e1))


### Features

* **mineral-ui:** Migrate from Glamorous (deprecated) to Emotion ([928da16](https://github.com/mineral-ui/mineral-ui/commit/928da16))


### BREAKING CHANGES

* **mineral-ui:** See our Emotion migration guide for details.
https://github.com/mineral-ui/mineral-ui/blob/master/docs/emotion-migration.md



<a name="0.33.0"></a>
# [0.33.0](https://github.com/mineral-ui/mineral-ui/compare/v0.32.0...v0.33.0) (2018-05-10)


### Features

* **mineral-ui-tokens:** Generate files useful to themes ([fe6a8b3](https://github.com/mineral-ui/mineral-ui/commit/fe6a8b3))
* **themes:** Generate values from color options ([37555c9](https://github.com/mineral-ui/mineral-ui/commit/37555c9))


### BREAKING CHANGES

* **themes:** Change `createTheme` signature. Replace `baseColor` and `overrides` parameters with an options object, containing `colors` (baseColor is now colors.theme) and `overrides`. See the [new documentation](http://mineral-ui.com/theming#common-scenarios-api-{{47}}) for details. Rename `color_primary` theme variable to `color_themePrimary` for consistency with other variable names
* **mineral-ui-tokens:** `color_primary` (`$mnrl-color-primary`, in Sass) token
renamed to `color_themePrimary` ($mnrl-color-themePrimary)



<a name="0.32.0"></a>
# [0.32.0](https://github.com/mineral-ui/mineral-ui/compare/v0.31.0...v0.32.0) (2018-05-07)


### Bug Fixes

* **styles:** add tests and fix behavior of pxToEm ([19d6988](https://github.com/mineral-ui/mineral-ui/commit/19d6988))


### Code Refactoring

* **mineral-ui-tokens:** Misc updates ([bd85bbe](https://github.com/mineral-ui/mineral-ui/commit/bd85bbe))


### Features

* **themes:** Expose withTheme higher order component ([b6ec40a](https://github.com/mineral-ui/mineral-ui/commit/b6ec40a))


### BREAKING CHANGES

* **styles:** Only transform numbers or strings in px units.
All other input errors.
* **mineral-ui-tokens:** Fix incorrect sass variable name format



<a name="0.31.0"></a>
# [0.31.0](https://github.com/mineral-ui/mineral-ui/compare/v0.30.0...v0.31.0) (2018-05-02)


### Bug Fixes

* **themes:** Correct import of colorAliases in themeFromTokens ([03a24dd](https://github.com/mineral-ui/mineral-ui/commit/03a24dd))



<a name="0.30.0"></a>
# [0.30.0](https://github.com/mineral-ui/mineral-ui/compare/v0.29.0...v0.30.0) (2018-05-01)


### Code Refactoring

* **colors:** Remove export and source files ([f2d0ec3](https://github.com/mineral-ui/mineral-ui/commit/f2d0ec3))
* **themes:** Consume tokens ([a466dfa](https://github.com/mineral-ui/mineral-ui/commit/a466dfa))


### Features

* **mineral-ui-tokens:** Add source tokens, build scripts, and generated files ([31c8949](https://github.com/mineral-ui/mineral-ui/commit/31c8949))
* **select,dropdown,popover,menu,menuitem:** Add support for render props ([48ea509](https://github.com/mineral-ui/mineral-ui/commit/48ea509))


### BREAKING CHANGES

* **select,dropdown,popover,menu,menuitem:** Select, Dropdown, Menu - no longer support ‘item.render’ in data.  Use ‘item’ prop instead.
* **themes:** Rename `placeholder_color` theme variable to
`input_color_placeholder`; append `px` to `breakpoint_[width]` and
`fontSize_base` values (change type from number to string) to clarify
units
* **colors:** Remove all `colors` exports from `mineral-ui`. Instead, consumers can [`import { palette } from 'mineral-ui-tokens'`](https://github.com/mineral-ui/mineral-ui/tree/master/packages/mineral-ui-tokens). Additionally, color ramps available from that package are sparse arrays, rather than objects, e.g. what was `blue.blue_60` is now accessed as `blue[60]`.



<a name="0.29.0"></a>
# [0.29.0](https://github.com/mineral-ui/mineral-ui/compare/v0.28.0...v0.29.0) (2018-04-20)


### Features

* **grid:** Add Grid & GridItem components ([1df8d6d](https://github.com/mineral-ui/mineral-ui/commit/1df8d6d))



<a name="0.28.0"></a>
# [0.28.0](https://github.com/mineral-ui/mineral-ui/compare/v0.27.0...v0.28.0) (2018-04-17)


### Bug Fixes

* **themes:** Fix IE11 issue ([401981b](https://github.com/mineral-ui/mineral-ui/commit/401981b))



<a name="0.27.0"></a>
# [0.27.0](https://github.com/mineral-ui/mineral-ui/compare/v0.26.0...v0.27.0) (2018-04-13)


### Bug Fixes

* **button:** filter the `element` prop from being passed down ([74a3869](https://github.com/mineral-ui/mineral-ui/commit/74a3869))


### Code Refactoring

* **avatar:** Remove palette colors from `background` & `color` props ([98f06ef](https://github.com/mineral-ui/mineral-ui/commit/98f06ef))
* **button:** Update base theme variables; add & rename theme variables ([f372cd3](https://github.com/mineral-ui/mineral-ui/commit/f372cd3))
* **checkbox,radio:** Update base theme vars; rename theme variables ([17cf051](https://github.com/mineral-ui/mineral-ui/commit/17cf051))
* **colors:** Update palette to ensure a11y contrast; add bronze ([063a7d6](https://github.com/mineral-ui/mineral-ui/commit/063a7d6))
* **form:** Update base theme variables; rename theme variables ([d7ab5d6](https://github.com/mineral-ui/mineral-ui/commit/d7ab5d6))
* **icon:** Change from predetermined fill color to 'currentcolor' ([c025815](https://github.com/mineral-ui/mineral-ui/commit/c025815))
* **menu:** Update base theme variables; rename theme variables ([3d264bf](https://github.com/mineral-ui/mineral-ui/commit/3d264bf))
* **select,text-area,text-input:** Update base theme vars; rename some ([f4dfdff](https://github.com/mineral-ui/mineral-ui/commit/f4dfdff))
* **themes:** Update theme variables ([884c458](https://github.com/mineral-ui/mineral-ui/commit/884c458))


### BREAKING CHANGES

* **select,text-area,text-input:** ([Detailed here](https://gist.github.com/kylegach/3f1300c071c8b47952eb12729e5a90e8#select)) Rename theme variables: `Select_color_text` to `Select_color` (also applies to TextArea & TextInput), `SelectIcon_fill` to `SelectIcon_color` (also applies to TextInput)
* **menu:** ([Detailed here](https://gist.github.com/kylegach/3f1300c071c8b47952eb12729e5a90e8#menuitem)) Rename theme variables: `MenuItem_color_text` to `MenuItem_color`, `MenuItemIcon_fill` to `MenuItemIcon_color`, `MenuItemSecondaryText_color_text` to `MenuItemSecondaryText_color`
* **form:** ([Detailed here](https://gist.github.com/kylegach/3f1300c071c8b47952eb12729e5a90e8#formfield)) Rename theme variables: `FormFieldCaption_color_text` to `FormFieldCaption_color`, `FormFieldLabel_color_text` to `FormFieldLabel_color`, `FormFieldSecondaryText_color_text` to `FormFieldSecondaryText_color`, `FormFieldSecondaryText_color_text_required` to `FormFieldSecondaryText_color_required`, `FormFieldsetLegend_color_text` to `FormFieldsetLegend_color`
* **checkbox,radio:** ([Detailed here](https://gist.github.com/kylegach/3f1300c071c8b47952eb12729e5a90e8#checkbox)) Rename theme variable `CheckboxText_color_text` to `CheckboxText_color` (same applies to Radio)
* **button:** ([Detailed here](https://gist.github.com/kylegach/3f1300c071c8b47952eb12729e5a90e8#button)) Remove theme variable `Button_borderColor_focus`; rename theme variables: `Button_color_text` to `Button_color`, `Button_color_text_minimal` to `Button_color_minimal`, `Button_color_text_primary` to `Button_color_primary`
* **avatar:** Remove palette colors (e.g. 'red', 'purple') from `background` and `color` prop types. Instead, import `colors` and reference from there (e.g. `colors.red_60`).
* **icon:** Icon now uses 'currentcolor' for its default fill color, rather than `theme.color_gray_60`
* **themes:** ([Detailed here](https://gist.github.com/kylegach/3f1300c071c8b47952eb12729e5a90e8)) Remove `color_caption`, `backgroundColor_link_focus`; rename: `backgroundColor_disabled` to `backgroundColor_input_disabled`, `backgroundColor_input` to `input_backgroundColor`, `backgroundColor_[variant]_muted` to `well_backgroundColor_[variant]`, `backgroundColor_[variant]_activeMuted` to `backgroundColor_[variant]_active`, `backgroundColor_[variant]_[state]` to `backgroundColor_[variant]Primary_[state]`, `borderColor_[state]` to `borderColor_theme_[state]`, `borderColor_[variant]_muted` to `well_borderColor_[variant]`, `color_h[#]` to `h[#]_color`, `color_placeholder` to `placeholder_color`, `color_text` to `color`, `color_text_disabled` to `color_disabled`, `color_text_primary_[state]` to `color_theme_[state]`, `color_text_onprimary` to `color_primary`, `color_text_[variant]_[state]` to `color_[variant]_[state]`, `fontSize_h[#]` to `h[#]_fontSize`, `fontWeight_h[#]` to `h[#]_fontWeight`, `shadow_[#]` to `boxShadow_[#]`
* **colors:** Remove `lime`, `orange`, and `yellow`



<a name="0.26.0"></a>
# [0.26.0](https://github.com/mineral-ui/mineral-ui/compare/v0.25.0...v0.26.0) (2018-04-06)



<a name="0.25.0"></a>
# [0.25.0](https://github.com/mineral-ui/mineral-ui/compare/v0.24.0...v0.25.0) (2018-04-04)


### Bug Fixes

* **card:** Include missing subcomponent exports ([6f35546](https://github.com/mineral-ui/mineral-ui/commit/6f35546))



<a name="0.24.0"></a>
# [0.24.0](https://github.com/mineral-ui/mineral-ui/compare/v0.23.0...v0.24.0) (2018-04-03)


### Bug Fixes

* **avatar,form-field:** Compare using displayName to avoid minification issues ([8732080](https://github.com/mineral-ui/mineral-ui/commit/8732080))


### Features

* **text:** New component ([9cc63d9](https://github.com/mineral-ui/mineral-ui/commit/9cc63d9))
* **themes:** Add more text theme variables ([43d62bb](https://github.com/mineral-ui/mineral-ui/commit/43d62bb))



<a name="0.23.0"></a>
# [0.23.0](https://github.com/mineral-ui/mineral-ui/compare/v0.22.0...v0.23.0) (2018-03-26)


### Bug Fixes

* **select:** Select calls onChange handler ([c49b5cd](https://github.com/mineral-ui/mineral-ui/commit/c49b5cd))


### Features

* **styles:** Add font-smoothing to componentStyleReset ([bd299b1](https://github.com/mineral-ui/mineral-ui/commit/bd299b1))



<a name="0.22.0"></a>
# [0.22.0](https://github.com/mineral-ui/mineral-ui/compare/v0.21.0...v0.22.0) (2018-03-14)


### Bug Fixes

* **avatar:** Remove icon prop from rendering on DOM element ([eb9268a](https://github.com/mineral-ui/mineral-ui/commit/eb9268a))
* **textinput:** Fix [#609](https://github.com/mineral-ui/mineral-ui/issues/609) lose focus after typing ([2ff0e28](https://github.com/mineral-ui/mineral-ui/commit/2ff0e28))


### Performance Improvements

* **select,dropdown:** Use items instance var ([993c442](https://github.com/mineral-ui/mineral-ui/commit/993c442))



<a name="0.21.0"></a>
# [0.21.0](https://github.com/mineral-ui/mineral-ui/compare/v0.20.0...v0.21.0) (2018-03-09)


### Features

* **dropdown,cardtitlemenu:** Misc updates, see full commit message for details ([1a44231](https://github.com/mineral-ui/mineral-ui/commit/1a44231))
* **menu:** Allow data prop to accept flat array of items ([cf2409b](https://github.com/mineral-ui/mineral-ui/commit/cf2409b))
* **menuitem:** Add selected styles, adjust colors ([af5d0a7](https://github.com/mineral-ui/mineral-ui/commit/af5d0a7))
* **popover:** Misc updates, see full commit message for details ([335d8f0](https://github.com/mineral-ui/mineral-ui/commit/335d8f0))
* **select:** Add new component ([ca6dd29](https://github.com/mineral-ui/mineral-ui/commit/ca6dd29))
* **textarea:** Add size appropriate horizontal padding ([7d045b2](https://github.com/mineral-ui/mineral-ui/commit/7d045b2))
* **textinput:** Add size appropriate horizontal padding ([0f14db8](https://github.com/mineral-ui/mineral-ui/commit/0f14db8))
* **tooltip:** Misc updates, see full commit message for details ([7ee3742](https://github.com/mineral-ui/mineral-ui/commit/7ee3742))



<a name="0.20.0"></a>
# [0.20.0](https://github.com/mineral-ui/mineral-ui/compare/v0.19.0...v0.20.0) (2018-02-14)


### Features

* **box,flex,start-end:** New Box, Flex, FlexItem, & StartEnd components ([edf3ea0](https://github.com/mineral-ui/mineral-ui/commit/edf3ea0))
* **themes:** Add breakpoint theme variables ([615cba2](https://github.com/mineral-ui/mineral-ui/commit/615cba2))



<a name="0.19.0"></a>
# [0.19.0](https://github.com/mineral-ui/mineral-ui/compare/v0.18.0...v0.19.0) (2018-02-13)


### Features

* **popover:** Add props, enhance theme, improve DOM structure ([4146902](https://github.com/mineral-ui/mineral-ui/commit/4146902))
* **tooltip:** Add new component ([927e9e6](https://github.com/mineral-ui/mineral-ui/commit/927e9e6))



<a name="0.18.0"></a>
# [0.18.0](https://github.com/mineral-ui/mineral-ui/compare/v0.17.0...v0.18.0) (2018-01-26)


### Features

* **checkbox,checkbox-group:** New components ([2847643](https://github.com/mineral-ui/mineral-ui/commit/2847643))
* **icon,mineral-ui-icons:** Add several toggle new icons ([74052fd](https://github.com/mineral-ui/mineral-ui/commit/74052fd))
* **radio,radio-group:** Add labelPosition and justify props; update themes. ([cb69adf](https://github.com/mineral-ui/mineral-ui/commit/cb69adf))


### BREAKING CHANGES

* **radio,radio-group:** Simplified Radio/RadioGroup themes.  Removed keys: RadioControl_borderColor_focus, RadioControl_boxShadow_checkedFocus, RadioControl_size_jumbo, RadioIcon_*.  Renamed all RadioGroup keys to improve clarity.



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
