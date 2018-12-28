/* @flow */
import React, { Children, cloneElement, Component } from 'react';
import { canUseDOM } from 'exenv';
import { withTheme } from '../themes';
import { generateId } from '../utils';
import TabList from './TabList';
import TabPanel from './TabPanel';
import { TabsRoot as Root } from './styled';
import { ALIGN, POSITION } from './constants';

import { tabsPropTypes } from './propTypes';
import type { TabsDefaultProps, TabsProps, TabsState } from './types';

export class Tabs extends Component<TabsProps, TabsState> {
  static displayName = 'Tabs';

  static defaultProps: TabsDefaultProps = {
    align: ALIGN.start,
    maxTabWidth: '8.5em',
    position: POSITION.top
  };

  static propTypes = tabsPropTypes;

  state = {
    selectedTabIndex: this.props.defaultSelectedTabIndex || 0
  };

  disabledTabIndexes: Set<number> = new Set();

  id: string = this.props.id || `tabs-${generateId()}`;

  lastIndex: number;

  root: ?HTMLElement;

  vertical: boolean =
    this.props.position === POSITION.start ||
    this.props.position === POSITION.end;

  render() {
    const {
      align,
      children,
      label,
      height,
      maxTabWidth,
      position,
      ...restProps
    } = this.props;
    const selectedTabIndex = this.getControllableValue('selectedTabIndex');

    let ids = [];
    let tabPanelProps;
    let tabItems = [];

    Children.forEach(children, (tab, index) => {
      const { children, disabled, icon, id, maxWidth, title } = tab.props;
      if (id && ids.indexOf(id) === -1) {
        ids.push(id);
      } else if (id) {
        throw new Error(`[mineral-ui/Tabs] Tab id ${id} is not unique`);
      }
      const panelId = this.getPanelId(index);
      const selected = index === selectedTabIndex;
      const tabId = id || this.getTabId(index);
      const tabProps = {
        children: title,
        disabled,
        icon,
        id: tabId,
        index,
        key: index,
        maxWidth:
          !this.vertical && align === ALIGN.justify
            ? undefined
            : maxWidth || maxTabWidth,
        onClick: !disabled
          ? this.handleClick
          : (event) => {
              event.preventDefault();
            },
        onKeyDown: this.handleKeyDown,
        panelId,
        position,
        selected
      };
      tabItems.push(cloneElement(tab, tabProps));

      if (selected) {
        tabPanelProps = {
          children,
          id: panelId,
          position,
          tabId
        };
      }

      if (disabled) {
        this.disabledTabIndexes.add(index);
      } else {
        this.lastIndex = index;
      }
    });

    const rootProps = {
      ref: this.setRootRef,
      height,
      position,
      ...restProps,
      'aria-labelledby': undefined
    };

    const tabListProps = {
      align,
      'aria-label': label,
      'aria-labelledby': this.props['aria-labelledby'],
      height,
      onIncrement: this.handleIncrement,
      position,
      role: 'tablist',
      vertical: this.vertical
    };

    return (
      <Root {...rootProps}>
        <TabList {...tabListProps}>{tabItems}</TabList>
        <TabPanel {...tabPanelProps} />
      </Root>
    );
  }

  getPanelId = (index: number) => {
    return `${this.id}-panel-${index}`;
  };

  getTabId = (index: number) => {
    return `${this.id}-tab-${index}`;
  };

  setRootRef = (node: ?HTMLElement) => {
    this.root = node;
  };

  handleClick = (event: SyntheticEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    event.persist();
    const { currentTarget: target } = event;
    const selectedTabIndex = parseInt(target.getAttribute('data-index'));

    if (
      this.isControlled('selectedTabIndex') &&
      selectedTabIndex !== this.props.selectedTabIndex
    ) {
      this.changeActions(selectedTabIndex, event);
    } else {
      this.setSelectedTabIndex(selectedTabIndex, event);
    }
  };

  handleKeyDown = (event: SyntheticKeyboardEvent<HTMLAnchorElement>) => {
    event.persist();
    if (['ArrowLeft', 'ArrowRight'].indexOf(event.key) !== -1) {
      event.preventDefault();
      const rtl = this.props.theme.direction === 'rtl';
      const flippedDirections = {
        ArrowLeft: 'ArrowRight',
        ArrowRight: 'ArrowLeft'
      };
      const key =
        rtl && flippedDirections[event.key]
          ? flippedDirections[event.key]
          : event.key;
      this.handleIncrement(key, event);
    } else if (
      this.vertical &&
      ['ArrowDown', 'ArrowUp'].indexOf(event.key) !== -1
    ) {
      event.preventDefault();
      this.handleIncrement(event.key, event);
    }
  };

  handleIncrement = (direction: string, event: SyntheticEvent<*>) => {
    const selectedTabIndex = this.getControllableValue('selectedTabIndex');
    const nextIndex =
      direction === 'ArrowRight' || direction === 'ArrowDown'
        ? selectedTabIndex === this.lastIndex
          ? 0
          : this.getNonDisabledIndex(selectedTabIndex + 1)
        : selectedTabIndex === 0
        ? this.lastIndex
        : this.getNonDisabledIndex(selectedTabIndex - 1, { decrease: true });
    this.setSelectedTabIndex(nextIndex, event);
  };

  getNonDisabledIndex = (
    index: number,
    { decrease }: { decrease: ?boolean } = {}
  ) =>
    this.disabledTabIndexes.has(index)
      ? this.getNonDisabledIndex(decrease ? index - 1 : index + 1, { decrease })
      : index;

  setSelectedTabIndex = (
    selectedTabIndex: number,
    event: SyntheticEvent<HTMLAnchorElement>
  ) => {
    if (selectedTabIndex !== this.state.selectedTabIndex) {
      this.setState(
        {
          selectedTabIndex
        },
        () => {
          if (canUseDOM) {
            const nextTab =
              this.root &&
              this.root.querySelector(`[data-index="${selectedTabIndex}"]`);
            nextTab && nextTab.focus();
          }
          this.changeActions(selectedTabIndex, event);
        }
      );
    }
  };

  changeActions = (
    selectedTabIndex: number,
    event: SyntheticEvent<HTMLAnchorElement>
  ) => {
    const { onChange } = this.props;
    onChange && onChange(selectedTabIndex, event);
  };

  isControlled = (prop: string) => {
    return this.props.hasOwnProperty(prop);
  };

  getControllableValue = (key: string) => {
    return this.isControlled(key) ? this.props[key] : this.state[key];
  };
}

export default withTheme(Tabs);
