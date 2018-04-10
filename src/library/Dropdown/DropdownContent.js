/* @flow */
import React, { Component } from 'react';
import { composePropsWithGetter } from '../utils';
import { createStyledComponent, pxToEm } from '../styles';
import Menu from '../Menu';
import RtlPopper from '../Popover/RtlPopper';

type Props = {
  /** @Private Function that returns props to be applied to each item */
  getItemProps?: (props: Object, scope: Object) => Object,
  /** @Private Function that returns props to be applied to the menu */
  getMenuProps?: (props: Object, scope?: Object) => Object,
  /** Data from which the [Menu](/components/menu#data) will be constructed */
  data: Array<Object>,
  /** Id of the Dropdown content */
  id: string,
  /** Plugins that are used to alter behavior. See https://popper.js.org/popper-documentation.html#modifiers */
  modifiers?: Object,
  /** Placement of the dropdown */
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'left-end'
    | 'left-start'
    | 'right-end'
    | 'right-start'
    | 'top-end'
    | 'top-start',
  /** Display a wider dropdown menu */
  wide?: boolean
};

export const componentTheme = (baseTheme: Object) => ({
  DropdownContent_backgroundColor: baseTheme.panel_backgroundColor,
  DropdownContent_borderColor: baseTheme.panel_borderColor,
  DropdownContent_borderRadius: baseTheme.borderRadius_1,
  DropdownContent_boxShadow: baseTheme.boxShadow_2,
  DropdownContent_margin: '5px',
  DropdownContent_zIndex: baseTheme.zIndex_100,
  ...baseTheme
});

const Root = createStyledComponent(
  RtlPopper,
  ({ theme: baseTheme, wide }) => {
    const theme = componentTheme(baseTheme);

    return {
      backgroundColor: theme.DropdownContent_backgroundColor,
      border: `1px solid ${theme.DropdownContent_borderColor}`,
      borderRadius: theme.DropdownContent_borderRadius,
      boxShadow: theme.DropdownContent_boxShadow,
      maxHeight: pxToEm(368),
      overflowY: 'auto',
      userSelect: 'none',
      width: wide ? pxToEm(344) : pxToEm(224),
      zIndex: theme.DropdownContent_zIndex,

      '&[data-placement^="top"]': {
        marginBottom: theme.DropdownContent_margin
      },
      '&[data-placement^="bottom"]': {
        marginTop: theme.DropdownContent_margin
      },
      '&[data-placement^="left"]': {
        marginRight: theme.DropdownContent_margin
      },
      '&[data-placement^="right"]': {
        marginLeft: theme.DropdownContent_margin
      },
      '&[data-x-out-of-boundaries]': {
        visibility: 'hidden'
      }
    };
  },
  {
    displayName: 'DropdownContent',
    includeStyleReset: true,
    filterProps: ['wide']
  }
);

/**
 * DropdownContent component
 */
export default class DropdownContent extends Component<Props> {
  render() {
    const {
      data,
      getItemProps,
      getMenuProps,
      id,
      placement,
      wide,
      ...restProps
    } = this.props;

    const rootProps = {
      id,
      placement,
      wide,
      ...restProps
    };

    const menuProps = composePropsWithGetter(
      {
        // Props set by this component
        id: `${id}-menu`,
        data,
        getItemProps
      },
      // Custom prop getter can override all values
      getMenuProps
    );

    return (
      <Root {...rootProps}>
        {({ popperProps, restProps }) => {
          const wrapperProps = {
            ...popperProps,
            ...restProps
          };

          return (
            <div {...wrapperProps}>
              <Menu {...menuProps} />
            </div>
          );
        }}
      </Root>
    );
  }
}
