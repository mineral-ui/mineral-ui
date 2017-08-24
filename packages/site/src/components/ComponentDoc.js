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
} from '@mineral-ui/component-utils';
import Icon from '@mineral-ui/icon';
import ComponentDocExample from './ComponentDocExample';
import Link from '@mineral-ui/link';
import PropTable from './PropTable';

type Example = {
  description?: MnrlReactNode,
  propValues?: Object,
  scope: Object,
  id: string,
  source: string,
  title: MnrlReactNode
};

type Props = {
  behavior: MnrlReactNode,
  className?: string,
  design: MnrlReactNode,
  doc: Object,
  hidePropDoc?: boolean,
  examples?: Array<Example>,
  slug: string,
  title: string
};

const styles = {
  componentDoc: ({ theme }) => ({
    borderBottom: `2px solid ${theme.borderColor}`,
    fontFamily: theme.fontFamily_system,
    margin: `0 ${theme.spacing_quad} ${theme.spacing_quad}`,
    paddingBottom: theme.spacing_quad
  }),
  header: ({ theme }) => ({
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: theme.spacing_single,
    padding: `${theme.spacing_double} 0`
  }),
  title: ({ theme }) => ({
    fontSize: theme.fontSize_h1,
    fontWeight: theme.fontWeight_extraBold,
    margin: `0 0 ${getNormalizedValue(
      theme.spacing_double,
      theme.fontSize_h1
    )}`,
    marginRight: 'auto',
    paddingRight: pxToEm(16 * 12)
  }),
  p: ({ theme }) => ({
    fontSize: theme.fontSize_h3,
    flex: '1 0 100%',
    lineHeight: theme.lineHeight_prose,
    margin: '0'
  }),
  h2: ({ theme }) => ({
    margin: `${2 *
      parseFloat(
        getNormalizedValue(theme.spacing_quad, theme.fontSize_h2)
      )}em 0 ${getNormalizedValue(theme.spacing_double, theme.fontSize_h2)} 0`,
    fontSize: theme.fontSize_h2,
    fontWeight: theme.fontWeight_semiBold
  }),
  h3: ({ theme }) => ({
    fontSize: theme.fontSize_h3,
    fontWeight: theme.fontWeight_semiBold,
    margin: `${2 *
      parseFloat(
        getNormalizedValue(theme.spacing_quad, theme.fontSize_h3)
      )}em 0 ${getNormalizedValue(theme.spacing_single, theme.fontSize_h3)} 0`
  }),
  subnav: ({ theme }) => ({
    borderBottom: `1px solid ${theme.borderColor}`,
    marginBottom: theme.spacing_quad
  }),
  navElement: ({ theme }) => ({
    display: 'inline-block',
    marginRight: theme.spacing_triple,
    paddingBottom: theme.spacing_single,
    borderBottom: '3px solid transparent',
    cursor: 'pointer'
  }),
  propsComment: () => ({
    fontStyle: 'italic'
  })
};

const Root = createStyledComponent('section', styles.componentDoc, {
  includeStyleReset: true
});
const Header = createStyledComponent('header', styles.header);
const Title = createStyledComponent('h1', styles.title);
const P = createStyledComponent('p', styles.p);
const H2 = createStyledComponent('h2', styles.h2);
const H3 = createStyledComponent('h3', styles.h3);
const SubNav = createStyledComponent('nav', styles.subnav);
const NavElement = createStyledComponent(Link, styles.navElement);
const PropsComment = createStyledComponent('p', styles.propsComment);

function IconGithub() {
  return (
    <Icon size="32px" color="currentColor">
      <svg viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
    </Icon>
  );
}

export default function ComponentDoc({
  behavior,
  className,
  design,
  doc,
  examples,
  hidePropDoc,
  slug,
  title
}: Props) {
  const { description: descriptionDoc, props: propDoc } = doc;
  const description =
    typeof descriptionDoc === 'string'
      ? <P>
          {descriptionDoc}
        </P>
      : descriptionDoc;

  return (
    <Root className={className} id={slug}>
      <Header>
        <Title>
          {title}
        </Title>
        <Link
          href={`https://github.com/mineral-ui/mineral-ui/tree/master/packages/${slug}`}
          aria-label="View on GitHub">
          <IconGithub />
        </Link>
        {description}
      </Header>
      <SubNav>
        <NavElement href="#code">Code & Examples</NavElement>
        <NavElement href="#usage">Usage Guidelines</NavElement>
      </SubNav>
      <div>
        <H2 id="code">Code & Examples</H2>
        {renderPropDoc(propDoc, hidePropDoc)}
        {renderExamples(examples, propDoc, slug)}
        <H2 id="usage">Usage Guidelines</H2>
        <p>
          {design}
        </p>
        <H3>Behavior</H3>
        <p>
          {behavior}
        </p>
      </div>
    </Root>
  );
}

function renderExamples(
  examples?: Array<Example>,
  propDoc: Object,
  slug: string
) {
  if (examples) {
    return (
      <div>
        <H3>
          {examples.length === 1 ? 'Example' : 'Examples'}
        </H3>
        {examples.map((example, index) =>
          <ComponentDocExample
            key={index}
            propDoc={propDoc}
            slug={slug}
            {...example}
          />
        )}
      </div>
    );
  }
}

function renderPropDoc(propDoc: Object, hidePropDoc?: boolean) {
  if (!hidePropDoc) {
    return (
      <div>
        <H3>Props</H3>
        {propDoc && <PropTable propDoc={propDoc} />}
        <PropsComment>
          Undocumented properties will be applied to the root element.
        </PropsComment>
      </div>
    );
  }
}
