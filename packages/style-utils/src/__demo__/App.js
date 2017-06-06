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
import ComponentDoc from '../../../site/src/components/ComponentDoc';
import Default from './examples/Default';
import GlobalTheme from './examples/GlobalTheme';
import ComponentTheme from './examples/ComponentTheme';
import NestedGlobal from './examples/NestedGlobal';
import ShallowMerged from './examples/ShallowMerged';
import CreateThemedComponent from './examples/CreateThemedComponent';
import CreateStyledComponent from './examples/CreateStyledComponent';

const examples = [
  {
    title: 'Default',
    component: Default,
    description: 'Just a simple sample component to demonstrate the styling below.'
  },
  {
    title: 'Global theme var override',
    component: GlobalTheme,
    description: 'This will affect all components inside this ThemeProvider that use this variable.',
    source: `<ThemeProvider theme={{ color_primary: 'mediumvioletred' }}>
  <Sample />
</ThemeProvider>`
  },
  {
    title: 'Component theme var override',
    component: ComponentTheme,
    description: 'This will affect all components inside this ThemeProvider that use this variable, which should only be Sample components due to the namespace.',
    source: `<ThemeProvider theme={{ Sample_color: 'mediumvioletred' }}>
  <Sample />
</ThemeProvider>`
  },
  {
    title: 'Nested global theme var override',
    component: NestedGlobal,
    description: 'When a nested ThemeProvider provides the same variable, the merge works as expected and the most deeply-nested theme wins.',
    source: `<ThemeProvider theme={{ color_primary: 'cyan' }}>
  <ThemeProvider theme={{ color_primary: 'mediumvioletred' }}>
    <Sample />
  </ThemeProvider>
</ThemeProvider>`
  },
  {
    title: 'Shallow merged global theme var override',
    component: ShallowMerged,
    description: 'When a nested ThemeProvider provides a different variable, the merge works as expected.',
    source: `<ThemeProvider theme={{ color_primary: 'mediumvioletred' }}>
  <ThemeProvider theme={{ color_warning: 'tomato' }}>
    <Sample />
  </ThemeProvider>
</ThemeProvider>`
  },
  {
    title: 'Local theme var override via createThemedComponent',
    component: CreateThemedComponent,
    description: 'If you need to overwrite a theme variable, either global or component-specific, for a specific component.',
    source: `const MyThemedSample = createThemedComponent(Sample, {
  color_primary: 'mediumvioletred'
});

<MyThemedSample />`
  },
  {
    title: 'Style override via createStyledComponent',
    component: CreateStyledComponent,
    description: 'If you need to use completely custom styles (which can still reference the props & theme) on a component.',
    source: `const MyStyledSample = createStyledComponent(Sample, (props, theme) => ({
  outline: '3px dashed mediumvioletred',
  fontSize: theme.font_size_d
}));

<MyStyledSample />`
  }
];

const props = {
  description: 'Sample implentations of various methods of styling and style overrides.',
  examples,
  slug: 'style-utils',
  title: 'style-utils'
};

export default function App() {
  return <ComponentDoc {...props} />;
}
