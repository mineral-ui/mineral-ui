Mineral UI color provides themes built on inspiring hues and grounded in usable
grays. Mineral UI is committed to providing an easy path to creating accessible
palettes and themes.

## Guidelines

Color is used to establish focal points or highlight important information.
Mineral UI uses color as a tool for communication and secondarily as decoration.
Overuse of color will overload the viewer and undermine any effect it had in
creating a visual hierarchy.

Take care when overriding individual theme values, since they enable consistent
styling through automatic application of tone and shadowing.

## Themes

A **theme** is composed of a hue color ramp and the base gray ramp. Every theme
uses the base gray ramp.

You can create your own theme:
  - `<value>_60` represents the base color for the theme.
  - Hue ramps are generated from 10 points placed on a Bezier curve with 3
    anchors.
  - The top point represents `<value>_10`.
  - The middle point represents `<value>_60`. This value should have a
    [contrast ratio](https://webaim.org/resources/contrastchecker/)
    against white of at least AA.
  - The final point represents `<value>_100`.
  - Each value is evenly distributed. Some manual adjustment might be necessary.
  - Depending on the mood and tone for the theme, some curves are steeper and
    some more shallow. The theme will appear brighter and more saturated with
    shallower curves.

![color swatch](/images/color-swatch.png)

## Variants

**Variants** are used in Mineral UI to aid users' understanding of the status of
different callouts, actions, buttons etc.

The color system features three variants to represent intention:
- **Success:** confirming actions or messages that were successful, or will
  begin a successful action.
- **Warning:** actions or messages that indicate a warning or may produce an
  undesirable result.
- **Destructive:** actions or messages that indicate errors or potential to
  destroy/remove data.

<Variants />

## Accessibility

Always consider customers who have different accessibility (a11y) needs, e.g. those who are color blind or visually impaired, when choosing colors.
Color ramp values have similar accessibility values even when themes are switched out.

Most themes are [WCAG AA+](https://www.w3.org/TR/WCAG20/) accessible. If a
higher level of accessibility is required, allow the user to activate an
accessible theme as a user preference.

**AA** has a contrast level of 4.5:1 or higher, and **AAA** has a contrast of at
least 7:1. **AA Large** means the font size must be at
least [18 points or 14 points bolded](https://developer.paciellogroup.com/blog/2012/05/whats-large-text-in-wcag-2-0-parlance/)
to be AA accessible.

## Ramps

You can choose one of these ramps to create a theme. The default Mineral UI
theme is built from "blue".
