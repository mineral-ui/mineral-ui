/* @flow */
import React from 'react';
import { Link as Root } from './styled';

import { linkPropTypes } from './propTypes';
import type { LinkProps } from './types';

export default function Link(props: LinkProps) {
  return <Root {...props} />;
}

Link.displayName = 'Link';
Link.propTypes = linkPropTypes;
