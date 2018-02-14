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
} from '../../styles';
import IconArrowBack from 'mineral-ui-icons/IconArrowBack';
import Callout from './Callout';
import ErrorBoundary from './ErrorBoundary';
import Heading from './SiteHeading';
import Link from './SiteLink';
import LiveProvider from './LiveProvider';
import Markdown from './Markdown';

type Props = {
  backgroundColor?: string,
  chromeless?: boolean,
  componentName?: string,
  description?: React$Node,
  hideFromProd?: boolean,
  hideSource?: boolean,
  id: string,
  scope?: Object,
  source?: string,
  standalone?: boolean,
  title?: React$Node
};

const styles = {
  backLink: ({ theme }) => ({
    display: 'inline-block',
    margin: `${pxToEm(63)} 0 ${pxToEm(33)}`, // to baseline

    [theme.bp_moreSpacious]: {
      margin: `${pxToEm(85)} 0 ${pxToEm(43)}` // to baseline
    }
  }),
  componentDocExample: ({ theme }) => ({
    '&:not(:first-child)': {
      marginTop: pxToEm(27), // to baseline

      [theme.bp_moreSpacious]: {
        marginTop: pxToEm(33) // to baseline
      }
    }
  }),
  description: ({ theme }) => ({
    marginBottom: `${pxToEm(31)}`, // to baseline

    // Specificity hack
    // Sometimes Page's intro styling needs undone
    '& > p[class][class]': {
      color: 'inherit',
      fontSize: theme.fontSize_prose,
      fontWeight: 'inherit',
      maxWidth: theme.maxTextWidth
    }
  }),
  title: ({ theme }) => ({
    margin: `0 0 ${getNormalizedValue(
      pxToEm(21 - 12), // to mid-baseline
      theme.SiteHeading_fontSize_3
    )}`,
    paddingTop: getNormalizedValue(
      pxToEm(68), // to baseline
      theme.SiteHeading_fontSize_3
    ),

    [theme.bp_moreSpacious]: {
      fontSize: theme.SiteHeading_fontSize_3_wide,
      margin: `0 0 ${getNormalizedValue(
        pxToEm(19 - 12), // to mid-baseline
        theme.SiteHeading_fontSize_3_wide
      )}`,
      paddingTop: getNormalizedValue(
        pxToEm(80), // to baseline
        theme.SiteHeading_fontSize_3_wide
      )
    },

    '& > a:link': {
      color: 'inherit',
      fontWeight: 'inherit',
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline'
      }
    }
  })
};

const Root = createStyledComponent('div', styles.componentDocExample);
const Description = createStyledComponent(Markdown, styles.description);
const Title = createStyledComponent(Heading, styles.title).withProps({
  level: 3
});
const BackLink = createStyledComponent(Link, styles.backLink);

export default function ComponentDocExample({
  backgroundColor,
  chromeless,
  componentName,
  description,
  hideFromProd,
  hideSource,
  id,
  scope,
  source,
  standalone,
  title: propsTitle,
  ...restProps
}: Props) {
  const rootProps = { ...restProps };
  const liveProviderProps = {
    backgroundColor,
    hideSource: chromeless || hideSource,
    scope,
    source
  };

  const liveCode =
    scope && source ? (
      <LiveProvider
        {...liveProviderProps}
        chromeless={standalone && chromeless}
      />
    ) : null;

  const title =
    hideFromProd && typeof propsTitle === 'string'
      ? `${propsTitle} [Dev-only]`
      : propsTitle;

  return standalone && chromeless ? (
    liveCode
  ) : (
    <Root {...rootProps}>
      {standalone && (
        <BackLink to="../">
          <IconArrowBack color="currentColor" size="small" /> {componentName}
        </BackLink>
      )}
      <Title id={!standalone ? id : undefined}>
        {!standalone ? <Link to={id}>{title}</Link> : title}
      </Title>
      <Description scope={{ Callout }}>{description || ''}</Description>
      <ErrorBoundary buttonLabel="Reload example">{liveCode}</ErrorBoundary>
    </Root>
  );
}
