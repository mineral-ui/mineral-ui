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
  examples: Array<Example>
};

export default function DocExamples({ examples }: Props) {
  if (process.env.NODE_ENV === 'production') {
    examples = examples.filter(example => !example.hideFromProd);
  }
  return (
    <Section>
      {examples.map((example, index) => (
        <ComponentDocExample key={index} {...example} />
      ))}
    </Section>
  );
}
