/* @flow */
import React from 'react';
import { DialogRowRoot as Root } from './styled';

import type { DialogRowProps } from './types';

export default function DialogRow(props: DialogRowProps) {
  return <Root {...props} />;
}

DialogRow.displayName = 'DialogRow';
