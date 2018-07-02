/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../library/styles';
import _Callout from '../../Callout';
import Markdown from '../../Markdown';
import PropTable from '../../PropTable';
import Section from './DocSection';
import DocSectionTitle from './DocSectionTitle';

type Props = {
  additionalTypes?: Array<Object>,
  propDoc?: Object,
  propsComment?: string | React$Element<*>,
  title: string
};

const Callout = createStyledComponent(_Callout, ({ theme }) => ({
  marginTop: theme.baseline_2
}));
const PropsComment = createStyledComponent('p', {
  fontStyle: 'italic'
});

export default function DocProps(props: Props) {
  const { additionalTypes, propDoc, propsComment, title } = props;
  return (
    <Section>
      <DocSectionTitle id="props">{`${title} Props`}</DocSectionTitle>
      <p>The {title} component takes the following React props.</p>
      {propDoc ? (
        <div>
          <PropTable propDoc={propDoc} />
          {propsComment ? (
            <Callout title="Note">{propsComment}</Callout>
          ) : (
            <PropsComment>
              Undocumented properties will be applied to the root element.
            </PropsComment>
          )}
        </div>
      ) : (
        <Callout title="Note">
          {`${title} does not have properties of its own. Undocumented properties will be applied to the root element.`}
        </Callout>
      )}
      {additionalTypes &&
        additionalTypes.map(({ title, description, content }) => (
          <div key={title}>
            <DocSectionTitle
              id={`${title}-type`}
              level={4}>{`${title} Type`}</DocSectionTitle>
            <Markdown>{description}</Markdown>
            <PropTable propDoc={content} />
          </div>
        ))}
    </Section>
  );
}
