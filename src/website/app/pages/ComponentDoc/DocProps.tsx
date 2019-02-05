/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import _Callout from '../../Callout';
import Markdown from '../../Markdown';
import PropTable from '../../PropTable';
import Section from './DocSection';
import DocSectionTitle from './DocSectionTitle';

import type { ComponentDocType } from './types';

type DocPropsProps = {
  componentDoc: ComponentDocType
};

const Callout = styled(_Callout)(({ theme }) => ({
  marginTop: theme.baseline_2
}));
const PropsComment = styled(Markdown)(({ theme }) => ({
  fontStyle: 'italic',
  marginTop: theme.baseline_2
}));

export default function DocProps(props: DocPropsProps) {
  const {
    additionalPropDocs,
    propDocs,
    propsComment,
    title
  } = props.componentDoc;
  return (
    <Section>
      <DocSectionTitle id="props">{`${title} Props`}</DocSectionTitle>
      <p>The {title} component takes the following React props.</p>
      {propDocs ? (
        <div>
          <PropTable propDocs={propDocs} />
          {propsComment ? (
            <Callout title="Note">{propsComment}</Callout>
          ) : (
            <PropsComment>
              {`Undocumented properties, including [\`as\`](/styling#customization-techniques-try-theming-first-{{8}}-{{14}}-prop) and [\`css\`](/styling#customization-techniques-try-theming-first-{{22}}-prop), will be applied to the root element.`}
            </PropsComment>
          )}
        </div>
      ) : (
        <Callout title="Note">
          {`${title} does not have properties of its own. Undocumented properties will be applied to the root element.`}
        </Callout>
      )}

      {additionalPropDocs &&
        additionalPropDocs.map(({ title, description, propDocs }) => (
          <div key={title}>
            <DocSectionTitle
              id={`${title}-type`}
              level={4}>{`${title} Type`}</DocSectionTitle>
            <Markdown>{description}</Markdown>
            <PropTable propDocs={propDocs} />
          </div>
        ))}
    </Section>
  );
}
