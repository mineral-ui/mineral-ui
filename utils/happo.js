/* @flow */
const React = require('react');
const { LiveProvider, LivePreview } = require('react-live');
const { ThemeProvider } = require('../src/themes');

// Exclude components that cannot be rendered in JSDOM.
const excludedComponents = ['Dropdown', 'Popover', 'Select', 'Tooltip'];

function getComponentNameFromPath(path) {
  // ./<component>/examples/index.js
  return path.split('/')[1];
}

// Dynamically require all example files.
/* $FlowFixMe */
const requireContext = require.context(
  '../src/website/app/demos',
  /* useSubdirectories */ true,
  /\/examples\/index\.js$/
);

const allExamples = requireContext
  .keys()
  .map(pathToFile => {
    const component = getComponentNameFromPath(pathToFile);
    if (excludedComponents.includes(component)) {
      return;
    }
    const examples = requireContext(pathToFile);
    const variants = {};
    examples.default.forEach(({ scope, source, id }) => {
      // eslint-disable-next-line react/display-name
      variants[id] = () => (
        <ThemeProvider>
          <LiveProvider code={source} scope={scope} mountStylesheet={false}>
            <LivePreview />
          </LiveProvider>
        </ThemeProvider>
      );
    });
    return { component, variants };
  })
  .filter(Boolean); // filter out empty items

module.exports = allExamples;
