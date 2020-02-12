/* @flow */
import styled from '@emotion/styled';
import { componentStyleReset } from '../../../../../library/styles';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const FigContainer: StyledComponent<{ [key: string]: any }> = styled('div')(
  ({ theme }) => ({
    ...componentStyleReset(theme),

    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: `-${theme.space_inline_xs}`
  })
);

export default FigContainer;
