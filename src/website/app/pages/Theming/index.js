/* @flow */
import React from 'react';
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm
} from '../../../../library/styles';
import Button from '../../SiteButton';
import Heading from '../../SiteHeading';
import Markdown from '../../Markdown';
import VariableTable from '../../VariableTable';
import groupedMineralTheme from './groupedMineralTheme';
import content from './theming.md';

type Props = {};

const styles = {
  table: {
    '& table': {
      tableLayout: 'fixed'
    }
  },
  title: ({ theme }) => ({
    margin: `0 0 ${getNormalizedValue(
      pxToEm(21 - 12), // to mid-baseline
      theme.SiteHeading_fontSize_3
    )}`,
    paddingTop: getNormalizedValue(
      pxToEm(68), // to baseline
      theme.SiteHeading_fontSize_3
    ),

    [theme.bp_moreSpacious]: {
      fontSize: theme.SiteHeading_fontSize_3_wide,
      margin: `0 0 ${getNormalizedValue(
        pxToEm(19 - 12), // to mid-baseline
        theme.SiteHeading_fontSize_3_wide
      )}`,
      paddingTop: getNormalizedValue(
        pxToEm(80), // to baseline
        theme.SiteHeading_fontSize_3_wide
      )
    }
  })
};

const Table = createStyledComponent(VariableTable, styles.table);
const Title = createStyledComponent(Heading, styles.title).withProps({
  anchors: true,
  level: 3
});

const REGEX_IS_COLOR = /^#/;

const getColor = (theme, variable) =>
  REGEX_IS_COLOR.test(theme[variable]) && theme[variable];

const getValue = (theme, variable) => theme[variable];

export default function Theming(props: Props) {
  return (
    <div {...props}>
      <Markdown scope={{ Button }}>{content}</Markdown>
      {groupedMineralTheme.map((group, index) => {
        const [title, values] = group;
        const themeGroup = typeof values === 'function' ? values() : values;
        return (
          <div key={title}>
            {index > 0 && <Title id={title}>{title}</Title>}
            <Table
              themeToDisplay={themeGroup}
              value={getValue}
              valueColor={getColor}
            />
          </div>
        );
      })}
    </div>
  );
}
