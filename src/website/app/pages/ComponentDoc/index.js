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
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm
} from '../../../../styles';
import { mineralTheme } from '../../../../themes';
import Heading from '../../SiteHeading';
import Intro from '../../Intro';
import DocBestPractices from './DocBestPractices';
import DocExamples from './DocExamples';
import DocProps from './DocProps';
import DocSection from './DocSection';
import DocSubNav from './DocSubNav';
import DocThemeVariables from './DocThemeVariables';
import DocWhenHowToUse from './DocWhenHowToUse';

type Props = {
  bestPractices?: Array<BestPractice>,
  className?: string,
  componentTheme?: Theme | Array<Theme>,
  description?: React$Node,
  doc: Object,
  examples?: Array<any>,
  hidePropDoc?: boolean,
  pageMeta: {
    title: string,
    canonicalLink: string
  },
  propsComment?: string | React$Element<*>,
  title: string,
  whenHowToUse?: string
};

type BestPractice = {
  type: string,
  title: string,
  example: React$Node,
  description: string
};

type Theme = (theme: Object) => Object;

const StyledDocHeading = createStyledComponent(Heading, ({ theme }) => ({
  marginBottom: 0,
  paddingTop: getNormalizedValue(pxToEm(62), theme.SiteHeading_fontSize_2),

  [theme.bp_moreSpacious]: {
    fontSize: theme.SiteHeading_fontSize_2_wide,
    paddingTop: getNormalizedValue(
      pxToEm(80),
      theme.SiteHeading_fontSize_2_wide
    )
  }
})).withProps({ level: 2 });

const DocHeading = ({
  children,
  id,
  ...restProps
}: {
  children?: React$Node,
  id?: string
}) => (
  <DocSection element="div" {...restProps}>
    <StyledDocHeading id={id}>{children}</StyledDocHeading>
  </DocSection>
);

const DocIntro = ({ children }: { children: string }) => (
  <DocSection>
    <Intro>{children}</Intro>
  </DocSection>
);

export default function ComponentDoc({
  bestPractices,
  componentTheme,
  doc,
  examples,
  hidePropDoc,
  propsComment,
  title,
  whenHowToUse,
  ...restProps
}: Props) {
  const { props: propDoc } = doc;
  const subNavProps = {
    bestPractices,
    componentTheme,
    examples,
    props: !!(propDoc || componentTheme),
    whenHowToUse
  };
  const rootProps = {
    ...restProps
  };
  delete rootProps.subcomponent;
  delete rootProps.slug;
  const propProps = { propDoc, propsComment, title };
  const themeVariablesProps = {
    baseTheme: mineralTheme,
    componentTheme,
    title
  };

  return (
    <div {...rootProps}>
      {doc.description && <DocIntro>{doc.description}</DocIntro>}
      <DocSubNav {...subNavProps} />
      {examples && <DocHeading id="examples">Examples</DocHeading>}
      {examples && <DocExamples examples={examples} />}
      {(!hidePropDoc || componentTheme) && (
        <DocHeading id="api-and-theme">API & Theme</DocHeading>
      )}
      {!hidePropDoc && <DocProps {...propProps} />}
      {componentTheme && <DocThemeVariables {...themeVariablesProps} />}
      {(whenHowToUse || bestPractices) && (
        <DocHeading id="usage">Usage</DocHeading>
      )}
      {whenHowToUse && <DocWhenHowToUse content={whenHowToUse} />}
      {bestPractices && <DocBestPractices practices={bestPractices} />}
    </div>
  );
}
