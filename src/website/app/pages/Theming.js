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
import colorable from 'colorable';
import { createStyledComponent, mineralTheme } from '../../../components/Utils';
import CodeBlock from '../CodeBlock';
import Link from '../Link';
import PageLayout from '../PageLayout';
import { Table, TableCell, TableHeaderCell, TableRow } from '../Table';

function a11yColor(color) {
  const a11y = colorable({
    main: color,
    white: '#fff',
    black: '#000',
    compact: true
  });

  const whiteContrast = a11y[0].combinations[0].contrast;
  const blackContrast = a11y[0].combinations[1].contrast;

  return whiteContrast > blackContrast ? 'white' : 'black';
}

const Code = createStyledComponent('code', ({ theme }) => ({
  backgroundColor: theme.color_gray_20,
  borderRadius: theme.borderRadius_1,
  fontFamily: theme.fontFamily_monospace,
  padding: theme.spacing_half,
  whiteSpace: 'nowrap'
}));

const Name = createStyledComponent('span', ({ theme }) => ({
  fontWeight: theme.fontWeight_semiBold
}));
const Value = createStyledComponent('span', ({ color, theme }) => {
  if (color) {
    return {
      backgroundColor: color,
      borderRadius: theme.borderRadius_1,
      color: a11yColor(color),
      display: 'inline-block',
      fontFamily: theme.fontFamily_monospace,
      padding: `${theme.spacing_half} ${theme.spacing_single}`
    };
  } else {
    return {
      fontFamily: theme.fontFamily_monospace
    };
  }
});

export default function Theming() {
  return (
    <PageLayout>
      <h1>Theming</h1>
      <p>
        Theming is a core concept in Mineral UI. To illustrate, consider the
        signature of{' '}
        <Link to="/components/component-utils#create-styled-component">
          createStyledComponent
        </Link>, e.g.:
      </p>
      <CodeBlock>
        {`const MyComponent = createStyledComponent('div', props => ({
            backgroundColor: props.theme.color_primary
          }));`}
      </CodeBlock>
      <p>
        The{' '}
        <Link to="/components/component-utils#theme-provider">
          ThemeProvider
        </Link>(s) in your app provides the theme to other Mineral UI and/or
        Glamorous components within that ThemeProvider. Your app{' '}
        <Link to="/getting-started">
          must have a ThemeProvider at its root
        </Link>{' '}
        and can optionally nest additional ThemeProviders to apply a custom
        theme to a section of your app. Nested ThemeProviders shallowly merge
        their theme with the parent theme.
      </p>
      <p>
        The theme itself (see the default mineralTheme below for an example) is
        a simple shallow object of variables that are shared across components.
      </p>
      <p>
        Each component can also have a “theme”, which is not a file, but rather
        a set of variables available to override default values. E.g., if
        Mineral UI’s <Link to="/components/button">Button</Link> component
        looked like this:
      </p>
      <CodeBlock>
        {`const Button = createStyledComponent('button', props => ({
            color: props.theme.Button_color || props.theme.color_primary
          }));`}
      </CodeBlock>
      <p>
        The themes distributed as part of Mineral UI include a value for
        <Code>color_primary</Code> but do not include a value for
        <Code>Button_color</Code>. In our component code, we leave the
        component-level variable, <Code>Button_color</Code>, as a hook for you
        to define if you’d like. Component-level theme variables start with the
        capitalized component name to differentiate from the global variables.
        When you’d like to override the Mineral UI theme at a component level in
        your app, you can use{' '}
        <Link to="/components/component-utils#create-themed-component">
          createThemedComponent
        </Link>:
      </p>
      <CodeBlock>
        {`const MyButton = createThemedComponent(Button, {
            Button_color: 'tomato'
          });`}
      </CodeBlock>
      <h2>Theme Variables</h2>
      <p>
        Themes in Mineral UI are made of the following variables. The values
        below come from the default mineralTheme. Note the naming convention:{' '}
        ‘property_target_variant_state’.
      </p>
      <Table>
        <thead>
          <tr>
            <TableHeaderCell scope="col">Variable</TableHeaderCell>
            <TableHeaderCell scope="col">Value</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {Object.keys(mineralTheme).map(variable => {
            return (
              <TableRow key={variable}>
                <TableCell>
                  <Name>
                    {variable}
                  </Name>
                </TableCell>
                <TableCell>
                  <Value
                    color={variable.match(/color/i) && mineralTheme[variable]}>
                    {mineralTheme[variable]}
                  </Value>
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </PageLayout>
  );
}
