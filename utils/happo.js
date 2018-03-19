/* @flow */
const React = require('react');
const { LiveProvider, LivePreview } = require('react-live');
const { ThemeProvider } = require('../src/library/themes');
const demos = require('../src/website/app/demos').default;

const excludedComponents = ['Dropdown', 'Form', 'Popover', 'Select', 'Tooltip'];

module.exports = Object.values(demos)
  // $FlowFixMe
  .map(({ examples, title: component }) => {
    if (excludedComponents.includes(component)) {
      return;
    }

    return examples.reduce(
      (acc, { scope, source, id }) => {
        if (source) {
          // eslint-disable-next-line react/display-name
          acc.variants[id] = () => (
            <ThemeProvider>
              <LiveProvider code={source} scope={scope} mountStylesheet={false}>
                <LivePreview />
              </LiveProvider>
            </ThemeProvider>
          );
        }
        return acc;
      },
      { component, variants: {} }
    );
  })
  .filter(Boolean);
