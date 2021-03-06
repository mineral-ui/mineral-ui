/* @flow */
import styled from '@emotion/styled';
import Box from '../../common/DemoBox';
import _DemoLayout from '../../common/DemoLayout';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const DemoLayout: StyledComponent<{ [key: string]: any }> = styled(_DemoLayout)(
  {
    '& > *': {
      float: 'left',
      width: '30%',

      '&[class]': {
        marginBottom: 0
      },

      '&:not(:last-child)': {
        marginRight: '5%'
      }
    }
  }
);

export default {
  id: 'height',
  title: 'Height',
  description: `By default, Box will stretch in height to fit its contents. Set
the \`height\` prop to define a height instead.

_Numbers < 1, e.g. \`1/2\`, will be converted to a percentage. Numbers ≥ 1 will
be appended with \`px\`. String values, e.g. \`"4em"\` or \`"20%"\`, will be
passed directly._`,
  scope: { DemoLayout, Box },
  source: `
    <DemoLayout>
      <Box height="10em">A</Box>
      <Box height={100}>B</Box>
      <Box height={1/3}>C</Box>
    </DemoLayout>`
};
