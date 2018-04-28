/* @flow */
import React, { Component, cloneElement } from 'react';
import { ellipsis } from 'polished';
import { createStyledComponent, getNormalizedValue, pxToEm } from '../styles';
import IconDanger from '../Icon/IconDanger';
import IconSuccess from '../Icon/IconSuccess';
import IconWarning from '../Icon/IconWarning';

type Props = {
  /** Elements to display after iconEnd */
  afterItems?: React$Node,
  /** Elements to display before iconStart */
  beforeItems?: React$Node,
  /** Content of control */
  children?: React$Node,
  /** Component that receives focus */
  control: React$ComponentType<*>,
  /** Props applied to the control */
  controlProps?: Object,
  /** Disables the source */
  disabled?: boolean,
  /** ref for the FauxControl */
  fauxControlRef?: (node: ?React$Component<*, *>) => void,
  /** Icon located at the start of the control */
  iconStart?: React$Element<*>,
  /** Icon located at the end of the control */
  iconEnd?: React$Element<*>,
  /** Text to display before control */
  prefix?: React$Node,
  /** Indicates that the user cannot modify the value of the source */
  readOnly?: boolean,
  /** Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  /** Text to display after control */
  suffix?: React$Node,
  /** Available variants */
  variant?: 'success' | 'warning' | 'danger'
};

// prettier-ignore
export const componentTheme = (baseTheme: Object) => ({
  FauxControl_backgroundColor: baseTheme.input_backgroundColor,
  FauxControl_borderColor: baseTheme.borderColor,
  FauxControl_borderColor_active: baseTheme.borderColor,
  FauxControl_borderColor_focus: baseTheme.borderColor,
  FauxControl_borderColor_hover: baseTheme.borderColor_theme_hover,
  FauxControl_borderRadius: baseTheme.borderRadius_1,
  FauxControl_borderWidth: '1px',
  FauxControl_boxShadow_active: `0 0 0 1px ${baseTheme.boxShadow_focusInner}, 0 0 0 2px ${baseTheme.borderColor_theme_active}`,
  FauxControl_boxShadow_focus: `0 0 0 1px ${baseTheme.boxShadow_focusInner}, 0 0 0 2px ${baseTheme.borderColor_theme_focus}`,
  FauxControl_color: baseTheme.color,
  FauxControl_color_placeholder: baseTheme.input_color_placeholder,
  FauxControl_color_readOnly: baseTheme.color_readOnly,
  FauxControl_fontSize: baseTheme.fontSize_ui,
  FauxControl_fontSize_small: pxToEm(12),
  FauxControl_paddingHorizontal: baseTheme.space_inset_md,
  FauxControl_paddingHorizontal_small: baseTheme.space_inset_sm,

  FauxControlIcon_marginHorizontal: baseTheme.space_inline_sm,

  ...baseTheme
});

const styles = {
  prefix: ({ iconStart, size, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);
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
  },
  control: ({
    controlPropsIn,
    disabled,
    hasPlaceholder,
    iconEnd,
    iconStart,
    prefix,
    readOnly,
    size,
    suffix,
    theme: baseTheme,
    variant
  }) => {
    let theme = componentTheme(baseTheme);

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

      '&:focus,&[data-simulate-focus]': {
        '& ~ div:last-child': {
          borderColor: theme.FauxControl_borderColor_focus,
          boxShadow: theme.FauxControl_boxShadow_focus
        }
      }
    };
  },
  root: ({ disabled, theme: baseTheme, variant }) => {
    let theme = componentTheme(baseTheme);
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
      position: 'relative',
      zIndex: 1,

      '&:hover,&[data-simulate-hover]': {
        '& > div:last-child': {
          borderColor: !disabled ? theme.FauxControl_borderColor_hover : null
        }
      },

      '&:focus,&[data-simulate-focus]': {
        '& > div:last-child': {
          borderColor: !disabled ? theme.FauxControl_borderColor_focus : null,
          boxShadow: !disabled ? theme.FauxControl_boxShadow_focus : null
        }
      },

      '&:active,&[data-simulate-active]': {
        '& > div:last-child': {
          borderColor: theme.FauxControl_borderColor_active,
          boxShadow: disabled ? 'none' : theme.FauxControl_boxShadow_active
        }
      }
    };
  },
  suffix: ({ iconEnd, size, theme: baseTheme, variant }) => {
    const theme = componentTheme(baseTheme);
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
        ? iconEnd || variant ? 0 : marginWithIcon
        : marginWithoutIcon,
      marginRight: rtl
        ? marginWithoutIcon
        : iconEnd || variant ? 0 : marginWithIcon,
      whiteSpace: 'nowrap',
      ...ellipsis('8em')
    };
  },
  underlay: ({ disabled, readOnly, theme: baseTheme, variant }) => {
    const theme = componentTheme(baseTheme);

    return {
      backgroundColor:
        disabled || readOnly
          ? theme.input_backgroundColor_disabled
          : theme.FauxControl_backgroundColor,
      borderColor:
        variant && !disabled && !readOnly
          ? theme[`borderColor_${variant}`]
          : theme.FauxControl_borderColor,
      borderRadius: theme.FauxControl_borderRadius,
      borderStyle: 'solid',
      borderWidth: theme.FauxControl_borderWidth,
      bottom: 0,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: -1
    };
  }
};

const Prefix = createStyledComponent('span', styles.prefix);
const Root = createStyledComponent('div', styles.root, {
  displayName: 'FauxControl',
  includeStyleReset: true
});
const Suffix = createStyledComponent('span', styles.suffix);
const Underlay = createStyledComponent('div', styles.underlay, {
  displayName: 'Underlay'
});

const variantIcons = {
  danger: <IconDanger />,
  success: <IconSuccess />,
  warning: <IconWarning />
};

function getIcons({
  disabled,
  iconStart,
  iconEnd,
  readOnly,
  size,
  variant,
  variantIcons
}) {
  if (disabled || readOnly) {
    return [];
  }

  const iconSize = size === 'small' ? 'medium' : pxToEm(24);
  const startIcon =
    iconStart &&
    cloneElement(iconStart, {
      size: iconSize,
      key: 'iconStart'
    });

  const endIconSource =
    iconEnd !== null && variant
      ? variantIcons[variant]
      : iconEnd ? iconEnd : null;

  const endIcon =
    endIconSource &&
    cloneElement(endIconSource, {
      size: iconSize,
      key: 'iconEnd'
    });

  return [startIcon, endIcon];
}

// The control node must be created outside of render, so that the entire DOM
// element is replaced only when the control prop is changed.
const createControlNode = (props: Props) => {
  return createStyledComponent(props.control, styles.control);
};

/**
 * FauxControl
 */
export default class FauxControl extends Component<Props> {
  componentWillUpdate(nextProps: Props) {
    if (this.props.control !== nextProps.control) {
      this.controlNode = createControlNode(nextProps);
    }
  }

  controlNode: React$ComponentType<*> = createControlNode(this.props);

  render() {
    const {
      afterItems,
      beforeItems,
      children,
      controlProps: controlPropsIn,
      disabled,
      fauxControlRef,
      iconEnd,
      iconStart,
      prefix: prefixIn,
      size,
      readOnly,
      suffix: suffixIn,
      variant,
      ...restProps
    } = this.props;

    const rootProps = {
      disabled,
      innerRef: fauxControlRef,
      variant,
      ...restProps
    };

    const [startIcon, endIcon] = getIcons({
      disabled,
      iconStart,
      iconEnd,
      readOnly,
      size,
      variant,
      variantIcons
    });

    const prefixAndSuffixProps = {
      iconEnd,
      iconStart,
      size,
      variant
    };

    const prefix = prefixIn ? (
      <Prefix {...prefixAndSuffixProps} key="prefix">
        {prefixIn}
      </Prefix>
    ) : null;
    const suffix = suffixIn ? (
      <Suffix {...prefixAndSuffixProps} key="suffix">
        {suffixIn}
      </Suffix>
    ) : null;

    const controlProps = {
      controlPropsIn,
      ...controlPropsIn,
      children,
      disabled,
      iconEnd,
      iconStart,
      prefix: prefixIn,
      innerRef: controlPropsIn && controlPropsIn.controlRef,
      readOnly,
      size,
      suffix: suffixIn,
      variant
    };

    const Control = this.controlNode;

    const underlayProps = { disabled, readOnly, variant };

    return (
      <Root {...rootProps}>
        {beforeItems}
        {startIcon}
        {prefix}
        {<Control {...controlProps} key="control" />}
        {suffix}
        {endIcon}
        {afterItems}
        <Underlay {...underlayProps} />
      </Root>
    );
  }
}
