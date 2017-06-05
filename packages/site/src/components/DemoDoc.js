/* @flow */

import React from 'react';
import ComponentDoc from './ComponentDoc';
import ComponentDocExample from './ComponentDocExample';

type Example = {|
  // MnrlReactComponent
  component: Function
|};

type Demo = {|
  description: string,
  examples: Array<Example>,
  slug: string,
  title: string
|};

type Props = {|
  demo: Demo
|};

export default function DemoDoc({ demo }: Props) {
  const { examples, ...docProps } = demo;

  const exampleDocs = examples.map((example, idx) => {
    const ExampleComponent = example.component;
    return (
      <ComponentDocExample key={idx}>
        <ExampleComponent />
      </ComponentDocExample>
    );
  });

  return (
    <ComponentDoc {...docProps}>
      {exampleDocs}
    </ComponentDoc>
  );
}
