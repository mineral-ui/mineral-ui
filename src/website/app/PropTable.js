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
import { createStyledComponent } from '../../utils';
import IconInfo from '../../Icon/IconInfo';
import Button from '../../Button';
import Popover from '../../Popover';
import Markdown from './Markdown';
import { Table, TableCell, TableHeaderCell, TableRow } from './Table';

type Props = {
  propDoc: Object
};

type PropTableRowProps = {
  defaultValue?: any,
  description?: string,
  name: string,
  type: any,
  required?: boolean
};

const styles = {
  codeValue: ({ theme }) => ({
    fontFamily: theme.fontFamily_monospace
  }),
  propName: ({ theme }) => ({
    fontWeight: theme.fontWeight_semiBold
  }),
  propP: {
    '& p': {
      margin: 0
    }
  },
  propRequired: ({ theme }) => ({
    backgroundColor: theme.backgroundColor_danger,
    borderRadius: theme.borderRadius_1,
    color: theme.color_white,
    display: 'inline-block',
    fontFamily: theme.fontFamily_monospace,
    padding: `${parseFloat(theme.space_inset_sm) / 2}em ${theme.space_inset_sm}`
  }),
  propType: ({ theme }) => ({
    color: theme.color_theme_90,
    fontFamily: theme.fontFamily_monospace
  }),
  propTypeButton: ({ theme }) => ({
    fontFamily: 'inherit',
    height: 'auto',
    padding: 0,

    '& > span > span': {
      paddingLeft: theme.direction === 'ltr' ? 0 : null,
      paddingRight: theme.direction === 'rtl' ? 0 : null
    }
  }),
  propTypePopoverContent: ({ theme }) => ({
    fontFamily: theme.fontFamily_monospace,
    fontSize: theme.fontSize_ui,
    maxWidth: '80vw',
    overflowX: 'auto',
    whiteSpace: 'pre'
  }),
  propValue: ({ theme }) => ({
    border: `1px solid ${theme.borderColor}`,
    height: '100%',
    resize: 'vertical',
    width: '100%'
  }),
  root: ({ theme }) => ({
    margin: `${theme.space_stack_xl} 0 0`,
    overflowX: 'auto'
  })
};

const Root = createStyledComponent('div', styles.root);
const CodeValue = createStyledComponent('span', styles.codeValue);
const PropName = createStyledComponent('span', styles.propName);
const PropP = createStyledComponent(Markdown, styles.propP);
const PropRequired = createStyledComponent('span', styles.propRequired);
const PropType = createStyledComponent('span', styles.propType);
const PropTypeButton = createStyledComponent(Button, styles.propTypeButton);
const PropTypePopoverContent = createStyledComponent(
  'div',
  styles.propTypePopoverContent
);

function DefaultValue({
  defaultValue,
  required
}: {
  defaultValue?: any,
  required?: boolean
}) {
  return required ? (
    <PropRequired>required</PropRequired>
  ) : (
    <CodeValue>{defaultValue}</CodeValue>
  );
}

function getDefaultValue(propDescription: Object): any {
  const { defaultValue: { value } = {} } = propDescription;
  return value;
}

function getFlowType(propDescription: Object): any {
  const { flowType } = propDescription;
  let { name, raw, type } = flowType;
  let usePopover = raw && raw.length > 25;

  if (name === 'Array') {
    type = 'Array';
  } else if (name === 'signature' && type === 'function') {
    type = 'Function';
  } else if (name === 'signature' && type === 'object') {
    type = 'Object';
  } else if (name === 'union') {
    type = 'Union';
    usePopover = flowType.elements.length > 4 || raw.startsWith('|');
    raw = raw.startsWith('|')
      ? raw
          .split('\n| ')
          .join(',\n')
          .replace('| ', '')
      : raw.split(' | ').join(',\n');
  } else if (name === 'undefined') {
    return 'unknown';
  } else {
    raw = name;
  }

  return usePopover ? (
    <Popover content={<PropTypePopoverContent>{raw}</PropTypePopoverContent>}>
      <PropTypeButton minimal iconEnd={<IconInfo />}>
        {type}
      </PropTypeButton>
    </Popover>
  ) : (
    raw
  );
}

function getPropTableRows(propDoc) {
  return Object.keys(propDoc)
    .sort()
    .map(name => {
      const propDescription = propDoc[name];

      // Filter out private props
      if (propDescription.description.startsWith('@Private')) {
        return null;
      }

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

function PropTableRow({
  defaultValue,
  description,
  name,
  required,
  type
}: PropTableRowProps) {
  return (
    <TableRow>
      <TableCell>
        <PropName>{name}</PropName>
      </TableCell>
      <TableCell>
        <PropType>{type}</PropType>
      </TableCell>
      <TableCell>
        <DefaultValue defaultValue={defaultValue} required={required} />
      </TableCell>
      <TableCell>
        <PropP>{description}</PropP>
      </TableCell>
    </TableRow>
  );
}

export default function PropTable({ propDoc = {} }: Props) {
  return (
    <Root>
      <Table>
        <thead>
          <tr>
            <TableHeaderCell key="prop" width={10}>
              Name
            </TableHeaderCell>
            <TableHeaderCell key="type" width={15}>
              Type
            </TableHeaderCell>
            <TableHeaderCell key="default" width={10}>
              Default
            </TableHeaderCell>
            <TableHeaderCell key="description">Description</TableHeaderCell>
          </tr>
        </thead>
        <tbody>{getPropTableRows(propDoc)}</tbody>
      </Table>
    </Root>
  );
}
