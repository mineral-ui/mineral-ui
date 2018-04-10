/* @flow */
import React, { Component } from 'react';
import { createStyledComponent } from '../styles';
import { createThemedComponent } from '../themes';
import { CardBlock, CardTitle } from '../Card';
import RtlPopper from './RtlPopper';
import PopoverArrow from './PopoverArrow';

type Props = {
  /** Content of the Popover */
  children: React$Node,
  /**
   * Plugins that are used to alter behavior. See
   * [PopperJS docs](https://popper.js.org/popper-documentation.html#modifiers)
   * for options.
   */
  modifiers?: Object,
  /** Include an arrow on the Popover content pointing to the trigger */
  hasArrow?: boolean,
  /** Placement of the Popover */
  placement?:
    | 'auto'
    | 'auto-end'
    | 'auto-start'
    | 'bottom'
    | 'bottom-end'
    | 'bottom-start'
    | 'left'
    | 'left-end'
    | 'left-start'
    | 'right'
    | 'right-end'
    | 'right-start'
    | 'top'
    | 'top-end'
    | 'top-start',
  /** Subtitle displayed under the title */
  subtitle?: React$Node,
  /** Title of the Popover */
  title?: React$Node
};

const arrowSize = '8px';

export const componentTheme = (baseTheme: Object) => ({
  PopoverContent_backgroundColor: baseTheme.panel_backgroundColor,
  PopoverContent_borderColor: baseTheme.panel_borderColor,
  PopoverContent_borderRadius: baseTheme.borderRadius_1,
  PopoverContent_boxShadow: baseTheme.boxShadow_2,
  PopoverContent_color: baseTheme.color,
  PopoverContent_paddingVertical: baseTheme.space_inset_sm,
  PopoverContent_maxWidth: 'none',
  PopoverContent_zIndex: baseTheme.zIndex_100,

  PopoverContentBlock_marginVertical: baseTheme.space_stack_sm,
  PopoverContentBlock_paddingHorizontal: baseTheme.space_inset_md,

  ...baseTheme
});

const Root = createStyledComponent(
  RtlPopper,
  ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      backgroundColor: theme.PopoverContent_backgroundColor,
      border: `1px solid ${theme.PopoverContent_borderColor}`,
      borderRadius: theme.PopoverContent_borderRadius,
      boxShadow: theme.PopoverContent_boxShadow,
      color: theme.PopoverContent_color,
      padding: `${theme.PopoverContent_paddingVertical} 0`,
      maxWidth: theme.PopoverContent_maxWidth,
      zIndex: theme.PopoverContent_zIndex,

      '&[data-placement^="top"]': {
        marginBottom: arrowSize
      },
      '&[data-placement^="bottom"]': {
        marginTop: arrowSize
      },
      '&[data-placement^="left"]': {
        marginRight: arrowSize
      },
      '&[data-placement^="right"]': {
        marginLeft: arrowSize
      },
      '&[data-x-out-of-boundaries]': {
        visibility: 'hidden'
      }
    };
  },
  {
    displayName: 'PopoverContent',
    includeStyleReset: true
  }
);

const cardOverrides = ({ theme: baseTheme }) => {
  const theme = componentTheme(baseTheme);
  return {
    CardRow_marginVertical: theme.PopoverContentBlock_marginVertical,
    CardRow_marginVerticalLast: theme.PopoverContentBlock_marginVertical,
    CardRow_paddingHorizontal: theme.PopoverContentBlock_paddingHorizontal
  };
};

const PopoverBlock = createThemedComponent(CardBlock, cardOverrides);
const PopoverTitle = createThemedComponent(CardTitle, cardOverrides);

/**
 * PopoverContent component
 */
export default class PopoverContent extends Component<Props> {
  props: Props;

  render() {
    const {
      children,
      hasArrow,
      placement,
      subtitle,
      title,
      ...restProps
    } = this.props;

    const rootProps = {
      placement,
      ...restProps
    };
    const popoverArrowProps = {
      size: arrowSize,
      placement
    };

    return (
      <Root {...rootProps}>
        {({ popperProps, restProps }) => {
          const wrapperProps = {
            ...popperProps,
            ...restProps
          };
          popoverArrowProps.placement = wrapperProps['data-placement'];

          return (
            <div {...wrapperProps}>
              {title && (
                <PopoverTitle subtitle={subtitle}>{title}</PopoverTitle>
              )}
              <PopoverBlock>{children}</PopoverBlock>
              {hasArrow && <PopoverArrow {...popoverArrowProps} />}
            </div>
          );
        }}
      </Root>
    );
  }
}
