/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Link from '../Link';
import examples from '../../../website/app/demos/Link/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowLink(props) {
  return shallow(<Link {...props} />);
}

describe('Link', () => {
  testDemoExamples(examples, { exclude: ['react-router'] });

  it('renders', () => {
    const link = shallowLink({
      href: 'http://example.com',
      children: 'Children'
    });

    expect(link.exists()).toEqual(true);
  });
});
