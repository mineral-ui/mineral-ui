/* @flow */
import React from 'react';
import { MenuItem } from '../../Menu';
import Navigation from '../Navigation';
import NavItem from '../NavItem';
import { mountInWrapper } from '../../../../utils/enzymeUtils';

const defaultProps = {
  items: [
    {
      href: 'page-0',
      text: 'Item 0'
    },
    {
      href: 'page-1',
      text: 'Item 1'
    },
    {
      href: 'page-2',
      text: 'Item 2'
    }
  ]
};

function mountNavigation(props = {}) {
  const navigationProps = {
    ...defaultProps,
    ...props
  };

  return mountInWrapper(<Navigation {...navigationProps} />);
}

const getNavItemAtIndex = (wrapper, index: number) => {
  return wrapper.find(NavItem).at(index);
};

const findMenuItems = (wrapper) =>
  wrapper
    .find(MenuItem)
    .filterWhere((menuItem) => menuItem.props().id !== undefined);

const simulateAtIndex = (wrapper, index: number, event: string, args = {}) => {
  const navLink = getNavItemAtIndex(wrapper, index).find('a');
  navLink.simulate(event, args);
};

const simulateAtOverflowedIndex = (
  wrapper,
  index: number,
  overflowAtIndex: number,
  event: string,
  args = {}
) => {
  wrapper.find('button').simulate('click');

  const menuItem = findMenuItems(wrapper).at(index - overflowAtIndex);
  menuItem.simulate(event, args);
};

describe('Navigation', () => {
  it('renders', () => {
    const wrapper = mountNavigation();

    expect(wrapper.exists()).toEqual(true);
  });

  describe('Event handlers', () => {
    let items, onChange, onClick, overflowAtIndex, wrapper;
    beforeEach(() => {
      onChange = jest.fn();
      onClick = jest.fn();

      items = [
        {
          href: 'page-0',
          onClick,
          text: 'Item 0'
        },
        {
          disabled: true,
          href: 'page-1',
          onClick,
          text: 'Item 1'
        },
        {
          href: 'page-2',
          onClick,
          text: 'Item 2'
        },
        {
          disabled: true,
          href: 'page-3',
          onClick,
          text: 'Item 3'
        }
      ];

      overflowAtIndex = 2;

      wrapper = mountNavigation({ items, onChange, overflowAtIndex });
    });

    it("calls onChange and item's onClick", () => {
      simulateAtIndex(wrapper, 0, 'click');

      expect(onChange).toHaveBeenCalled();
      expect(onClick).toHaveBeenCalled();
    });

    it("does not call onChange or item's onClick for disabled items", () => {
      simulateAtIndex(wrapper, 1, 'click');

      expect(onChange).not.toHaveBeenCalled();
      expect(onClick).not.toHaveBeenCalled();
    });

    describe('Overflow', () => {
      it("calls onChange and item's onClick", () => {
        simulateAtOverflowedIndex(wrapper, 2, overflowAtIndex, 'click');

        expect(onChange).toHaveBeenCalled();
        expect(onClick).toHaveBeenCalled();
      });

      it("does not call onChange or item's onClick for disabled items", () => {
        simulateAtOverflowedIndex(wrapper, 3, overflowAtIndex, 'click');

        expect(onChange).not.toHaveBeenCalled();
        expect(onClick).not.toHaveBeenCalled();
      });
    });

    afterEach(() => {
      onChange.mockReset();
      onClick.mockReset();
    });
  });
});
