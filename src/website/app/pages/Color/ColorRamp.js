/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import ColorRampRow from './ColorRampRow';
import range from 'lodash/range';

type Props = {
  baseColor: string
};

const Root = styled('div')(({ theme }) => ({
  display: 'inline-block',
  marginRight: theme.space_inline_sm,
  marginBottom: theme.space_stack_sm,
  width: '12em',
  padding: 0,
  '@media(max-width: 60em)': {
    width: '100%',
    marginRight: 0
  }
}));

export default function ColorRamp(props: Props) {
  const { baseColor } = props;
  return (
    <Root>
      {baseColor === 'black' ? (
        <ColorRampRow key={baseColor} name={baseColor} />
      ) : (
        range(10, 110, 10).map((step) => (
          <ColorRampRow key={step} name={`${baseColor}_${step}`} />
        ))
      )}
    </Root>
  );
}
