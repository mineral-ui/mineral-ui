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
import Card from '../Card';
import examples from '../__demo__/examples';
import testDemoExamples from '../../../../utils/test/testDemoExamples';

function renderCard(props, children) {
  return shallow(<Card {...props}>{children}</Card>);
}

describe('Card', () => {
  let card;
  it('renders', () => {
    card = renderCard({}, 'Children');

    expect(card.exists()).toEqual(true);
  });

  describe('onClick', () => {
    beforeEach(() => {
      card = renderCard({ onClick: jest.fn() }, 'Click me');
    });

    it('calls onClick when clicked', () => {
      card.simulate('click');
      expect(card.props().onClick).toHaveBeenCalled();
    });

    it('calls onClick when pressing enter', () => {
      card.simulate('keypress', {
        key: 'Enter',
        preventDefault: () => {}
      });
      expect(card.props().onClick).toHaveBeenCalled();
    });

    it('calls onClick when pressing space', () => {
      card.simulate('keypress', {
        key: ' ',
        preventDefault: () => {}
      });
      expect(card.props().onClick).toHaveBeenCalled();
    });
  });

  testDemoExamples(examples);
});
