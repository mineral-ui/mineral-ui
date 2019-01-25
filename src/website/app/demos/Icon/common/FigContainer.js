/* @flow */
import styled from '@emotion/styled';
import { componentStyleReset } from '../../../../../library/styles';

export default styled('div')(({ theme }) => ({
  ...componentStyleReset(theme),

  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: `-${theme.space_inline_xs}`
}));
