/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import CardTitle from '../CardTitle';
import examples from '../../../website/app/demos/Card/CardTitle/examples';
import { cardTitleTheme } from '../themes';
import testDemoExamples from '../../../../utils/testDemoExamples';
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
  testDemoExamples(examples);

  it('renders', () => {
    const cardTitle = shallowCardTitle();

    expect(cardTitle.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <CardTitle subtitle="subtitle" secondaryText="secondary">
        children
      </CardTitle>,
      getProcessedComponentThemeKeys(cardTitleTheme, {
        excludeKeys: [
          'CardTitleAvatar_margin',
          'CardTitleAvatarSize',
          'CardTitleAvatarSize_large'
        ]
      })
    );
  });
});
