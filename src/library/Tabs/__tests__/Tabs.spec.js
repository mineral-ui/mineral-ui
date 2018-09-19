/* @flow */
import React from 'react';
import Tabs from '../Tabs';
import Tab from '../Tab';
import TabPanel from '../TabPanel';
import examples from '../../../website/app/demos/Tabs/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import { mountInWrapper } from '../../../../utils/enzymeUtils';

const defaultProps = {
  label: 'Test'
};

function mountTabs(props = {}, tabProps = [{}, {}, {}]) {
  const tabsProps = {
    ...defaultProps,
    ...props
  };

  return mountInWrapper(
    <Tabs {...tabsProps}>
      <Tab title="Tab 0" {...tabProps[0]}>
        Tab 0 Content
      </Tab>
      <Tab title="Tab 1" {...tabProps[1]}>
        Tab 1 Content
      </Tab>
      <Tab title="Tab 2" {...tabProps[2]}>
        Tab 2 Content
      </Tab>
    </Tabs>
  );
}

const getTabAtIndex = (wrapper, index: number) => {
  return wrapper.find(Tab).at(index);
};

const simulateAtIndex = (wrapper, index: number, event: string, args = {}) => {
  const tab = getTabAtIndex(wrapper, index).find('a');
  tab.simulate(event, args);
};

const assertTabAtIndexIsSelected = (wrapper, index) => {
  expect(getTabAtIndex(wrapper, index).props().selected).toEqual(true);
};

describe('Tabs', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const wrapper = mountTabs();

    expect(wrapper.exists()).toEqual(true);
  });

  it('correct content displays', () => {
    const wrapper = mountTabs({ defaultSelectedTabIndex: 1 });
    const tabPanel = wrapper.find(TabPanel);

    expect(tabPanel.props().children).toMatchSnapshot();
  });

  it('calls onChange', () => {
    const onChange = jest.fn();
    const wrapper = mountTabs({ onChange });

    simulateAtIndex(wrapper, 1, 'click');

    expect(onChange).toHaveBeenCalled();
  });

  describe('tab navigation', () => {
    let wrapper;

    it('when clicked', () => {
      wrapper = mountTabs();

      simulateAtIndex(wrapper, 1, 'click');

      assertTabAtIndexIsSelected(wrapper, 1);
    });

    describe('when right arrow is pressed', () => {
      beforeEach(() => {
        wrapper = mountTabs();
      });

      it('selects next tab', () => {
        simulateAtIndex(wrapper, 1, 'keydown', { key: 'ArrowRight' });

        assertTabAtIndexIsSelected(wrapper, 1);
      });

      it('selects first tab when end of tabs is reached', () => {
        [0, 1, 2].forEach((index) =>
          simulateAtIndex(wrapper, index, 'keydown', {
            key: 'ArrowRight'
          })
        );

        assertTabAtIndexIsSelected(wrapper, 0);
      });
    });

    describe('when down arrow is pressed', () => {
      beforeEach(() => {
        wrapper = mountTabs({ position: 'start' });
      });

      it('selects next tab', () => {
        simulateAtIndex(wrapper, 0, 'keydown', { key: 'ArrowDown' });

        assertTabAtIndexIsSelected(wrapper, 1);
      });

      it('selects first tab when end of tabs is reached', () => {
        [0, 1, 2].forEach((index) =>
          simulateAtIndex(wrapper, index, 'keydown', { key: 'ArrowDown' })
        );

        assertTabAtIndexIsSelected(wrapper, 0);
      });
    });

    describe('when left arrow is pressed', () => {
      beforeEach(() => {
        wrapper = mountTabs({ defaultSelectedTabIndex: 2 });
      });

      it('selects previous tab', () => {
        simulateAtIndex(wrapper, 2, 'keydown', { key: 'ArrowLeft' });

        assertTabAtIndexIsSelected(wrapper, 1);
      });

      it('selects last tab when beginning of tabs is reached', () => {
        [0, 1, 2].forEach((index) =>
          simulateAtIndex(wrapper, index, 'keydown', { key: 'ArrowLeft' })
        );

        assertTabAtIndexIsSelected(wrapper, 2);
      });
    });

    describe('when up arrow is pressed', () => {
      beforeEach(() => {
        wrapper = mountTabs({
          defaultSelectedTabIndex: 2,
          position: 'start'
        });
      });

      it('selects previous tab', () => {
        simulateAtIndex(wrapper, 2, 'keydown', { key: 'ArrowUp' });

        assertTabAtIndexIsSelected(wrapper, 1);
      });

      it('selects last tab when beginning of tabs is reached', () => {
        [0, 1, 2].forEach((index) =>
          simulateAtIndex(wrapper, index, 'keydown', { key: 'ArrowUp' })
        );

        assertTabAtIndexIsSelected(wrapper, 2);
      });
    });

    it('arrow keys skip disabled tab', () => {
      wrapper = mountTabs({}, [{}, { disabled: true }, {}]);

      simulateAtIndex(wrapper, 0, 'keydown', { key: 'ArrowRight' });

      assertTabAtIndexIsSelected(wrapper, 2);
    });
  });
});
