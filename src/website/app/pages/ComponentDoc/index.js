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
import { createStyledComponent, mineralTheme } from '../../../../utils';
import DocBestPractices from './DocBestPractices';
import DocExamples from './DocExamples';
import DocHeader from './DocHeader';
import DocProps from './DocProps';
import DocThemeVariables from './DocThemeVariables';
import DocWhenHowToUse from './DocWhenHowToUse';

type BestPractice = {
  type: string,
  title: string,
  example: MnrlReactNode,
  description: string
};

type Props = {
  bestPractices?: Array<BestPractice>,
  className?: string,
  componentTheme?: Theme | Array<Theme>,
  description?: MnrlReactNode,
  doc: Object,
  examples?: Array<any>,
  hidePropDoc?: boolean,
  title: string,
  whenHowToUse?: string
};

type Theme = (theme: Object) => Object;

const Root = createStyledComponent(
  'div',
  ({ theme }) => ({
    fontFamily: theme.fontFamily_system
  }),
  {
    includeStyleReset: true
  }
);

export default function ComponentDoc({
  bestPractices,
  className,
  doc,
  examples,
  hidePropDoc,
  componentTheme,
  title,
  whenHowToUse
}: Props) {
  const { props: propDoc } = doc;
  const headerProps = {
    bestPractices,
    componentTheme,
    examples,
    propDoc,
    title,
    whenHowToUse
  };
  const propProps = { propDoc, title };
  const themeVariablesProps = {
    baseTheme: mineralTheme,
    componentTheme,
    title
  };

  return (
    <Root className={className}>
      <DocHeader {...headerProps}>
        {doc.description}
      </DocHeader>
      {examples && <DocExamples examples={examples} />}
      {!hidePropDoc && <DocProps {...propProps} />}
      {componentTheme && <DocThemeVariables {...themeVariablesProps} />}
      {whenHowToUse && <DocWhenHowToUse content={whenHowToUse} />}
      {bestPractices && <DocBestPractices practices={bestPractices} />}
    </Root>
  );
}
