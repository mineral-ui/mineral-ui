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

const styles = {
  codeValue: (props, theme) => ({
    fontFamily: theme.fontFamily_monospace,
    fontSize: '1.2em'
  }),
  heading: (props, theme) => ({
    margin: `0 0 ${theme.measurement_c}`
  }),
  propCell: (props, theme) => ({
    padding: `${theme.measurement_c} 0`,
    verticalAlign: 'top'
  }),
  propColumnHeader: (props, theme) => ({
    borderBottom: `3px solid ${theme.color_gray_60}`,
    color: theme.color_gray_60,
    fontWeight: theme.fontWeight_bold,
    paddingBottom: theme.measurement_b,
    textAlign: 'left',
    width: props.width && `${props.width}rem`
  }),
  propP: {
    margin: 0
  },
  propName: (props, theme) => ({
    fontWeight: theme.fontWeight_semiBold
  }),
  propRequired: (props, theme) => ({
    backgroundColor: theme.backgroundColor_danger,
    borderRadius: '3px',
    color: theme.color_gray,
    display: 'inline-block',
    fontFamily: theme.fontFamily_monospace,
    padding: theme.measurement_a
  }),
  tr: (props, theme) => ({
    borderBottom: `1px solid ${theme.color_gray}`
  }),
  propTable: () => ({
    borderCollapse: 'collapse',
    borderSpacing: 0,
    fontSize: '0.9rem',
    width: '100%'
  }),
  propType: (props, theme) => ({
    color: theme.color_theme_90,
    fontFamily: theme.fontFamily_monospace,
    fontSize: '1.2em'
  }),
  propValue: (props, theme) => ({
    border: `1px solid ${theme.color_gray}`,
    height: '100%',
    resize: 'vertical',
    width: '100%'
  }),
  root: (props, theme) => ({
    fontFamily: theme.fontFamily_system,
    margin: `${theme.measurement_d} 0 0 0`
  })
};

const CodeValue = createStyledComponent('span', styles.codeValue);
const PropCell = createStyledComponent('td', styles.propCell);
const PropColumnHeader = createStyledComponent('th', styles.propColumnHeader);
const PropName = createStyledComponent('span', styles.propName);
const PropP = createStyledComponent('p', styles.propP);
const PropRequired = createStyledComponent('span', styles.propRequired);
const PropType = createStyledComponent('span', styles.propType);
const Table = createStyledComponent('table', styles.propTable);
const TR = createStyledComponent('tr', styles.tr);
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
    : <CodeValue>{defaultValue}</CodeValue>;
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
    <TR>
      <PropCell><PropName>{name}</PropName></PropCell>
      <PropCell><PropType>{type}</PropType></PropCell>
      <PropCell>
        <DefaultValue defaultValue={defaultValue} required={required} />
      </PropCell>
      <PropCell>
        <PropP>{description}</PropP>
      </PropCell>
    </TR>
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
            <PropColumnHeader key="prop" width={10}>
              Name
            </PropColumnHeader>
            <PropColumnHeader key="type" width={15}>Type</PropColumnHeader>
            <PropColumnHeader key="default" width={10}>
              Default
            </PropColumnHeader>
            <PropColumnHeader key="description">Description</PropColumnHeader>
          </tr>
        </thead>
        <tbody>
          {getPropTableRows(propDoc)}
        </tbody>
      </Table>
    </Root>
  );
}
