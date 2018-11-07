/* @flow */
export default `RadioGroup is used to provide a simpler API for creating a
group of [Radios](/components/radio).  It also provides proper row spacing and
an inline layout option.

Use a RadioGroup to allow users to select a single option from a list.

Use Radios when the number of choices is fairly small.  If the number of
choices is large, consider an alternate form control, such as a select, which
has a more compact layout.

Use Radios to change settings rather than initiate actions.

Use caution when determining a default selection for a group of Radios.
* If a default is provided, ensure that it does not make assumptions about your
users choices.
* If a default is not provided, be aware that 'no selection' is a state that
users cannot return to once a selection is made.
* Both of these case can generally be addressed by providing a neutral option.
If this is insufficient, consider an alternate form control.

RadioGroups should be wrapped in a [FormField](/components/form-field) to
provide an accessible label and other features.  See the
[FormField example](#form-field) for details.`;
