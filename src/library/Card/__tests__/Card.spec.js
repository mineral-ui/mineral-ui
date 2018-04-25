/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';
import examples from '../../../website/app/demos/Card/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowCard(props, children) {
  return shallow(<Card {...props}>{children}</Card>);
}

describe('Card', () => {
  testDemoExamples(examples);

  let card;
  it('renders', () => {
    card = shallowCard({}, 'Children');

    expect(card.exists()).toEqual(true);
  });

  describe('onClick', () => {
    beforeEach(() => {
      card = shallowCard({ onClick: jest.fn() }, 'Click me');
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
