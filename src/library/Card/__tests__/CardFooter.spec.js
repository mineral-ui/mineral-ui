/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mountInThemeProvider } from '../../../../utils/enzymeUtils';
import Button from '../../Button';
import { CardFooter } from '../../Card';

function shallowCardFooter(props = {}) {
  const cardFooterProps = {
    children: 'Children',
    title: 'Title',
    ...props
  };
  return shallow(<CardFooter {...cardFooterProps} />);
}

function mountCardFooter(props = {}) {
  const cardFooterProps = {
    children: <div data-test-id="children">Children</div>,
    expandable: true,
    title: 'Title',
    ...props
  };

  return mountInThemeProvider(<CardFooter {...cardFooterProps} />);
}

describe('CardFooter', () => {
  it('renders', () => {
    const cardFooter = shallowCardFooter();

    expect(cardFooter.exists()).toEqual(true);
  });

  describe('opens', () => {
    let button, cardFooter, themeProvider;

    beforeEach(() => {
      [themeProvider, cardFooter] = mountCardFooter({ onOpen: jest.fn() });
      button = cardFooter.find(Button);
    });

    it('when trigger is clicked', () => {
      button.simulate('click');
      const content = themeProvider.find('[data-test-id="children"]');

      expect(content.exists()).toEqual(true);
    });

    it('calls onOpen', () => {
      button.simulate('click');

      expect(cardFooter.props().onOpen).toHaveBeenCalled();
    });
  });

  describe('closes', () => {
    let button, cardFooter, themeProvider;

    beforeEach(() => {
      [themeProvider, cardFooter] = mountCardFooter({
        onClose: jest.fn(),
        defaultIsOpen: true
      });
      button = cardFooter.find(Button);
    });

    it('when trigger is clicked', () => {
      button.simulate('click');
      const content = themeProvider.find('[data-test-id="children"]');

      expect(content.exists()).toEqual(false);
    });

    it('calls onClose', () => {
      button.simulate('click');

      expect(cardFooter.props().onClose).toHaveBeenCalled();
    });
  });
});
