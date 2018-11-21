/* @flow */
import React, { Children, cloneElement, Component } from 'react';
import composeEventHandlers from '../utils/composeEventHandlers';
import { INTERNAL_TYPE, PREFIX } from './constants';
import { NavigationRoot } from './styled';
import NavItem from './NavItem';
import NavOverflowMenu from './NavOverflowMenu';

import type {
  AnchorEvent,
  NavigationDefaultProps,
  NavigationProps,
  PrefixAndType
} from './types';

// If we render `a` with an `href` for items, we need to preventDefault() to "disable" it
const preventDefaultEventFn = (event: AnchorEvent) => {
  event.preventDefault();
};

export default class Navigation extends Component<NavigationProps> {
  static displayName = 'Navigation';

  static defaultProps: NavigationDefaultProps = {
    itemElement: 'a',
    maxItemWidth: '8.5em',
    messages: {
      moreLabel: 'More navigation items',
      moreText: 'More'
    }
  };

  render() {
    const {
      align,
      items: ignoreItems,
      minimal,
      secondary,
      type: typeProp,
      ...restProps
    } = this.props;

    const prefix = secondary ? PREFIX.secondary : PREFIX.primary;
    const type = typeProp
      ? `_${typeProp}`
      : minimal
        ? INTERNAL_TYPE.minimal
        : INTERNAL_TYPE.none;

    const rootProps = {
      align,
      prefix,
      type,
      ...restProps
    };

    return (
      <NavigationRoot {...rootProps}>
        {this.renderItems({ prefix, type })}
      </NavigationRoot>
    );
  }

  renderItems = (prefixAndType: PrefixAndType) => {
    const {
      children,
      itemElement,
      items: itemsProp,
      maxItemWidth,
      messages,
      onChange: ignoreOnChange,
      overflowAtIndex,
      selectedIndex,
      type: ignoreType,
      ...restProps
    } = this.props;

    const items = children
      ? Children.map(children, (child) => {
          const { children, ...rest } = child.props;
          return {
            child,
            text: children,
            ...rest
          };
        })
      : itemsProp;

    let overflowData;
    if (items && overflowAtIndex) {
      overflowData = items.slice(overflowAtIndex);
    }

    return (
      items &&
      items.length &&
      items.map(
        (
          {
            child,
            disabled,
            element,
            maxWidth,
            onClick,
            selected,
            text,
            ...restItem
          },
          index
        ) => {
          if (overflowAtIndex && index >= overflowAtIndex) {
            if (index === overflowAtIndex) {
              const menuProps = {
                data: overflowData,
                onClick: this.handleClick,
                index,
                itemElement,
                messages,
                ...prefixAndType
              };

              return <NavOverflowMenu key={index} {...menuProps} />;
            } else {
              return;
            }
          } else {
            const navItemProps = {
              children: text,
              disabled,
              element: element || itemElement,
              index,
              maxWidth: maxWidth || maxItemWidth,
              onClick: !disabled
                ? composeEventHandlers(onClick, (event) => {
                    this.handleClick(event, index);
                  })
                : preventDefaultEventFn,
              selected: selected || index === selectedIndex,
              ...prefixAndType,
              ...restItem,
              ...restProps
            };

            return child ? (
              cloneElement(child, { key: index, ...navItemProps })
            ) : (
              <NavItem key={index} {...navItemProps} />
            );
          }
        }
      )
    );
  };

  handleClick = (event: AnchorEvent, selectedIndex: number) => {
    const { onChange } = this.props;
    event.persist();
    onChange && onChange(selectedIndex, event);
  };
}
