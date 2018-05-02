/* @flow */
import React from 'react';
import { LiveProvider, LivePreview } from 'react-live';
import { mountInThemeProvider, ssrInThemeProvider } from '../utils/enzymeUtils';

type Example = {
  title: string,
  scope?: Object,
  id: string,
  source?: string
};
type Examples = Array<Example>;
type Options = {
  exclude?: Array<string> // Example id
};

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
  options: Options = {}
) {
  if (options.exclude) {
    const exclusions = options.exclude || [];
    examples = examples.filter((example) => !exclusions.includes(example.id));
  }

  return describe('demo examples', () => {
    examples.filter(({ scope, source }) => scope && source).map((example) => {
      describe('Snapshots:', () => {
        it(example.id, () => {
          const component = mountExample(example);
          expect(component).toMatchSnapshot();
        });
      });

      describe('Server Side Rendering (SSR):', () => {
        it(example.id, () => {
          expect(() => ssrExample(example)).not.toThrow();
        });
      });
    });
  });
}
