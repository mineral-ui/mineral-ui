/* @flow */
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { ellipsis } from 'polished';
import { componentStyleReset, getNormalizedValue } from '../styles';

import { fauxControlTheme } from './themes';

export const FauxControlRoot = styled('div', {
  shouldForwardProp: (prop) => prop !== 'disabled' && isPropValid(prop)
})(({ disabled, theme: baseTheme, variant }) => {
  let theme = fauxControlTheme(baseTheme);
  if (variant) {
    // prettier-ignore
    theme = {
      ...theme,
      FauxControl_borderColor_hover: theme[`borderColor_${variant}_hover`],
      FauxControl_boxShadow_active: `0 0 0 1px ${theme.boxShadow_focusInner}, 0 0 0 2px ${theme[`borderColor_${variant}_active`]}`,
      FauxControl_boxShadow_focus: `0 0 0 1px ${theme.boxShadow_focusInner}, 0 0 0 2px ${theme[`borderColor_${variant}_focus`]}`,
    };
  }

  return {
    ...componentStyleReset(baseTheme),

    position: 'relative',
    zIndex: 1,

    '&:hover': {
      '& > div:last-child': {
        borderColor: !disabled ? theme.FauxControl_borderColor_hover : null
      }
    },

    '&:focus': {
      '& > div:last-child': {
        borderColor: !disabled ? theme.FauxControl_borderColor_focus : null,
        boxShadow: !disabled ? theme.FauxControl_boxShadow_focus : null
      }
    },

    '&:active': {
      '& > div:last-child': {
        borderColor: theme.FauxControl_borderColor_active,
        boxShadow: disabled ? 'none' : theme.FauxControl_boxShadow_active
      }
    }
  };
});

export const Prefix = styled('span', {
  shouldForwardProp: (prop) => prop !== 'size' && isPropValid(prop)
})(({ iconStart, size, theme: baseTheme }) => {
  const theme = fauxControlTheme(baseTheme);
  const rtl = theme.direction === 'rtl';

  const fontSize =
    size === 'small'
      ? theme.FauxControl_fontSize_small
      : theme.FauxControl_fontSize;
  const marginWithIcon = getNormalizedValue(
    theme.FauxControl_paddingHorizontal,
    fontSize
  );
  const marginWithoutIcon = getNormalizedValue(
    `${parseFloat(theme.FauxControlIcon_marginHorizontal) / 2}em`,
    fontSize
  );

  return {
    flex: '0 0 auto',
    fontSize,
    marginLeft: rtl ? marginWithoutIcon : iconStart ? 0 : marginWithIcon,
    marginRight: rtl ? (iconStart ? 0 : marginWithIcon) : marginWithoutIcon,
    whiteSpace: 'nowrap',
    ...ellipsis('8em')
  };
});

export const Suffix = styled('span', {
  shouldForwardProp: (prop) => prop !== 'size' && isPropValid(prop)
})(({ iconEnd, size, theme: baseTheme, variant }) => {
  const theme = fauxControlTheme(baseTheme);
  const rtl = theme.direction === 'rtl';

  const fontSize =
    size === 'small'
      ? theme.FauxControl_fontSize_small
      : theme.FauxControl_fontSize;
  const marginWithIcon = getNormalizedValue(
    theme.FauxControl_paddingHorizontal,
    fontSize
  );
  const marginWithoutIcon = getNormalizedValue(
    `${parseFloat(theme.FauxControlIcon_marginHorizontal) / 2}em`,
    fontSize
  );

  return {
    flex: '0 0 auto',
    fontSize,
    marginLeft: rtl
      ? iconEnd || variant
        ? 0
        : marginWithIcon
      : marginWithoutIcon,
    marginRight: rtl
      ? marginWithoutIcon
      : iconEnd || variant
      ? 0
      : marginWithIcon,
    whiteSpace: 'nowrap',
    ...ellipsis('8em')
  };
});

export const Underlay = styled('div', {
  shouldForwardProp: (prop) =>
    ['disabled', 'readOnly'].indexOf(prop) === -1 && isPropValid(prop)
})(({ borderRadius, disabled, readOnly, theme: baseTheme, variant }) => {
  const theme = fauxControlTheme(baseTheme);

  return {
    backgroundColor:
      disabled || readOnly
        ? theme.input_backgroundColor_disabled
        : theme.FauxControl_backgroundColor,
    borderColor:
      variant && !disabled && !readOnly
        ? theme[`borderColor_${variant}`]
        : theme.FauxControl_borderColor,
    borderRadius: borderRadius ? borderRadius : theme.FauxControl_borderRadius,
    borderStyle: 'solid',
    borderWidth: theme.FauxControl_borderWidth,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: -1
  };
});

export const Control = styled('input', {
  shouldForwardProp: (prop) => ['as', 'prefix'].indexOf(prop) === -1
})(
  ({
    controlPropsIn,
    controlSize,
    disabled,
    hasPlaceholder,
    iconEnd,
    iconStart,
    prefix,
    readOnly,
    size: nonHtmlSize,
    suffix,
    theme: baseTheme,
    variant
  }) => {
    let theme = fauxControlTheme(baseTheme);

    const size = controlSize || nonHtmlSize;

    if (variant) {
      // prettier-ignore
      theme = {
      ...theme,
      FauxControl_boxShadow_focus: `0 0 0 1px ${theme.boxShadow_focusInner}, 0 0 0 2px ${theme[`borderColor_${variant}_focus`]}`,
    };
    }

    if (controlPropsIn.variant) {
      // prettier-ignore
      theme = {
      ...theme,
      FauxControl_color: theme[`color_${controlPropsIn.variant}`]
    };
    }

    const rtl = theme.direction === 'rtl';
    const fontSize =
      size === 'small'
        ? theme.FauxControl_fontSize_small
        : theme.FauxControl_fontSize;
    const sizeAppropriateHorizontalPadding =
      size === 'small' || size === 'medium'
        ? theme.FauxControl_paddingHorizontal_small ||
          theme.FauxControl_paddingHorizontal
        : theme.FauxControl_paddingHorizontal;
    const paddingWithoutIcon = getNormalizedValue(
      sizeAppropriateHorizontalPadding,
      fontSize
    );

    let color = theme.FauxControl_color;
    if (disabled) {
      color = theme.color_disabled;
    } else if (hasPlaceholder) {
      color = theme.FauxControl_color_placeholder;
    } else if (readOnly) {
      color = theme.FauxControl_color_readOnly;
    }

    // [1] - Safari and many Android browsers need this to apply the correct
    //       color to disabled controls

    const placeholderStyles = {
      color: theme.FauxControl_color_placeholder,
      WebkitTextFillColor: theme.FauxControl_color_placeholder, // [1]
      fontStyle: 'italic'
    };

    return {
      color,
      WebkitTextFillColor: color, // [1]
      fontSize,
      fontStyle: hasPlaceholder ? 'italic' : null,
      outline: 0,
      paddingLeft:
        ((iconStart || prefix) && !rtl) ||
        ((iconEnd || variant || suffix) && rtl)
          ? 0
          : paddingWithoutIcon,
      paddingRight:
        ((iconEnd || variant || suffix) && !rtl) ||
        ((iconStart || prefix) && rtl)
          ? 0
          : paddingWithoutIcon,

      '&::placeholder': placeholderStyles,
      '&::-ms-input-placeholder': placeholderStyles, // Edge
      '&:-ms-input-placeholder': placeholderStyles, // IE 11

      '&::-ms-clear': {
        display: 'none'
      },

      '&:focus': {
        '& ~ div:last-child': {
          borderColor: theme.FauxControl_borderColor_focus,
          boxShadow: theme.FauxControl_boxShadow_focus
        }
      }
    };
  }
);
