<Logo fill="#fff" />

### Let’s Get Started

1. #### Install the [Mineral UI package](https://www.npmjs.com/package/mineral-ui)

    ```bash
    npm install --save mineral-ui
    ```

    or

    ```bash
    yarn add mineral-ui
    ```

    Then install any missing peer dependencies reported by `npm` or `yarn`.

1. #### Wrap your app in a [ThemeProvider](/components/theme-provider) at its root for styling

    ```jsx
    import React from 'react';
    import { render } from 'react-dom';
    import Button from 'mineral-ui/Button';
    import ThemeProvider from 'mineral-ui/ThemeProvider';

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

1. #### [Contribute!](https://github.com/mineral-ui/mineral-ui) Mineral is open-source

<Buttons>
  <Button primary size="jumbo">Read the full documentation</Button>
  <Button size="jumbo">View on GitHub</Button>
</Buttons>
