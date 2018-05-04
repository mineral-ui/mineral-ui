/* @flow */
import React, { Fragment } from 'react';
import Button from '../../SiteButton';
import Markdown from '../../Markdown';
import SubHeading from '../../SiteSubHeading';
import VariableTable from '../../VariableTable';
import { getColor, getValue } from '../Tokens';
import groupedMineralTheme from './groupedMineralTheme';
import content from './theming.md';

type Props = {};

export default function Theming(props: Props) {
  return (
    <div {...props}>
      <Markdown scope={{ Button }}>{content}</Markdown>
      {groupedMineralTheme.map((group) => {
        const [title, values] = group;
        const themeGroup = typeof values === 'function' ? values() : values;
        return (
          <Fragment key={title}>
            <SubHeading id={title}>{title}</SubHeading>
            <VariableTable
              themeToDisplay={themeGroup}
              value={getValue}
              valueColor={getColor}
            />
          </Fragment>
        );
      })}
    </div>
  );
}
