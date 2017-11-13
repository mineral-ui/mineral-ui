const React = require('react');
const { LiveProvider, LivePreview } = require('react-live');

const { ThemeProvider } = require('../themes');

// Some components have dependencies that make them hard to render statically.
// For now, we can just exclude these from the visual regression test suite.
const excludedComponents = ['Popover', 'Dropdown'];

function getComponentNameFromPath(path) {
  // Naive approach to grabbing the component name from the directory structure.
  // At the time of writing, paths look like this:
  //  ./<component>/examples/index.js
  return path.split('/')[1];
}

// Dynamically require all example files. See
// https://webpack.js.org/guides/dependency-management/#require-context
const requireContext = require.context(
  '../website/app/demos',
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
          <LiveProvider code={source} scope={scope} mountStylesheet>
            <LivePreview />
          </LiveProvider>
        </ThemeProvider>
      );
    });
    return { component, variants };
  })
  .filter(Boolean); // filter out empty items

module.exports = allExamples;
