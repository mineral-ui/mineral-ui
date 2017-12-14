/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mountInThemeProvider } from '../../../utils/enzymeUtils';
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
