/* @flow */
import React from 'react';
import HorizontalNavigation from '../HorizontalNavigation';
import NavLink from '../NavLink';
import examples from '../../../website/app/demos/Navigation/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import { mountInWrapper } from '../../../../utils/enzymeUtils';

const defaultProps = {
  label: 'Test'
};

function mountHorizontalNavigation(props = {}, navLinkProps = [{}, {}, {}]) {
  const horizontalNavigationProps = {
    ...defaultProps,
    ...props
  };

  return mountInWrapper(
    <HorizontalNavigation {...horizontalNavigationProps}>
      <NavLink title="NavLink 0" {...navLinkProps[0]}>
        NavLink 0 Content
      </NavLink>
      <NavLink title="NavLink 1" {...navLinkProps[1]}>
        NavLink 1 Content
      </NavLink>
      <NavLink title="NavLink 2" {...navLinkProps[2]}>
        NavLink 2 Content
      </NavLink>
    </HorizontalNavigation>
  );
}

const getNavLinkAtIndex = (wrapper, index: number) => {
  return wrapper.find(NavLink).at(index);
};

const simulateAtIndex = (wrapper, index: number, event: string, args = {}) => {
  const navLink = getNavLinkAtIndex(wrapper, index).find('a');
  navLink.simulate(event, args);
};

const assertNavLinkAtIndexIsSelected = (wrapper, index) => {
  expect(getNavLinkAtIndex(wrapper, index).props().selected).toEqual(true);
};

describe('HorizontalNavigation', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const wrapper = mountHorizontalNavigation();

    expect(wrapper.exists()).toEqual(true);
  });

  it('calls onChange', () => {
    const onChange = jest.fn();
    const wrapper = mountHorizontalNavigation({ onChange });

    simulateAtIndex(wrapper, 1, 'click');

    expect(onChange).toHaveBeenCalled();
  });

  describe('navLink navigation', () => {
    let wrapper;

    it('when clicked', () => {
      wrapper = mountHorizontalNavigation();

      simulateAtIndex(wrapper, 1, 'click');

      assertNavLinkAtIndexIsSelected(wrapper, 1);
    });

    describe('when right arrow is pressed', () => {
      beforeEach(() => {
        wrapper = mountHorizontalNavigation();
      });

      it('selects next navLink', () => {
        simulateAtIndex(wrapper, 1, 'keydown', { key: 'ArrowRight' });

        assertNavLinkAtIndexIsSelected(wrapper, 1);
      });

      it('selects first navLink when end of horizontalNavigation is reached', () => {
        [0, 1, 2].forEach((index) =>
          simulateAtIndex(wrapper, index, 'keydown', {
            key: 'ArrowRight'
          })
        );

        assertNavLinkAtIndexIsSelected(wrapper, 0);
      });
    });

    describe('when down arrow is pressed', () => {
      beforeEach(() => {
        wrapper = mountHorizontalNavigation({ position: 'start' });
      });

      it('selects next navLink', () => {
        simulateAtIndex(wrapper, 0, 'keydown', { key: 'ArrowDown' });

        assertNavLinkAtIndexIsSelected(wrapper, 1);
      });

      it('selects first navLink when end of horizontalNavigation is reached', () => {
        [0, 1, 2].forEach((index) =>
          simulateAtIndex(wrapper, index, 'keydown', { key: 'ArrowDown' })
        );

        assertNavLinkAtIndexIsSelected(wrapper, 0);
      });
    });

    describe('when left arrow is pressed', () => {
      beforeEach(() => {
        wrapper = mountHorizontalNavigation({ defaultSelectedNavLinkIndex: 2 });
      });

      it('selects previous navLink', () => {
        simulateAtIndex(wrapper, 2, 'keydown', { key: 'ArrowLeft' });

        assertNavLinkAtIndexIsSelected(wrapper, 1);
      });

      it('selects last navLink when beginning of horizontalNavigation is reached', () => {
        [0, 1, 2].forEach((index) =>
          simulateAtIndex(wrapper, index, 'keydown', { key: 'ArrowLeft' })
        );

        assertNavLinkAtIndexIsSelected(wrapper, 2);
      });
    });

    describe('when up arrow is pressed', () => {
      beforeEach(() => {
        wrapper = mountHorizontalNavigation({
          defaultSelectedNavLinkIndex: 2,
          position: 'start'
        });
      });

      it('selects previous navLink', () => {
        simulateAtIndex(wrapper, 2, 'keydown', { key: 'ArrowUp' });

        assertNavLinkAtIndexIsSelected(wrapper, 1);
      });

      it('selects last navLink when beginning of horizontalNavigation is reached', () => {
        [0, 1, 2].forEach((index) =>
          simulateAtIndex(wrapper, index, 'keydown', { key: 'ArrowUp' })
        );

        assertNavLinkAtIndexIsSelected(wrapper, 2);
      });
    });

    it('arrow keys skip disabled navLink', () => {
      wrapper = mountHorizontalNavigation({}, [{}, { disabled: true }, {}]);

      simulateAtIndex(wrapper, 0, 'keydown', { key: 'ArrowRight' });

      assertNavLinkAtIndexIsSelected(wrapper, 2);
    });
  });
});
