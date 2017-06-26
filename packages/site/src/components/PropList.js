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
import { createStyledComponent } from '@mineral-ui/style-utils';

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
    borderBottom: `2px solid ${theme.color_gray}`,
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
    backgroundColor: theme.color_background_danger,
    borderRadius: '3px',
    fontFamily: theme.fontFamily_monospace,
    padding: theme.measurement_a
  }),
  propRow: (props, theme) => ({
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
const PropTable = createStyledComponent('table', styles.propTable);
const PropColumnHeader = createStyledComponent('th', styles.propColumnHeader);
const PropCell = createStyledComponent('td', styles.propCell);
const PropName = createStyledComponent('span', styles.propName);
const PropP = createStyledComponent('p', styles.propP);
const PropRequired = createStyledComponent('span', styles.propRequired);
const PropRow = createStyledComponent('tr', styles.propRow);
const PropType = createStyledComponent('span', styles.propType);
const PropValue = createStyledComponent('textarea', styles.propValue);
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
        {undefined === defaultValue
          ? 'undefined'
          : JSON.stringify(defaultValue)}
      </CodeValue>;
}

type OnPropChange = (propDescription: Object, newValue: any) => void;

type DocProps = {
  defaultValue?: any,
  description?: string,
  exampleValue?: any,
  name: string,
  onPropChange: OnPropChange,
  type: string,
  required?: boolean
};

function onPropValueChange(
  e: Object,
  propDescription: Object,
  callback: OnPropChange
) {
  try {
    const newValue = JSON.parse(e.target.value);
    callback(propDescription, newValue);
  } catch (e) {
    console.warn('invalid JSON string');
  }
}

function PropDoc({
  defaultValue,
  description,
  exampleValue,
  name,
  onPropChange,
  required,
  type
}: DocProps) {
  return (
    <PropRow>
      <PropCell><PropName>{name}</PropName></PropCell>
      <PropCell>
        <DefaultValue defaultValue={defaultValue} required={required} />
      </PropCell>
      <PropCell>
        <PropP><PropType>{type}</PropType>&nbsp;{description}</PropP>
      </PropCell>
      <PropCell style={{ height: '100%' }}>
        <PropValue
          defaultValue={JSON.stringify(exampleValue)}
          onChange={onPropChange}
        />
      </PropCell>
    </PropRow>
  );
}

type Props = {
  exampleProps: Array<Object>,
  onPropChange: OnPropChange
};

export default function PropList({
  exampleProps = [],
  onPropChange = () => {}
}: Props) {
  if (exampleProps.length < 1) {
    return null;
  }

  const propDocs = exampleProps.map(propDescription => {
    const onExamplePropChange = e => {
      return onPropValueChange(e, propDescription, onPropChange);
    };

    return (
      <PropDoc
        key={propDescription.name}
        onPropChange={onExamplePropChange}
        {...propDescription}
      />
    );
  });

  return (
    <Root>
      <PropTable>
        <thead>
          <tr>
            <PropColumnHeader key="prop" style={{ width: '200px' }}>
              Prop
            </PropColumnHeader>
            <PropColumnHeader key="default" style={{ width: '250px' }}>
              Default
            </PropColumnHeader>
            <PropColumnHeader key="description">Description</PropColumnHeader>
            <PropColumnHeader key="value" style={{ width: '250px' }}>
              JSON Value
            </PropColumnHeader>
          </tr>
        </thead>
        <tbody>
          {propDocs}
        </tbody>
      </PropTable>
    </Root>
  );
}
