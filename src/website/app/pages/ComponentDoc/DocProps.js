/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../library/styles';
import _Callout from '../../Callout';
import PropTable from '../../PropTable';
import Section from './DocSection';
import DocSectionTitle from './DocSectionTitle';

type Props = {
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

export default function DocProps({ propDoc, propsComment, title }: Props) {
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
    </Section>
  );
}
