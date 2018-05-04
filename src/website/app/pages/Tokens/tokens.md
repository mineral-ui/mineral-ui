Mineral UI distributes design tokens through the
[mineral-ui-tokens][tokens-package] npm package and consumes these
granular entities in order to maintain a consistent visual system that scales
across experiences. Maintaining a separate tokens package also allows for a
diverse range of teams on various frameworks to access the building blocks of
Mineral UI.

## Formats

### JavaScript

JavaScript token names are formatted in "pseudo_camelCase", e.g. `boxShadow_1`

#### Import tokens from the default export

```js
import tokens from 'mineral-ui-tokens';
```

#### Import the palette, specific [color ramps][colorpage], or specific tokens from named exports

```js
import { palette, magenta, boxShadow_1 } from 'mineral-ui-tokens';
```

#### Import tokens & palette, as Sass variables

```js
import 'mineral-ui-tokens/index.scss';
```

_Note: This type of import may require the addition of a Sass loader to your
bundler._

### Sass

Sass token names are formatted in "pseudoKebab-case", with a prefix, e.g.
`$mnrl-boxShadow-1`

```
@import '<path_to_node_modules>/mineral-ui-tokens/index.scss';
```

[changelog]: https://github.com/mineral-ui/mineral-ui/blob/master/CHANGELOG.md
[colorpage]: /color#guidelines-ramps
[tokens-package]: https://www.npmjs.com/package/mineral-ui-tokens
[tokens-readme]: https://github.com/mineral-ui/mineral-ui/blob/master/packages/mineral-ui-tokens/README.md#contributing

## Tokens Index

Token names use a `[target]_[property]_[variation]_[state]` naming scheme.

* `target` - the type of element targeted by the token, e.g. "input" or "panel"
* `property` (required) - the CSS property of the token, e.g. "backgroundColor"
* `variation` - any differentiating aspect of the token that isn't state, e.g.
"brand", "primary", "success"
* `state` - state-dependent aspects, e.g. "focus", "selected"

<!-- Table of tokens here -->
