/* @flow */
import React from 'react';
import { createStyledComponent } from '../../library/styles';

type Props = {
  /* rendered chilren */
  children: React$Node,
  /* available font variants */
  variant?: 'ui' | 'prose' | 'mouse'
};

const componentTheme = (baseTheme) => ({
  Paragraph_color: baseTheme.color,
  Paragraph_fontSize_mouse: baseTheme.fontSize_mouse,
  Paragraph_fontSize_prose: baseTheme.fontSize_prose,
  Paragraph_fontSize_ui: baseTheme.fontSize_ui,

  Paragraph_lineHeight_normal: baseTheme.lineHeight,
  Paragraph_lineHeight_prose: baseTheme.lineHeight_prose,

  ...baseTheme
});

const Root = createStyledComponent('p', ({ variant, theme: baseTheme }) => {
  let theme = componentTheme(baseTheme);

  return {
    color: theme.Paragraph_color,
    fontSize: theme[`Paragraph_fontSize_${variant}`],
    lineHeight:
      variant === 'prose'
        ? theme.Paragraph_lineHeight_prose
        : theme.Paragraph_lineHeight_normal
  };
});

const Paragraph = (props: Props) => {
  const { children, variant, ...restProps } = props;
  return (
    <Root variant={variant} {...restProps}>
      {children}
    </Root>
  );
};

Paragraph.defaultProps = {
  variant: 'ui'
};

export default Paragraph;
