/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mountInWrapper } from '../../../../utils/enzymeUtils';
import Button from '../../Button';
import Dialog, { componentTheme } from '../Dialog';
import examples from '../../../website/app/demos/Dialog/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

jest.mock('react-transition-group/Transition', () => {
  return jest.fn(({ children, in: show, onEntered }) => {
    show && onEntered();
    return show ? children('entered') : null;
  });
});

function shallowDialog(props = {}) {
  const dialogProps = {
    title: 'Test',
    ...props
  };

  return shallow(<Dialog {...dialogProps} />);
}

describe('Dialog', () => {
  testDemoExamples(examples, {
    exclude: ['modeless', 'composition', 'stacking']
  });

  it('renders', () => {
    const dialog = shallowDialog();

    expect(dialog.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    const props = {
      id: 'test',
      isOpen: true,
      title: 'Test',
      usePortal: false
    };
    testThemeOverrides(
      <Dialog {...props} />,
      getProcessedComponentThemeKeys(componentTheme, {
        excludeKeys: ['Dialog_transitionDuration', 'DialogCloseButton_margin']
      }).filter((key) => {
        const parts = key.split('_');
        const lastPart = parts[parts.length - 1];

        return lastPart !== 'small' && lastPart !== 'large';
      })
    );
    testThemeOverrides(<Dialog {...props} showCloseButton title="title" />, [
      'DialogCloseButton_margin'
    ]);
  });

  describe('opens', () => {
    let wrapper;
    let onOpen = jest.fn();

    beforeEach(() => {
      wrapper = mountInWrapper(
        <Dialog title="test" usePortal={false} onOpen={onOpen} />
      );

      wrapper.setProps({ isOpen: true });
    });

    afterEach(() => {
      onOpen.mockReset();
    });

    it('displays dialog content', () => {
      const content = wrapper.find('DialogContent');

      expect(content.exists()).toEqual(true);
    });

    it('focuses dialog root', () => {
      const root = wrapper.find('[role="dialog"]').first();

      expect(root.getDOMNode()).toEqual(document.activeElement);
    });

    it('calls onOpen callback', () => {
      const dialog = wrapper.find(Dialog);

      expect(dialog.props().onOpen).toHaveBeenCalled();
    });
  });

  describe('closes', () => {
    let trigger, wrapper;
    let onClose = jest.fn();

    beforeEach(() => {
      trigger = global.document.createElement('button');
      global.document.body.appendChild(trigger);
      trigger.focus();

      wrapper = mountInWrapper(
        <Dialog title="test" usePortal={false} onClose={onClose} />
      );

      wrapper.setProps({ isOpen: true });
    });

    afterEach(() => {
      onClose.mockReset();
      global.document.body.removeChild(trigger);
    });

    it('when pressing Escape', () => {
      const event = new KeyboardEvent('keydown', {
        key: 'Escape',
        view: window,
        bubbles: true,
        cancelable: true
      });

      document.body && document.body.dispatchEvent(event);
      wrapper.update();

      const content = wrapper.find('DialogContent');

      expect(content.exists()).toEqual(false);
    });

    it('restores focus to trigger', () => {
      wrapper.setProps({ isOpen: false });

      expect(trigger).toEqual(document.activeElement);
    });

    xit('calls onClose callback', () => {
      const dialog = wrapper.find(Dialog);

      wrapper.setProps({ isOpen: false });
      wrapper.update();

      expect(dialog.props().onClose).toHaveBeenCalled();
    });
  });

  describe('focus trap', () => {
    let actions, wrapper;

    it('traps focus within', () => {
      const dialogProps = {
        actions: [{ text: 'Cancel' }, { text: 'Action' }],
        isOpen: true,
        title: 'test',
        usePortal: false
      };
      wrapper = mountInWrapper(<Dialog {...dialogProps} />);
      actions = wrapper.find(Dialog).find(Button);

      actions
        .at(1)
        .getDOMNode()
        .focus();

      const event = new KeyboardEvent('keydown', {
        key: 'Tab',
        view: window,
        bubbles: true,
        cancelable: true
      });

      document.body && document.body.dispatchEvent(event);
      wrapper.update();

      expect(actions.at(0).getDOMNode()).toEqual(document.activeElement);
    });

    xit('does not trap focus when modeless', () => {
      const dialogProps = {
        actions: [{ text: 'Cancel' }, { text: 'Action' }],
        isOpen: true,
        modeless: true,
        title: 'test',
        usePortal: false
      };
      wrapper = mountInWrapper(<Dialog {...dialogProps} />);
      actions = wrapper.find(Dialog).find(Button);

      actions
        .at(1)
        .getDOMNode()
        .focus();

      const event = new KeyboardEvent('keydown', {
        key: 'Tab',
        view: window,
        bubbles: true,
        cancelable: true
      });

      document.body && document.body.dispatchEvent(event);
      wrapper.update();

      expect(actions.at(0).getDOMNode()).not.toEqual(document.activeElement);
    });
  });
});
