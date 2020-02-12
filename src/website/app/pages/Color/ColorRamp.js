/* @flow */
import styled from '@emotion/styled';
import range from 'lodash/range';
import React from 'react';
import ColorRampRow from './ColorRampRow';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

type Props = {
  baseColor: string
};

const Root: StyledComponent<{ [key: string]: any }> = styled('div')(
  ({ theme }) => ({
    display: 'inline-block',
    marginRight: theme.space_inline_sm,
    marginBottom: theme.space_stack_sm,
    width: '12em',
    padding: 0,
    '@media(max-width: 60em)': {
      width: '100%',
      marginRight: 0
    }
  })
);

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
