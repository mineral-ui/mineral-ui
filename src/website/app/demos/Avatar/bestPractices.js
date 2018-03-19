/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../library/styles';
import Avatar from '../../../../library/Avatar';
import IconCloud from 'mineral-ui-icons/IconCloud';
import DemoLayout from './components/DemoLayout';

const Name = createStyledComponent('div', ({ theme }) => ({
  alignItems: 'center',
  display: 'flex',

  '& > :first-child': {
    marginRight: theme.space_inline_sm
  }
}));

export default [
  {
    type: 'do',
    description:
      'Provide an `alt` attribute when using Avatar to display a standalone image.',
    example: (
      <Avatar>
        <img src="/images/avatar.svg" alt="Allison Smith" />
      </Avatar>
    )
  },
  {
    type: 'do',
    description:
      'Provide a `title` attribute when displaying a standalone icon.',
    example: (
      <DemoLayout>
        <Avatar>
          <IconCloud title="cloud" />
        </Avatar>
      </DemoLayout>
    )
  },
  {
    type: 'dont',
    description: `To prevent duplicate information, hide Avatar from assistive
technologies with \`aria-hidden="true"\` when the associated text is
sufficiently descriptive.`,
    example: (
      <Name>
        <Avatar ariaHidden="true">Allison</Avatar> Allison
      </Name>
    )
  }
];
