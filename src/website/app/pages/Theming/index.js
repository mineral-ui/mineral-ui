/* @flow */
import React from 'react';
import colors from '../../../../library/colors';
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm
} from '../../../../library/styles';
import createColorRamp from '../../../../library/themes/createColorRamp';
import { defaultBaseColor } from '../../../../library/themes/createTheme';
import tokens from '../../../../library/themes/tokens';
import Button from '../../SiteButton';
import Heading from '../../SiteHeading';
import Markdown from '../../Markdown';
import VariableTable from '../../VariableTable';
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

const REGEX_IS_COLOR = /color|fill/i;

const getColor = (theme, variable) =>
  REGEX_IS_COLOR.test(variable) && theme[variable];

const getValue = (theme, variable) => theme[variable];

const themeRamp = createColorRamp(defaultBaseColor, 'color_theme', colors);

export default function Theming(props: Props) {
  return (
    <div {...props}>
      <Markdown scope={{ Button }}>{content}</Markdown>
      {tokens.map((token, index) => {
        const title = Object.keys(token)[0];
        const values = Object.values(token)[0];
        const returnedValues =
          typeof values === 'function' ? values(themeRamp) : values;
        return (
          <div key={title}>
            {index > 0 && <Title id={title}>{title}</Title>}
            <Table
              themeToDisplay={returnedValues}
              value={getValue}
              valueColor={getColor}
            />
          </div>
        );
      })}
    </div>
  );
}
