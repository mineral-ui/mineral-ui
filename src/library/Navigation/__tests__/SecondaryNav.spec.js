/* @flow */
import React from 'react';
import { SecondaryNav, secondaryNavTheme } from '../';
import examples from '../../../website/app/demos/Navigation/SecondaryNav/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import { mountInWrapper } from '../../../../utils/enzymeUtils';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

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

function mountSecondaryNav(props = {}) {
  const secondaryNavProps = {
    ...defaultProps,
    ...props
  };

  return mountInWrapper(<SecondaryNav {...secondaryNavProps} />);
}

describe('SecondaryNav', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const wrapper = mountSecondaryNav();

    expect(wrapper.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <SecondaryNav {...defaultProps} />,
      getProcessedComponentThemeKeys(secondaryNavTheme).filter(
        (key) => key.indexOf('tabs') === -1
      )
    );
    testThemeOverrides(
      <SecondaryNav {...defaultProps} type="tabs" />,
      getProcessedComponentThemeKeys(secondaryNavTheme).filter(
        (key) => key.indexOf('pills') === -1
      )
    );
  });
});
