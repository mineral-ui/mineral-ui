/* @flow */
import { rgba } from 'polished';
import { createStyledComponent } from '../../../../../library/styles';
import _Box from '../../../../../library/Box';

type Props = {
  inline?: boolean,
  padding?: number | string,
  theme: Object
};

export const boxStyles = ({ inline, padding, theme }: Props) => {
  const styles = {
    alignItems: 'center',
    backgroundColor: theme.color_theme_10,
    color: theme.color_theme_70,
    display: inline ? 'inline-flex' : 'flex',
    justifyContent: 'center',
    outline: `1px solid ${theme.color_theme_20}`,
    padding: padding ? null : theme.space_inset_sm,
    position: padding ? 'relative' : null
  };

  if (padding) {
    const borderWidth = theme[`space_inline_${padding}`] || padding;

    // $FlowFixMe
    styles['&::before'] = {
      borderColor: rgba(theme.color_theme_20, 0.5),
      borderStyle: 'solid',
      borderWidth,
      bottom: 0,
      content: '""',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0
    };
  }

  return styles;
};

export default createStyledComponent(_Box, boxStyles);
