/* @flow */
import { createStyledComponent } from '../../../../../library/styles';
import Box from '../../Box/components/Box';
import DemoLayout from '../components/DemoLayout';
import _StartEnd from '../components/StartEnd';

const StartEnd = createStyledComponent(_StartEnd, {
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
