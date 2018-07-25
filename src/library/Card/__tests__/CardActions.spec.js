/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import CardActions, { componentTheme } from '../../Card/CardActions';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

function shallowCardActions(props = {}) {
  const cardActionsProps = {
    children: 'children',
    ...props
  };
  return shallow(<CardActions {...cardActionsProps} />);
}

describe('CardActions', () => {
  it('renders', () => {
    const cardActions = shallowCardActions();

    expect(cardActions.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <CardActions>children</CardActions>,
      getProcessedComponentThemeKeys(componentTheme)
    );
  });
});
