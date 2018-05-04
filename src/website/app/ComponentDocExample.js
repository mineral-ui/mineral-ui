/* @flow */
import React from 'react';
import { createStyledComponent, pxToEm } from '../../library/styles';
import IconArrowBack from 'mineral-ui-icons/IconArrowBack';
import Callout from './Callout';
import SubHeading from './SiteSubHeading';
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
  slug: string,
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
  })
};

const Root = createStyledComponent('div', styles.componentDocExample);
const Description = createStyledComponent(Markdown, styles.description);
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
  slug,
  source,
  standalone,
  title: propsTitle,
  ...restProps
}: Props) {
  const rootProps = { ...restProps };
  const descriptionProps = {
    scope: { Callout },
    standalone
  };
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
        <BackLink to={`/components/${slug}`}>
          <IconArrowBack color="currentColor" size="small" /> {componentName}
        </BackLink>
      )}
      <SubHeading id={!standalone ? id : undefined}>
        {!standalone ? (
          <Link to={`/components/${slug}/${id}`}>{title}</Link>
        ) : (
          title
        )}
      </SubHeading>
      <Description {...descriptionProps}>{description || ''}</Description>
      {liveCode}
    </Root>
  );
}
