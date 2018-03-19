/* @flow */
import React from 'react';
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm
} from '../../library/styles';
import _Markdown from './Markdown';

const Markdown = createStyledComponent(_Markdown, ({ theme }) => ({
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
}));

export default function Intro(props: {}) {
  return <Markdown {...props} />;
}
