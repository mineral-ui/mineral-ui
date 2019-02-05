/* @flow */
import React from 'react';
import { LiveProvider, LivePreview } from 'react-live';
import { mountInThemeProvider, ssrInThemeProvider } from './enzymeUtils';

import type {
  Example,
  Examples
} from '../src/website/app/pages/ComponentDoc/types';

const mountExample = (example: Example) => {
  const [, wrapper] = mountInThemeProvider(
    <LiveProvider
      code={example.source}
      scope={example.scope}
      mountStylesheet={false}>
      <LivePreview />
    </LiveProvider>
  );

  // NOTE: Find the "SUT" component inside the react-live ErrorBoundary
  const component = wrapper
    .findWhere(
      (node) =>
        // $FlowFixMe
        node && node.type() && node.type().name === 'ErrorBoundary'
    )
    .childAt(0);

  return component;
};

const ssrExample = (example: Example) => {
  return ssrInThemeProvider(
    <LiveProvider
      code={example.source}
      scope={example.scope}
      mountStylesheet={false}>
      <LivePreview />
    </LiveProvider>
  );
};

export default function testDemoExamples(
  examples: Examples,
  options: {
    exclude?: Array<string>, // Example id
    mode?: 'snapshot' | 'ssr'
  } = {}
) {
  const { exclude = [], mode = 'snapshot' } = options;
  examples = examples.filter((example) => {
    return exclude && !exclude.includes(example.id);
  });

  return describe('demo examples', () => {
    examples
      .filter(({ scope, source }) => scope && source)
      .map((example) => {
        if (mode === 'snapshot') {
          describe('Snapshots:', () => {
            it(example.id, () => {
              const component = mountExample(example);
              expect(component).toMatchSnapshot();
            });
          });
        } else if (mode === 'ssr') {
          describe('Server Side Rendering (SSR):', () => {
            it(example.id, () => {
              expect(() => ssrExample(example)).not.toThrow();
            });
          });
        }
      });
  });
}
