/* @flow */
import React from 'react';
import { DialogRowRoot as Root } from './styled';

import { DialogRowProps } from './types';

export default function DialogRow(props: DialogRowProps) {
  return <Root {...props} />;
}

DialogRow.displayName = 'DialogRow';
