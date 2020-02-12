/* @flow */
import styled from '@emotion/styled';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const FigCaption: StyledComponent<{ [key: string]: any }> = styled(
  'figcaption'
)(({ theme }) => ({
  fontSize: theme.fontSize_mouse,
  marginLeft: theme.space_inline_xs
}));

export default FigCaption;
