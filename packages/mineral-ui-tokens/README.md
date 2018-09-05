# mineral-ui-tokens

## Installation

```bash
npm install --save mineral-ui-tokens
```

or

```bash
yarn add mineral-ui-tokens
```

## Usage

> All Tokens and their corresponding values can be viewed on the
[Mineral UI Tokens][token-page] page.

_This package uses the same
[import syntax as the mineral-ui library][import-syntax]._

Token names use a `[target]_[property]_[variation]_[state]` naming scheme.

* `target` - the type of element targeted by the token, e.g. "input" or "panel"
* `property` (required) - the CSS property of the token, e.g. "backgroundColor"
* `variation` - any differentiating aspect of the token that isn't state, e.g.
"brand", "primary", "success"
* `state` - state-dependent aspects, e.g. "focus", "selected"

### JavaScript

JavaScript token names are formatted in "pseudo_camelCase", e.g. `boxShadow_1`

#### Import tokens from the default export:

```js
import tokens from 'mineral-ui-tokens';
```

#### Import the palette, specific [color ramps][color-page], or specific tokens from named exports:

```js
import { palette, magenta, boxShadow_1 } from 'mineral-ui-tokens';
```

#### Import tokens & palette, as Sass variables:

```js
import 'mineral-ui-tokens/index.scss';
```

### Sass

Sass token names are formatted in "pseudoKebab-case", with a prefix, e.g.
`$mnrl-boxShadow-1`

```css
@import '<path_to_node_modules>/mineral-ui-tokens/index.scss';
```

## Changelog

Check the project root's changelog for updates.

## Contributing

This package uses [Theo][theo] to generate output in a variety of formats. The
source tokens are located in the [tokens directory](./tokens). Theo recognizes
values like `"{!blue_60}"` as [aliases][theospec]. Check the `aliases` and/or
`imports` properties in the containing file to find the alias definition(s).

After changing the tokens source, generate the new output with
`npm run build:tokens`, which you can run from either the project root or the
mineral-ui/packages/mineral-ui-tokens directory.
[Format your commit messages][commitizen] appropriately, using
`mineral-ui-tokens` for your scope.

Then [submit a PR][pr], including both your token source changes and the
generated files, for review.

## Publishing the `mineral-ui-tokens` package

1.  Make or accept source token updates
1.  `cd mineral-ui/packages/mineral-ui-tokens` (if not already there)
1.  `npm run build:tokens`
1.  `npm run format`
1.  `npm version minor`
    * This package uses the same [versioning scheme][versioning] as mineral-ui:
    major, minor, and patch updates all increment the _minor_ version number:
    0.1.0 -> 0.2.0
1.  `npm run build`
1.  Commit changes and push to GitHub
1.  `cd dist && npm publish`

[changelog]: https://github.com/mineral-ui/mineral-ui/blob/master/CHANGELOG.md
[color-page]: https://mineral-ui.com/color#guidelines-ramps
[commitizen]: https://github.com/mineral-ui/mineral-ui/blob/master/CONTRIBUTING.md#developing
[import-syntax]: https://mineral-ui.com/import-syntax
[pr]: https://github.com/mineral-ui/mineral-ui/blob/master/CONTRIBUTING.md#submitting-a-pull-request
[theo]: https://github.com/salesforce-ux/theo
[theospec]: https://github.com/salesforce-ux/theo#spec
[token-page]: https://mineral-ui.com/tokens
[versioning]: https://github.com/mineral-ui/mineral-ui#versioning
