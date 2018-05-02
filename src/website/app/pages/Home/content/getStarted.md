### Let’s Get Started

1. **Install the [Mineral UI package](https://www.npmjs.com/package/mineral-ui)
and its dependencies using `npm` or `yarn`**

    ```bash
    npm install --save mineral-ui glamor glamorous react react-dom
    ```

1. **Wrap your app in a [ThemeProvider](/components/theme-provider) at its root for styling**

    ```jsx
    import React from 'react';
    import { render } from 'react-dom';
    import Button from 'mineral-ui/Button';
    import { ThemeProvider } from 'mineral-ui/themes';

    function App() {
      return (
        <ThemeProvider>
          <Button>
            Hello World
          </Button>
        </ThemeProvider>
      );
    }

    render(<App />, document.getElementById('app'));
    ```

1. **Mineral is open-source. [Contribute!](https://github.com/mineral-ui/mineral-ui)**
