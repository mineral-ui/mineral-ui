## CommonJS Modules

For most applications, our recommendation is to use the following import syntax.

```js
import Button from 'mineral-ui/Button';
import Icon from 'mineral-ui/Icon';
```

In this scenario, the public API is defined as the items available in the
[top level index](https://github.com/mineral-ui/mineral-ui/blob/master/src/library/index.js).
Unless otherwise documented, anything else is considered private API and subject
to change without notice.

It is important to note that some components may have particular import syntax
requirements. Refer to the individual component documentation for details.

## ES Modules

If tree shaking is supported and properly configured in your build chain, you
can use the following import syntax. Care must be taken to ensure that it is
working properly, else this syntax will cause the entire library to be included
in your bundle.

_Note that Mineral UI may still require some internal work to ensure that all
components are properly tree-shakeable._

```js
import { Button, Icon } from 'mineral-ui';
```

## Plugins

There are several 3rd party plugins that allow you to write imports using the ES
Modules syntax, without worrying about bundle size, and
without yet having tree shaking working in your build chain.

* [babel-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports)
* [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)
* [babel-plugin-direct-import](https://www.npmjs.com/package/babel-plugin-direct-import)
* [babel-plugin-lodash](https://www.npmjs.com/package/babel-plugin-lodash)
