/* @flow */
const instructions = `
1. Provide an array of \`breakpoints\`, which will be used in the (min-width)
media queries used for responsive properties.
1. Those breakpoint values can either be a number (converted to px) or a key
from the theme (e.g. the default
[mineralTheme](/theming#common-scenarios-theme-structure) has 'narrow',
'medium', and 'wide').
1. For each responsive property, instead of passing a single value, _pass an
array of values that is one longer than the \`breakpoints\` array_. The first
value applies when no breakpoint matches, the second value applies when the
first breakpoint matches, and so on.
1. If you don't need to change a value at a breakpoint, you can pass \`null\`
to skip that breakpoint for that property.
`;

export default instructions;
