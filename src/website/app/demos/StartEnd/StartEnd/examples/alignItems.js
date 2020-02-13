/* @flow */
import styled from '@emotion/styled';
import Box from '../../../Box/common/DemoBox';
import DemoLayout from '../../common/DemoLayout';
import _StartEnd from '../../common/DemoStartEnd';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const StartEnd: StyledComponent<{ [key: string]: any }> = styled(_StartEnd)({
  height: '5rem'
});

export default {
  id: 'align-items',
  title: 'Align Items',
  description: `The \`alignItems\` prop defines the alignment of items along
the cross axis (vertical, if \`direction\` is \`row\`; horizontal, if
\`direction\` is \`column\`).`,
  scope: { DemoLayout, Box, StartEnd },
  source: `
    () => {
      const propValues = [
        'stretch', // default
        'start',
        'center',
        'end'
      ];

      const renderStartEnds = () =>
        propValues.map((value, index) => (
          <StartEnd alignItems={value} key={index}>
            <Box>Start</Box>
            <Box>End</Box>
          </StartEnd>
        ));

      return <DemoLayout>{renderStartEnds()}</DemoLayout>;
    }`
};
