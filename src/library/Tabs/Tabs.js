/* @flow */
import React, { Children, cloneElement, Component } from 'react';
import { canUseDOM } from 'exenv';
import { createStyledComponent } from '../styles';
import { withTheme } from '../themes';
import { generateId } from '../utils';
import TabList from './TabList';
import TabPanel from './TabPanel';

type Props = {
  /**  Horizontal or vertical alignment of Tabs in the tab list */
  align?: 'start' | 'center' | 'end' | 'justify',
  /** @Private */
  'aria-labelledby'?: string,
  /** Content of Tabs; must be Tab components */
  children?: React$Node,
  /**
   * Index of the selected Tab; primarily for use with uncontrolled components
   */
  defaultSelectedTabIndex?: number,
  /** Id of Tabs */
  id?: string,
  /** Accessible label for Tabs */
  label: string,
  /** Height of Tabs */
  height?: number | string,
  /** Maximum width of each Tab */
  maxTabWidth?: number | string,
  /** Called when a Tab is selected */
  onChange?: (
    selectedTabIndex: number,
    event: SyntheticEvent<HTMLAnchorElement>
  ) => void,
  /** Position of the tab list in relation to the tab panel */
  position?: 'bottom' | 'end' | 'start' | 'top',
  /**
   * Index of the selected Tab; primarily for use with controlled components.
   * If this prop is specified, an `onChange` handler must also be specified.
   * See also: `defaultSelectedTabIndex`
   */
  selectedTabIndex?: number,
  /** @Private Theme */
  theme: Object
};

type State = {
  selectedTabIndex: number
};

type AnchorEvent = SyntheticEvent<HTMLAnchorElement>;

const Root = createStyledComponent(
  'div',
  ({ height, position }) => {
    const flexDirection = {
      bottom: 'column-reverse',
      end: 'row-reverse',
      start: 'row',
      top: 'column'
    };

    return {
      display: 'flex',
      flexDirection: flexDirection[position],
      height
    };
  },
  {
    displayName: 'Tabs',
    includeStyleReset: true
  }
);

/**
 * Tabs provide easy management for viewing related content in the same layout
 * region.
 */
class Tabs extends Component<Props, State> {
  static defaultProps = {
    align: 'start',
    maxTabWidth: '8.5em',
    position: 'top'
  };

  state = {
    selectedTabIndex: this.props.defaultSelectedTabIndex || 0
  };

  disabledTabIndexes: Set<number> = new Set();

  id: string = this.props.id || `tabs-${generateId()}`;

  lastIndex: number;

  root: ?HTMLElement;

  vertical: boolean =
    this.props.position === 'start' || this.props.position === 'end';

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
          !this.vertical && align === 'justify'
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
      innerRef: this.setRootRef,
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

  handleClick = (event: AnchorEvent) => {
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

  setSelectedTabIndex = (selectedTabIndex: number, event: AnchorEvent) => {
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

  changeActions = (selectedTabIndex: number, event: AnchorEvent) => {
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
