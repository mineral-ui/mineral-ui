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
import React, { Component } from 'react';
import { createStyledComponent } from '@mineral-ui/component-utils';
import styleReset from './styleReset';

const styles = {
  componentDocExample: (props, theme) => ({
    ...styleReset(theme),
    '& + &': {
      borderTop: `1px solid ${theme.color_gray}`,
      marginTop: theme.measurement_d
    }
  }),
  resizable: (props, theme) => ({
    border: `1px solid ${theme.color_gray}`,
    padding: theme.measurement_c
  }),
  h4: (props, theme) => ({
    margin: `${theme.measurement_d} 0 ${theme.measurement_c} 0`,
    fontSize: theme.fontSize_h4
  }),
  graf: (props, theme) => ({
    lineHeight: '1.5',
    margin: `0 0 ${theme.measurement_c}`
  }),
  code: (props, theme) => ({
    backgroundColor: theme.color_grayLight,
    color: theme.color_grayDark,
    display: 'block',
    fontFamily:
      '"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',
    fontSize: 'smaller',
    padding: theme.measurement_c
  })
};

const Root = createStyledComponent('div', styles.componentDocExample);
const Resizable = createStyledComponent('div', styles.resizable);
const H4 = createStyledComponent('h4', styles.h4);
const Graf = createStyledComponent('p', styles.graf);

function getDefaultValue(propDescription: Object): any {
  const { defaultValue } = propDescription;
  return (
    (defaultValue && defaultValue.value && eval(defaultValue.value)) ||
    undefined
  );
}

function getFlowType(propDescription: Object): string {
  const { flowType } = propDescription;
  const type = (flowType && flowType.name) || 'unknown';
  if (type === 'union') {
    return `one of: ${flowType.raw}`;
  }

  return type;
}

function getExampleProps(
  propDoc: Object = {},
  propValues: Object = {}
): Array<Object> {
  return Object.keys(propDoc).sort().map(name => {
    const propDescription = propDoc[name];
    const { description, required } = propDescription;
    const defaultValue = getDefaultValue(propDescription);
    const exampleValue = propValues.hasOwnProperty(name)
      ? propValues[name]
      : defaultValue;
    const type = getFlowType(propDescription);

    return {
      defaultValue,
      description,
      exampleValue,
      name,
      required,
      type
    };
  });
}

function getComponentProps(exampleProps: Array<Object>): Object {
  return exampleProps.reduce((acc, propDescription) => {
    const propName = propDescription.name;
    acc[propName] = propDescription.exampleValue;
    return acc;
  }, {});
}

type Props = {
  children?: MnrlReactNode,
  className?: string,
  component: MnrlReactComponent,
  description?: MnrlReactNode,
  propDoc?: Object,
  propValues?: Object,
  source?: string,
  title?: string
};

export default class ComponentDocExample extends Component {
  props: Props;

  render() {
    const { className, component: Component, description, title } = this.props;
    const componentProps = getComponentProps(
      getExampleProps(this.props.propDoc, this.props.propValues)
    );

    return (
      <Root className={className}>
        <H4>{title}</H4>
        {typeof description === 'string'
          ? <Graf>{description}</Graf>
          : description}
        <Resizable>
          <Component {...componentProps} />
        </Resizable>
      </Root>
    );
  }
}
