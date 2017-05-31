# Styling Decision

We need to pick a styling strategy to apply to our component library. We don't want to use plain CSS, due to the considerations listed below.


## Options

* [CSS Modules](https://github.com/css-modules/css-modules) (written in [Sass](https://github.com/sass/sass))
* [Fela](https://github.com/rofrischmann/fela)
* [Glamorous](https://github.com/paypal/glamorous)
* [Styled-Components](https://github.com/styled-components/styled-components)


## Considerations

_Not necessarily in order._

1. Styles encapsulated to the component
1. Styles easily composed
1. How are style overrides expressed in the public API?
	1. Props passed into individual components?
	1. Themes set a top level?
	1. Allow sub-elements to be styled?
	1. Expose individual “public” style override or allow all styles to be overridden?
	1. Ability to override vs. enforcing design system
1. Theme
	1. What level of support do we need?
1. Performance
	1. Styling is typically not a performance bottleneck, but large css bundles can increase load time.
1. Ease of use
	1. Requirements placed on consuming app
	1. Learning curve
	1. Alignment with industry standards and high community support
1. Server-side rendering
	1. We definitely need to support this
1. Multi-platform
	1. React Native
	1. react-native-web
	1. Sketch
	1. I’m not sure if the styles themselves need to be multi-platform, but it would be really nice if the APIs for specifying styles were the same for different platforms.
1. Create presentational components, e.g. `<MyStyledDiv />`
	1. Easier to swap style implementation without refactoring component
1. Styles can change based on props passed to styled components
`<MyStyledDiv highlighted={ true } />`
1. DX should support HMR and in-browser style tweaks
1. Auto-prefixing, pseudo selectors & elements, media queries
1. Works with Jest snapshots


## Investigation

### CSS Modules

This was discussed, but dismissed without spiking any code due to its lack of theming support and minimal control over the public styling API.


### Fela

- [React-Fela](https://github.com/johanneslumpe/react-fela) provides styled components
- [questionable HMR experience](https://github.com/rofrischmann/fela/blob/master/docs/advanced/DeveloperExperience.md)
- Use [fela-monolothic](https://github.com/rofrischmann/fela/tree/master/packages/fela-monolithic) in dev mode for in-browser inspection and editing to work correctly
- Atomic class splitting may benefit performance in large apps
	- Is this feature compelling or not?
	- Biggest reason to use fela, other libs don’t have it.
- Are ts, flow definitions available?
	- Typing would be helpful
- No build or runtime property/value linting/validations
- All passed style properties and values end up on the element
- Smallest bundle size
- Auto-prefixes inline styles via inline-style-prefixer


### Glamorous

- HRM works
- Inspect and edit styles in-browser work correctly in dev mode, but not prod mode
- `simulate` offers easy pseudo class testing
	- Useful for dev debugging
	- Could be very useful for visual diff tests
- `tiny` version skips built-in generic tag types
	- We shouldn’t use those anyway (Dave’s opinion)
- Are ts, flow definitions available?
	- Typing would be helpful
- No build or runtime property/value linting/validations
- All passed style properties and values end up on the element
- Auto-prefixes inline styles via inline-style-prefixer


### Styled-Components

- HMR works
- Inspect and edit styles in-browser work correctly
- String templates not as nice as objects
  - No typing possible
- Several high-impact defects on v2
- Syntax highlighting available in vscode
  - Other editors?
  - Autocomplete?
- Linting/validation via stylelint
  - Listed as alpha
  - Eliminates some of the need for typing
- Largest bundle size
- Largest usage numbers (by far)
- Auto-prefixes inline styles via inline-style-prefixer


### TL;DR

- Fela has the most sophisticated performance optimizations
- Glamorous has the simplest and easiest to use API
- Styled-Components has the largest usage and community


## Recommendation

We're going to start with Glamorous. It was simpler to get started, configure, and develop with, due to its nicer API. Fela was a close second, but the _only_ noteworthy difference in its favor is the possible performance benefit of the functional CSS approach. While this is attractive, we don't want to add the extra complexity until we can prove that we would experience the benefit. If that turns out to be the case, we determined it would be relatively easy to convert from Glamorous to Fela.
