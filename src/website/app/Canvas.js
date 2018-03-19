/* @flow */
import React from 'react';
import { createStyledComponent } from '../../library/styles';

type Props = {};

const Root = createStyledComponent('div', {
  bottom: 0,
  left: 'calc(-50vw + 50%)',
  position: 'absolute',
  right: 'calc(-50vw + 50%)',
  top: 0,
  zIndex: '-1'
});

const Triangles = createStyledComponent('div', {
  backgroundImage: 'url(/images/triangles.svg)',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  bottom: 0,
  left: 0,
  mixBlendMode: 'hard-light',
  position: 'absolute',
  right: 0,
  top: 0
});

export default function Canvas({ ...restProps }: Props) {
  return (
    <Root {...restProps}>
      <Triangles />
    </Root>
  );
}
