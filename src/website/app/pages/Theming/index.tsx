/* @flow */
import React, { Fragment } from 'react';
import Button from '../../SiteButton';
import Callout from '../../Callout';
import Link from '../../SiteLink';
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
      <Markdown scope={{ Button, Callout, Link }}>{content}</Markdown>
      {groupedMineralTheme.map((group) => {
        const [title, values] = group;
        return (
          <Fragment key={title}>
            <SubHeading id={title}>{title}</SubHeading>
            <VariableTable
              themeToDisplay={values}
              value={getValue}
              valueColor={getColor}
            />
          </Fragment>
        );
      })}
    </div>
  );
}
