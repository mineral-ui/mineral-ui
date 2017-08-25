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
import Icon from '../../../../Icon';
import Link from '../../../../Link';
import DocBestPractices from './DocBestPractices';
import DocExamples from './DocExamples';
import DocHeader from './DocHeader';
import DocProps from './DocProps';
import DocThemeVariables from './DocThemeVariables';
import DocWhenHowToUse from './DocWhenHowToUse';

type Props = {
  className?: string,
  componentTheme?: (theme: Object) => Object,
  description?: MnrlReactNode,
  doc: Object,
  examples?: Array<any>,
  hidePropDoc?: boolean,
  title: string
};

const Root = createStyledComponent(
  'div',
  ({ theme }) => ({
    fontFamily: theme.fontFamily_system
  }),
  {
    includeStyleReset: true
  }
);

const fakeContent = {
  bestPractices: [
    {
      type: 'do',
      title: 'this practice',
      example: <Link href="http://example.com">Example Link Component</Link>,
      description: 'Some text to explain why you should do this and when.'
    },
    {
      type: 'dont',
      title: 'this other practice',
      example: <Link href="//example.com">Example Link Component</Link>,
      description: 'Some text to explain why you should not do this.'
    },
    {
      type: 'do',
      title: 'this other practice',
      example: (
        <Icon size="medium" color="currentColor">
          <svg viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </Icon>
      ),
      description: 'Some text to explain why you should do this and when.'
    },
    {
      type: 'do',
      title: 'this third practice',
      example: <Link href="http://example.com">Example Link Component</Link>,
      description: 'Some text to explain why you should do this and when.'
    }
  ],
  intro: `A brief, introductory couple of sentences about the component. This is
    a second sentence just so that there’s a second line in this document. Think
    of this a teaser for the [When/How to Use](#when-how-to-use) section.
    `,
  whenHowToUse: `An explanation of when to use this component and basics about
    how to use it. Could also include when _not_ to use this component, and
    which component should be used instead. More detailed how-to-use info is
    under Best Practices, below. It might be a couple of short sentences, or it
    could be a full paragraph or two.`
};

export default function ComponentDoc({
  className,
  doc,
  examples,
  hidePropDoc,
  componentTheme,
  title
}: Props) {
  const { props: propDoc } = doc;
  const headerProps = {
    bestPractices: fakeContent.bestPractices,
    componentTheme,
    examples,
    propDoc,
    title,
    whenHowToUse: fakeContent.whenHowToUse
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
        {`${doc.description || ''} ${fakeContent.intro}`}
      </DocHeader>
      {examples && <DocExamples examples={examples} />}
      {!hidePropDoc && <DocProps {...propProps} />}
      {componentTheme && <DocThemeVariables {...themeVariablesProps} />}
      {fakeContent.whenHowToUse &&
        <DocWhenHowToUse content={fakeContent.whenHowToUse} />}
      {fakeContent.bestPractices &&
        <DocBestPractices practices={fakeContent.bestPractices} />}
    </Root>
  );
}
