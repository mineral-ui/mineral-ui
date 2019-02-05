/* @flow */
import React from 'react';
import Markdown from '../../Markdown';
import Button from '../../SiteButton';
import content from './roadmap.md';

type Props = {};

export default function Roadmap(props: Props) {
  return (
    <Markdown scope={{ Button }} {...props}>
      {content}
    </Markdown>
  );
}
