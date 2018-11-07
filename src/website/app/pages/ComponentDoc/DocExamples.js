/* @flow */
import React from 'react';
import ComponentDocExample from '../../ComponentDocExample';
import Section from './DocSection';

import type { Examples } from './types';

type Props = {
  examples: Examples,
  slug: string
};

export default function DocExamples(props: Props) {
  let { examples, slug } = props;
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
