/* @flow */
import React from 'react';
import Button from '../../../../library/Button';
import Callout from '../../Callout';
import Markdown from '../../Markdown';
import content from './styling.md';

type Props = {};

export default function Styling(props: Props) {
  return (
    <Markdown scope={{ Button, Callout }} {...props}>
      {content}
    </Markdown>
  );
}
