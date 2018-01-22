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
import { createStyledComponent } from '../../../../styles';
import { ThemeProvider } from '../../../../themes';
import Box from '../../../../Box';
import Button from '../../../../Button';

const Container = createStyledComponent('div', ({ theme }) => ({
  backgroundColor: theme.color_gray_10,
  border: `1px solid ${theme.color_gray_20}`
}));

export default [
  {
    type: 'do',
    description:
      'Wrap Box around other components to apply spacing from the theme.',
    example: (
      <Container>
        <Box margin="lg" marginHorizontal="xl">
          <Button primary variant="success">
            New Report
          </Button>
        </Box>
      </Container>
    )
  },
  {
    type: 'do',
    description: `Use Box's \`marginStart\` & \`marginEnd\` props to apply
directionally-appropriate left/right margins.`,
    example: (
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <Container dir="rtl">
          <Box marginStart="xl">
            <Button primary>This Button has marginStart</Button>
          </Box>
        </Container>
      </ThemeProvider>
    )
  },
  {
    type: 'dont',
    description: `Don't use Box to display content directly. Wrap Box around
components instead.`,
    example: (
      <Container>
        <Box>
          This is some text, without the proper text styles, because it is
          directly inside a Box.
        </Box>
      </Container>
    )
  }
];
