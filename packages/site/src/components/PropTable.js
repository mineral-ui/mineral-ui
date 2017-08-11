/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { createStyledComponent } from '@mineral-ui/component-utils';
import { Table, Cell, ColumnHeader, TableRow } from './Table';

const styles = {
  codeValue: ({ theme }) => ({
    fontFamily: theme.fontFamily_monospace
  }),
  propP: {
    margin: 0
  },
  propName: ({ theme }) => ({
    fontWeight: theme.fontWeight_semiBold
  }),
  propRequired: ({ theme }) => ({
    backgroundColor: theme.backgroundColor_danger,
    borderRadius: theme.borderRadius_1,
    color: theme.color_white,
    display: 'inline-block',
    fontFamily: theme.fontFamily_monospace,
    padding: `${theme.spacing_half} ${theme.spacing_single}`
  }),
  propType: ({ theme }) => ({
    color: theme.color_theme_90,
    fontFamily: theme.fontFamily_monospace
  }),
  propValue: ({ theme }) => ({
    border: `1px solid ${theme.borderColor}`,
    height: '100%',
    resize: 'vertical',
    width: '100%'
  }),
  root: ({ theme }) => ({
    margin: `${theme.spacing_quad} 0 0 0`
  })
};

const CodeValue = createStyledComponent('span', styles.codeValue);
const PropName = createStyledComponent('span', styles.propName);
const PropP = createStyledComponent('p', styles.propP);
const PropRequired = createStyledComponent('span', styles.propRequired);
const PropType = createStyledComponent('span', styles.propType);
const Root = createStyledComponent('div', styles.root);

function DefaultValue({
  defaultValue,
  required
}: {
  defaultValue?: any,
  required?: boolean
}) {
  return required
    ? <PropRequired>required</PropRequired>
    : <CodeValue>
        {defaultValue}
      </CodeValue>;
}

function getDefaultValue(propDescription: Object): any {
  const { defaultValue: { value } = {} } = propDescription;
  return value;
}

function getFlowType(propDescription: Object): string {
  const { flowType } = propDescription;
  const type = (flowType && flowType.name) || 'unknown';
  if (type === 'signature') {
    return flowType.raw;
  } else if (type === 'union') {
    return flowType.raw.split(' | ').join(', ');
  }

  return type;
}

function getPropTableRows(propDoc) {
  return Object.keys(propDoc).sort().map(name => {
    const propDescription = propDoc[name];

    return (
      <PropTableRow
        key={name}
        defaultValue={getDefaultValue(propDescription)}
        description={propDescription.description}
        name={name}
        required={propDescription.required}
        type={getFlowType(propDescription)}
      />
    );
  });
}

type PropTableRowProps = {
  defaultValue?: any,
  description?: string,
  name: string,
  type: string,
  required?: boolean
};

function PropTableRow({
  defaultValue,
  description,
  name,
  required,
  type
}: PropTableRowProps) {
  return (
    <TableRow>
      <Cell>
        <PropName>
          {name}
        </PropName>
      </Cell>
      <Cell>
        <PropType>
          {type}
        </PropType>
      </Cell>
      <Cell>
        <DefaultValue defaultValue={defaultValue} required={required} />
      </Cell>
      <Cell>
        <PropP>
          {description}
        </PropP>
      </Cell>
    </TableRow>
  );
}

type Props = {
  propDoc: Object
};

export default function PropTable({ propDoc = {} }: Props) {
  return (
    <Root>
      <Table>
        <thead>
          <tr>
            <ColumnHeader key="prop" width={10}>
              Name
            </ColumnHeader>
            <ColumnHeader key="type" width={15}>
              Type
            </ColumnHeader>
            <ColumnHeader key="default" width={10}>
              Default
            </ColumnHeader>
            <ColumnHeader key="description">Description</ColumnHeader>
          </tr>
        </thead>
        <tbody>
          {getPropTableRows(propDoc)}
        </tbody>
      </Table>
    </Root>
  );
}
