/* @flow */
import React from 'react';
import { keyframes } from 'react-emotion';
import lighten from 'polished/lib/color/lighten';
import darken from 'polished/lib/color/darken';
import { createStyledComponent } from '../../library/styles';

type Props = {
  error?: string,
  pastDelay: boolean,
  timedOut: boolean
};

const Message = createStyledComponent('div', ({ fancy, theme }) => {
  const loading = keyframes({
    '0%': { backgroundPosition: '0 0' },
    '100%': { backgroundPosition: '100% 0' }
  });

  let styles = {
    color: theme.color_theme,
    fontSize: '1.5em',
    margin: `${theme.baseline_2} auto`,
    width: 'min-content'
  };

  if (fancy) {
    styles = {
      ...styles,
      animation: `${loading} 2s`,
      animationIterationCount: 'infinite',
      background: `linear-gradient(90deg,
        ${lighten(0.1, theme.color_theme)},
        ${darken(0.2, theme.color_theme)},
        ${lighten(0.1, theme.color_theme)},
        ${darken(0.2, theme.color_theme)}
      )`,
      backgroundPosition: '0 0',
      backgroundSize: '300% 100%',
      color: 'white',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    };
  }

  return styles;
});

export default function Loading(props: Props) {
  const { error, pastDelay, timedOut } = props;
  if (pastDelay) {
    return <Message fancy>Loading...</Message>;
  } else if (timedOut || error) {
    return <Message>Sorry, there was a problem loading the page.</Message>;
  } else {
    return null;
  }
}
