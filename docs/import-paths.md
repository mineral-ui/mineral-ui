# Import Syntax

### Option 1

If tree shaking is supported and properly configured in your build chain, you can use the following import syntax.  Care must be taken to ensure that it is working properly, else this syntax will cause the entire library to be included in your bundle.

```js
import { Button, Icon } from ‘mineral-ui';
```

### Option 2

If your build chain does not support tree shaking, you should instead use the following import syntax.

```js
import Button from ‘mineral-ui/Button’;
import Icon from ‘mineral-ui/Icon’;
```

In this scenario, the public API is defined as the items available in the top level index.  Unless otherwise documented, anything else is considered private API and subject to change without notice.

### Important

Note that some components may have particular import syntax requirements.  Refer to the individual component documentation for details.
