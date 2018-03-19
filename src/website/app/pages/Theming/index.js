/* @flow */
import React from 'react';
import { mineralTheme } from '../../../../library/themes';
import Button from '../../SiteButton';
import Markdown from '../../Markdown';
import VariableTable from '../../VariableTable';
import content from './theming.md';

type Props = {};

const REGEX_IS_COLOR = /color|fill/i;

const getColor = (theme, variable) =>
  REGEX_IS_COLOR.test(variable) && theme[variable];

const getValue = (theme, variable) => theme[variable];

export default function Theming(props: Props) {
  return (
    <div {...props}>
      <Markdown scope={{ Button }}>{content}</Markdown>
      <VariableTable
        theme={mineralTheme}
        value={getValue}
        valueColor={getColor}
      />
    </div>
  );
}
