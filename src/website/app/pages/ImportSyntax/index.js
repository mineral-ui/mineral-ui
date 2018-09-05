/* @flow */
import React from 'react';
import Markdown from '../../Markdown';
import content from './import-syntax.md';

type Props = {};

export default function ImportSyntax(props: Props) {
  return <Markdown {...props}>{content}</Markdown>;
}
