/* @flow */
import colors from '../../../../../library/colors';
import { createStyledComponent } from '../../../../../library/styles';
import { mineralTheme as theme } from '../../../../../library/themes';
import _Text from '../../../../../library/Text';

const DemoLayout = createStyledComponent(
  'div',
  {
    '& > *': {
      marginBottom: '1em'
    }
  },
  {
    includeStyleReset: true
  }
);

const Text = createStyledComponent(_Text, ({ theme }) => ({
  backgroundColor: colors.indigo_20,
  padding: theme.space_inset_sm
})).withProps({ noMargins: true });

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
  scope: { createStyledComponent, DemoLayout, colors, Text, theme },
  source: `
    () => {
      const CustomDiv = createStyledComponent('div', {
        backgroundColor: colors.sky_10,
        color: colors.sky_80,
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

          <Text element="div">
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
