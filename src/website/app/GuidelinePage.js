import React from 'react';
import { createStyledComponent } from '../../utils';

const Root = createStyledComponent('div', ({ theme }) => ({
  '& > div > h1 ~ p': {
    fontSize: theme.fontSize_h3,
    margin: `0 0 ${theme.spacing_single} 0`
  },
  // There might be more than one paragraph element in the Intro section.
  // marksy generates a flat-ish tree of elements, so body copy Ps are on the same level
  // as the intro paragraph.
  '& > div > h2 ~ p': {
    fontSize: theme.fontSize_prose
  }
}));

export default function GuidelinePage({ children }: Props) {
  return (
    <Root>
      {children}
    </Root>
  );
}
