/* @flow */
import React from 'react';
import Button from '../../../../library/Button';
import Markdown from '../../Markdown';
import content from './styling.md';

type Props = {};

export default function Styling(props: Props) {
  return (
    <Markdown scope={{ Button }} {...props}>
      {content}
    </Markdown>
  );
}
