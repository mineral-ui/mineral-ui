/* @flow */
import React from 'react';
import ComponentDocExample from '../../ComponentDocExample';
import Section from './DocSection';

type Example = {
  backgroundColor?: string,
  description?: React$Node,
  hideFromProd?: boolean,
  hideSource?: boolean,
  id: string,
  propValues?: Object,
  scope?: Object,
  source?: string,
  title: React$Node
};

type Props = {
  examples: Array<Example>,
  slug: string
};

export default function DocExamples({ examples, slug }: Props) {
  if (process.env.NODE_ENV === 'production') {
    examples = examples.filter((example) => !example.hideFromProd);
  }
  return (
    <Section>
      {examples.map((example, index) => {
        const exampleProps = {
          slug,
          ...example
        };
        return <ComponentDocExample {...exampleProps} key={index} />;
      })}
    </Section>
  );
}
