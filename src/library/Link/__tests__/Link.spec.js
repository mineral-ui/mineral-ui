/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Link from '../Link';
import examples from '../../../website/app/demos/Link/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowLink(props = {}) {
  const linkProps = {
    href: 'http://example.com',
    children: 'Children',
    ...props
  };
  return shallow(<Link {...linkProps} />);
}

describe('Link', () => {
  testDemoExamples(examples, { exclude: ['react-router'] });

  it('renders', () => {
    const link = shallowLink();

    expect(link.exists()).toEqual(true);
  });
});
