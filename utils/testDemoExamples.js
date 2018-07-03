/* @flow */
import React from 'react';
import semver from 'semver';
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
  exclude?: Array<string>, // Example id
  contextPolyfill?: boolean
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
  const { exclude, contextPolyfill } = options;

  if (exclude) {
    const exclusions = exclude || [];
    examples = examples.filter((example) => !exclusions.includes(example.id));
  }

  return describe('demo examples', () => {
    examples.filter(({ scope, source }) => scope && source).map((example) => {
      /*
       * Skip snapshot testing of components that use the create-react-context
       * polyfill as these components render differently when the polyfill is
       * used vs. when it is supported natively by React.
       */
      const itFn =
        contextPolyfill && semver.lt(React.version, '16.3.0') ? xit : it;

      describe('Snapshots:', () => {
        itFn(example.id, () => {
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
