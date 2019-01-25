/* @flow */
import styled from '@emotion/styled';

export default styled('figure')(({ theme }) => ({
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  padding: theme.space_inset_xs,
  width: '18em',

  '&:focus': {
    outline: '1px dotted currentColor'
  },

  '& > [role="img"]': {
    marginRight: theme.space_inline_xs
  }
}));
