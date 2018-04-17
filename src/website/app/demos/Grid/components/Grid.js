/* @flow */
import { createStyledComponent, pxToEm } from '../../../../../library/styles';
import _Grid from '../../../../../library/Grid';

type Props = {
  gutterWidth?: number | string,
  theme: Object
};

export const containerStyles = ({
  gutterWidth: propGutterSize,
  theme
}: Props) => {
  const gutterWidth = propGutterSize === undefined ? 'md' : propGutterSize;
  const gutter =
    typeof gutterWidth === 'number'
      ? pxToEm(gutterWidth / 2)
      : `${parseFloat(theme[`space_inline_${gutterWidth}`] || gutterWidth) /
          2}em`;
  const offset = gutterWidth ? `calc(${gutter} - 4px)` : -4;

  return {
    position: 'relative',
    zIndex: 1,

    '&::before': {
      border: `1px dotted ${theme.color_theme_30}`,
      bottom: -4,
      content: '""',
      left: offset,
      position: 'absolute',
      right: offset,
      top: -4,
      zIndex: -1
    }
  };
};

export default createStyledComponent(_Grid, (props) => ({
  ...containerStyles(props)
}));
