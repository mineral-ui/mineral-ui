/* @flow */
import styled from '@emotion/styled';
import { palette } from 'mineral-ui-tokens';
import React from 'react';
import withProps from 'recompose/withProps';
import { componentStyleReset } from '../../../../../../library/styles';
import _Text from '../../../../../../library/Text';
import { mineralTheme as theme } from '../../../../../../library/themes';
import _DemoLayout from '../../../common/DemoLayout';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const StyledDemoLayout = (props) => (
  <_DemoLayout includeLastChild marginBottom="1em" {...props} />
);

const DemoLayout: StyledComponent<{ [key: string]: any }> = styled(
  StyledDemoLayout
)(({ theme }) => componentStyleReset(theme));

const Text = withProps({ noMargins: true })(
  styled(_Text)(({ theme }) => ({
    backgroundColor: palette.indigo_20,
    padding: theme.space_inset_sm
  }))
);

export default {
  id: 'nested',
  title: 'Nested Components',
  description: `Text components nested inside other Text components inherit
styles and semantics from the parent(s) by default. Text components inside
non-Text components won't inherit styles and semantics by default. You can
toggle inheritance in either case with the \`inherit\` prop.

<Callout title="Note">
  <p key={0}>
    For illustrative purposes, a purple background color and padding have been
    applied to the Text components below.
  </p>
</Callout>`,
  scope: { styled, DemoLayout, palette, Text, theme },
  source: `
    () => {
      const CustomDiv = styled('div')({
        backgroundColor: palette.sky_10,
        color: palette.sky_80,
        fontFamily: 'serif',
        fontSize: '1.25rem',
        padding: theme.space_inset_sm
      });
      return (
        <DemoLayout>
          For non-nested Text components, you can opt <em>in</em> to style
          inheritance by passing true to the inherit prop.

          <CustomDiv>
            This is a non-nested div with custom styles.
            <Text inherit>
              This non-nested Text has opted in to inheriting those custom styles.
            </Text>
          </CustomDiv>

          <Text as="div">
            For nested Text components (inside another Text), you can opt
            <em>out</em> of style inheritance by passing false to the inherit prop.

            <CustomDiv>
              This is a nested div with custom styles.
              <Text inherit={false}>
                This nested Text has opted out of inheriting those custom styles.
              </Text>
            </CustomDiv>
          </Text>
        </DemoLayout>
      );
    }`
};
