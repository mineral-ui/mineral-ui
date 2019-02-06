/* @flow */
import React from 'react';
import { PrimaryNav } from '../index';
import examples from '../../../website/app/demos/Navigation/PrimaryNav/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
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

function mountPrimaryNav(props = {}) {
  const primaryNavProps = {
    ...defaultProps,
    ...props
  };

  return mountInWrapper(<PrimaryNav {...primaryNavProps} />);
}

describe('PrimaryNav', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const wrapper = mountPrimaryNav();

    expect(wrapper.exists()).toEqual(true);
  });
});
