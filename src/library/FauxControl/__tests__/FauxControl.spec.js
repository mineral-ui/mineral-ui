/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import FauxControl from '../FauxControl';

// eslint-disable-next-line react/display-name
const Control = (props) => <input {...props} />;

function shallowFauxControl(props = {}) {
  const fauxControlProps = {
    control: Control,
    ...props
  };

  return shallow(<FauxControl {...fauxControlProps} />);
}

describe('FauxControl', () => {
  it('renders', () => {
    const textInput = shallowFauxControl();

    expect(textInput.exists()).toEqual(true);
  });
});
