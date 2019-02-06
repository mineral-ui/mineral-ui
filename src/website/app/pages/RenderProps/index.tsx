/* @flow */
import React from 'react';
import Markdown from '../../Markdown';
import content from './render-props.md';
import examples from './examples/index';

type Props = {};

export default function RenderProps(props: Props) {
  return (
    <Markdown scope={examples} {...props}>
      {content}
    </Markdown>
  );
}
