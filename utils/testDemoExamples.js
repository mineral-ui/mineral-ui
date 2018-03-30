/* @flow */
import React from 'react';
import { mount } from 'enzyme';
import { LiveProvider, LivePreview } from 'react-live';
import ThemeProvider from '../src/library/themes/ThemeProvider';

type Example = {
  title: React$Node,
  scope?: Object,
  id: string,
  source?: string
};
type Examples = Array<Example>;
type Options = {
  exclude?: Array<string> // Example id
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
      it(example.id, () => {
        const wrapper = mount(
          <ThemeProvider>
            <LiveProvider
              code={example.source}
              scope={example.scope}
              mountStylesheet={false}>
              <LivePreview />
            </LiveProvider>
          </ThemeProvider>
        );

        // NOTE: Find the "SUT" component inside the react-live ErrorBoundary
        const component = wrapper
          .findWhere(
            (node) =>
              // $FlowFixMe
              node && node.type() && node.type().name === 'ErrorBoundary'
          )
          .childAt(0);

        expect(component).toMatchSnapshot();
      });
    });
  });
}
