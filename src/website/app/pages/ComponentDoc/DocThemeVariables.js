/* @flow */
import React from 'react';
import Markdown from '../../Markdown';
import Section from './DocSection';
import DocSectionTitle from './DocSectionTitle';
import VariableTable from '../../VariableTable';

type Props = {
  baseTheme: Object,
  componentTheme: Theme | Array<Theme>,
  title: string
};

type Theme = (theme: Object) => Object;

const createKeyMirror = (obj: Object) => {
  let mirror = {};
  Object.keys(obj).forEach((key) => {
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
      <DocSectionTitle id="theme-variables">
        {`${title} Theme Variables`}
      </DocSectionTitle>
      <Markdown>
        {`These variables can be used as hooks to override this component's
          style at either a
          [local](/theming#common-scenarios-theme-your-entire-app-theme-a-component)
          or [global](/theming#common-scenarios-theme-your-entire-app)
          level. The \`theme\` referenced below is whatever theme is available
          from props to the instance of this component.`}
      </Markdown>
      <VariableTable
        baseTheme={baseTheme}
        themeToDisplay={theme}
        value={getValue}
        valueColor={getColor}
      />
    </Section>
  );
}
