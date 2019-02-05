/* @flow */
import React from 'react';
import Callout from '../../Callout';
import Markdown from '../../Markdown';
import content from './gettingStarted.md';

type Props = {};

export default function GettingStarted(props: Props) {
  return (
    <Markdown scope={{ Callout }} {...props}>
      {content}
    </Markdown>
  );
}
