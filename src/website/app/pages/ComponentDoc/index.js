/* @flow */
import React from 'react';
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm
} from '../../../../library/styles';
import { mineralTheme } from '../../../../library/themes';
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
  pageMeta: {
    title: string,
    canonicalLink: string
  },
  propsComment?: string | React$Element<*>,
  slug: string,
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
  propsComment,
  slug,
  title,
  whenHowToUse,
  ...restProps
}: Props) {
  const { props: propDoc } = doc;
  const subNavProps = {
    bestPractices,
    componentTheme,
    examples,
    whenHowToUse
  };
  const rootProps = {
    ...restProps
  };
  delete rootProps.subcomponent;
  delete rootProps.slug;
  const examplesProps = { examples, slug };
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
      {examples && <DocExamples {...examplesProps} />}
      <DocHeading id="api-and-theme">API & Theme</DocHeading>
      <DocProps {...propProps} />
      {componentTheme && <DocThemeVariables {...themeVariablesProps} />}
      {(whenHowToUse || bestPractices) && (
        <DocHeading id="usage">Usage</DocHeading>
      )}
      {whenHowToUse && <DocWhenHowToUse content={whenHowToUse} />}
      {bestPractices && <DocBestPractices practices={bestPractices} />}
    </div>
  );
}
