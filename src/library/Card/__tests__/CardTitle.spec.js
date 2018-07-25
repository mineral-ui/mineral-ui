/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import CardTitle, { componentTheme } from '../../Card/CardTitle';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

function shallowCardTitle(props = {}) {
  const cardTitleProps = {
    children: 'children',
    ...props
  };
  return shallow(<CardTitle {...cardTitleProps} />);
}

describe('CardTitle', () => {
  it('renders', () => {
    const cardTitle = shallowCardTitle();

    expect(cardTitle.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <CardTitle subtitle="subtitle" secondaryText="secondary">
        children
      </CardTitle>,
      getProcessedComponentThemeKeys(componentTheme, {
        excludeKeys: [
          'CardTitleAvatar_margin',
          'CardTitleAvatarSize',
          'CardTitleAvatarSize_large'
        ]
      })
    );
  });
});
