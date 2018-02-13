/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
const React = require('react');
const { LiveProvider, LivePreview } = require('react-live');
const { ThemeProvider } = require('../src/themes');

// Exclude components that cannot be rendered in JSDOM.
const excludedComponents = ['Popover', 'Dropdown', 'Tooltip'];

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
