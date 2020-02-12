/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import { getNormalizedValue, pxToEm } from '../../library/styles';
import _Markdown from './Markdown';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Markdown: StyledComponent<{ [key: string]: any }> = styled(_Markdown)(
  ({ theme }) => ({
    '& > p': {
      color: theme.color_gray_70,
      fontSize: pxToEm(20),
      fontWeight: '300',
      maxWidth: getNormalizedValue(theme.maxTextWidth, pxToEm(20)),

      '& a > [role="img"]': {
        borderBottomWidth: 2,
        top: 4
      },

      [theme.bp_moreSpacious]: {
        fontSize: pxToEm(24),
        maxWidth: getNormalizedValue(theme.maxTextWidth, pxToEm(24))
      }
    }
  })
);

export default function Intro(props: {}) {
  return <Markdown {...props} />;
}
