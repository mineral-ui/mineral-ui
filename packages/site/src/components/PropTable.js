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
    color: theme.color_text,
    fontSize: '1.2rem',
    fontFamily: theme.fontFamily_monospace
  }),
  heading: (props, theme) => ({
    margin: `0 0 ${theme.measurement_c}`,
    fontSize: theme.font_size_c
  }),
  propCell: (props, theme) => ({
    padding: `${theme.measurement_b} 0`
  }),
  propColumnHeader: (props, theme) => ({
    borderBottom: `3px solid ${theme.color_grayMedium}`,
    color: theme.color_grayMedium,
    fontWeight: 'bold',
    paddingBottom: theme.measurement_b,
    textAlign: 'left'
  }),
  propP: {
    margin: 0
  },
  propName: (props, theme) => ({
    fontFamily: theme.fontFamily_monospace,
    fontSize: '1.2rem'
  }),
  propRequired: (props, theme) => ({
    color: theme.color_gray,
    display: 'inline-block',
    backgroundColor: theme.backgroundColor_danger,
    borderRadius: '3px',
    fontFamily: theme.fontFamily_monospace,
    padding: theme.measurement_a
  }),
  tr: (props, theme) => ({
    borderBottom: `1px solid ${theme.color_gray}`
  }),
  propTable: {
    borderCollapse: 'collapse',
    borserSpacing: 0,
    width: '100%'
  },
  propType: (props, theme) => ({
    display: 'inline-block',
    backgroundColor: theme.color_gray,
    borderRadius: '3px',
    fontFamily: theme.fontFamily_monospace,
    padding: theme.measurement_a
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
const Table = createStyledComponent('table', styles.propTable);
const PropColumnHeader = createStyledComponent('th', styles.propColumnHeader);
const PropCell = createStyledComponent('td', styles.propCell);
const PropName = createStyledComponent('span', styles.propName);
const PropP = createStyledComponent('p', styles.propP);
const PropRequired = createStyledComponent('span', styles.propRequired);
const TR = createStyledComponent('tr', styles.tr);
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
        {undefined === defaultValue ? 'undefined' : defaultValue}
      </CodeValue>;
}

function getDefaultValue(propDescription: Object): any {
  const { defaultValue: { value } = {} } = propDescription;
  return value;
}

function getFlowType(propDescription: Object): string {
  const { flowType } = propDescription;
  const type = (flowType && flowType.name) || 'unknown';
  if (type === 'union') {
    return `one of: ${flowType.raw}`;
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
      <PropCell>
        <DefaultValue defaultValue={defaultValue} required={required} />
      </PropCell>
      <PropCell>
        <PropP><PropType>{type}</PropType>&nbsp;{description}</PropP>
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
            <PropColumnHeader key="prop" style={{ width: '10rem' }}>
              Name
            </PropColumnHeader>
            <PropColumnHeader key="default" style={{ width: '10rem' }}>
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
