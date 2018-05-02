/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';
import examples from '../../../website/app/demos/Card/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowCard(props = {}) {
  const cardProps = {
    children: 'Click me',
    ...props
  };
  return shallow(<Card {...cardProps} />);
}

describe('Card', () => {
  testDemoExamples(examples);

  let card;
  it('renders', () => {
    card = shallowCard();

    expect(card.exists()).toEqual(true);
  });

  describe('onClick', () => {
    beforeEach(() => {
      card = shallowCard({ onClick: jest.fn() });
    });

    it('calls onClick when clicked', () => {
      card.simulate('click');
      expect(card.props().onClick).toHaveBeenCalled();
    });

    it('calls onClick when pressing enter', () => {
      card.simulate('keydown', {
        key: 'Enter',
        preventDefault: () => {}
      });
      expect(card.props().onClick).toHaveBeenCalled();
    });

    it('calls onClick when pressing space', () => {
      card.simulate('keydown', {
        key: ' ',
        preventDefault: () => {}
      });
      expect(card.props().onClick).toHaveBeenCalled();
    });
  });
});
