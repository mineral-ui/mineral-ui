/* @flow */
import React from 'react';
import styled from '@emotion/styled';

type Props = {};

const Root = styled('div')({
  bottom: 0,
  left: 'calc(-50vw + 50%)',
  position: 'absolute',
  right: 'calc(-50vw + 50%)',
  top: 0,
  zIndex: '-1'
});

const Triangles = styled('div')({
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

export default function Canvas(props: Props) {
  const { ...restProps } = props;
  return (
    <Root {...restProps}>
      <Triangles />
    </Root>
  );
}
