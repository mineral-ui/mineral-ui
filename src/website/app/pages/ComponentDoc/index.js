/* @flow */
import React, { Fragment } from 'react';
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

import type { ComponentDocType } from './types';

type ComponentDocProps = {
  componentDoc: ComponentDocType
};

const StyledDocHeading = createStyledComponent(
  Heading,
  ({ theme }) => ({
    marginBottom: 0,
    paddingTop: getNormalizedValue(pxToEm(62), theme.SiteHeading_fontSize_2),

    [theme.bp_moreSpacious]: {
      fontSize: theme.SiteHeading_fontSize_2_wide,
      paddingTop: getNormalizedValue(
        pxToEm(80),
        theme.SiteHeading_fontSize_2_wide
      )
    }
  }),
  {
    withProps: { level: 2 }
  }
);

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

const DocIntro = ({ children }: { children: React$Node }) => (
  <DocSection>
    <Intro>{children}</Intro>
  </DocSection>
);

export default function ComponentDoc(props: ComponentDocProps) {
  const { componentDoc, ...rootProps } = props;
  const {
    bestPractices,
    theme,
    description,
    examples,
    slug,
    title,
    whenHowToUse
  } = componentDoc;

  return (
    <div {...rootProps}>
      {description && <DocIntro>{description}</DocIntro>}

      <DocSubNav componentDoc={componentDoc} />

      {examples && (
        <Fragment>
          <DocHeading id="examples">Examples</DocHeading>
          <DocExamples examples={examples} slug={slug} />
        </Fragment>
      )}

      <DocHeading id="api-and-theme">API & Theme</DocHeading>
      <DocProps componentDoc={componentDoc} />
      {theme && (
        <DocThemeVariables
          baseTheme={mineralTheme}
          componentTheme={theme}
          title={title}
        />
      )}

      {(whenHowToUse || bestPractices) && (
        <Fragment>
          <DocHeading id="usage">Usage</DocHeading>
          {whenHowToUse && <DocWhenHowToUse content={whenHowToUse} />}
          {bestPractices && <DocBestPractices practices={bestPractices} />}
        </Fragment>
      )}
    </div>
  );
}
