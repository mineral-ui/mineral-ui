/* @flow */
import styled from '@emotion/styled';
import IconAssignment from 'mineral-ui-icons/IconAssignment';
import IconCheck from 'mineral-ui-icons/IconCheck';
import IconSlowMotionVideo from 'mineral-ui-icons/IconSlowMotionVideo';
import { palette } from 'mineral-ui-tokens';
import React from 'react';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

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

const Available = styled(IconCheck)(styles.icon);
const InDevelopment = styled(IconSlowMotionVideo)(styles.icon);
const Planned = styled(IconAssignment)(styles.icon);
const List: StyledComponent<{ [key: string]: any }> = styled('ul')(styles.list);

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
