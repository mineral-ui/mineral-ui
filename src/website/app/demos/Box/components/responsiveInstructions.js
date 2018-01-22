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
const instructions = `
1. Provide an array of \`breakpoints\`, which will be used in the (min-width)
media queries used for responsive properties.
1. Those breakpoint values can either be a number (converted to px) or a key
from the theme (e.g. the default
[mineralTheme](/theming/#common-scenarios-theme-structure) has 'narrow',
'medium', and 'wide').
1. For each responsive property, instead of passing a single value, _pass an
array of values that is one longer than the \`breakpoints\` array_. The first
value applies when no breakpoint matches, the second value applies when the
first breakpoint matches, and so on.
1. If you don't need to change a value at a breakpoint, you can pass \`null\`
to skip that breakpoint for that property.
`;

export default instructions;
