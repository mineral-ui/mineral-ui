/* @flow */
import React from 'react';
import { palette } from 'mineral-ui-tokens';
import { createStyledComponent } from '../../../../library/styles';
import IconAssignment from 'mineral-ui-icons/IconAssignment';
import IconCheck from 'mineral-ui-icons/IconCheck';
import IconSlowMotionVideo from 'mineral-ui-icons/IconSlowMotionVideo';

const styles = {
  list: ({ theme }) => ({
    lineHeight: 2,
    paddingLeft: 0,
    margin: `0 0 ${theme.space_stack_xl}`,

    '& li': {
      display: 'inline-block',
      marginRight: theme.space_inline_xl,

      '@media(max-width: 45em)': {
        display: 'block'
      }
    }
  }),
  icon: {
    verticalAlign: 'text-top'
  }
};

const Available = createStyledComponent(IconCheck, styles.icon);
const InDevelopment = createStyledComponent(IconSlowMotionVideo, styles.icon);
const Planned = createStyledComponent(IconAssignment, styles.icon);
const List = createStyledComponent('ul', styles.list);

export default function Legend() {
  return (
    <List aria-hidden="true">
      <li>
        <Available color={palette.green_60} size="large" /> Available
      </li>
      <li>
        <InDevelopment color={palette.bronze_60} size="large" /> In Development
      </li>
      <li>
        <Planned color={palette.blue_60} size="large" /> Planned
      </li>
    </List>
  );
}
