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
import { createStyledComponent } from '../../../../utils';
import Heading from '../../Heading';
import Markdown from '../../Markdown';
import Section from '../../Section';
import VariableTable from '../../VariableTable';

type Props = {
  baseTheme: Object,
  componentTheme: Theme | Array<Theme>,
  title: string
};

type Theme = (theme: Object) => Object;

const Title = createStyledComponent(Heading, ({ theme }) => ({
  margin: `${parseFloat(theme.space_stack_sm) * 8}em 0 ${theme.space_stack_xl}`
}));

const createKeyMirror = (obj: Object) => {
  let mirror = {};
  Object.keys(obj).forEach(key => {
    mirror[key] = `${key}`;
  });
  return mirror;
};

const REGEX_IS_COLOR = /color|fill/i;

const getColor = (theme, variable, baseTheme) =>
  REGEX_IS_COLOR.test(variable) && baseTheme && baseTheme[theme[variable]];

const getValue = (theme, variable, baseTheme) => {
  const baseThemeKeys = baseTheme && createKeyMirror(baseTheme);
  if (baseThemeKeys && baseThemeKeys[theme[variable]]) {
    return `theme.${theme[variable]}`;
  } else if (
    typeof theme[variable] === 'number' &&
    !RegExp(/lineHeight/i).test(variable)
  ) {
    return `${theme[variable]}px`;
  } else {
    return theme[variable];
  }
};

export default function DocThemeVariables({
  baseTheme,
  componentTheme,
  title
}: Props) {
  const baseThemeKeys = createKeyMirror(baseTheme);

  let theme;
  if (Array.isArray(componentTheme)) {
    theme = componentTheme.reduce((acc, themeFn) => {
      return {
        ...acc,
        ...themeFn(baseThemeKeys)
      };
    }, {});
  } else {
    theme = componentTheme(baseThemeKeys);
  }

  return (
    <Section>
      <Title level={3} id="theme-variables">
        {`${title} Theme Variables`}
      </Title>
      <Markdown>
        {`These variables can be used as hooks to override this component’s
          style at either a [global](/components/theme-provider) or
          [local](/components/utils#create-themed-component) level. The
          \`theme\` referenced below is whatever theme is available from props
          to the instance of this component.`}
      </Markdown>
      <VariableTable
        baseTheme={baseTheme}
        theme={theme}
        value={getValue}
        valueColor={getColor}
      />
    </Section>
  );
}
