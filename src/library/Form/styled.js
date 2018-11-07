/* @flow */
import { hideVisually } from 'polished';
import { createStyledComponent, getNormalizedValue } from '../styles';
import {
  formFieldTheme,
  formFieldDividerTheme,
  formFieldsetTheme
} from './themes';

export const FormFieldRoot = createStyledComponent(
  'div',
  {},
  {
    displayName: 'FormField',
    includeStyleReset: true
  }
);

export const FormFieldCaption = createStyledComponent(
  'div',
  ({ isGroup, theme: baseTheme, variant }) => {
    let theme = formFieldTheme(baseTheme);
    if (variant) {
      // prettier-ignore
      theme = {
      ...theme,
      FormFieldCaption_color: baseTheme[`color_${variant}`]
    };
    }

    const fontSize = theme.FormFieldCaption_fontSize;

    return {
      color: theme.FormFieldCaption_color,
      fontSize,
      marginTop: isGroup
        ? getNormalizedValue(theme.FormFieldCaption_marginTop_isGroup, fontSize)
        : getNormalizedValue(theme.FormFieldCaption_marginTop, fontSize)
    };
  }
);

export const FormFieldDividerRoot = createStyledComponent(
  'div',
  ({ theme: baseTheme }) => {
    const theme = formFieldDividerTheme(baseTheme);

    return {
      backgroundColor: theme.FormFieldDivider_borderColor,
      height: theme.FormFieldDivider_borderWidth,
      margin: `${theme.FormFieldDivider_margin} 0`
    };
  },
  {
    displayName: 'FormFieldDivider'
  }
);

export const FormFieldSecondaryText = createStyledComponent(
  'span',
  ({ secondaryText, theme: baseTheme }) => {
    const theme = formFieldTheme(baseTheme);

    return {
      color: secondaryText
        ? theme.FormFieldSecondaryText_color
        : theme.FormFieldSecondaryText_color_required,
      fontSize: theme.FormFieldSecondaryText_fontSize,
      fontWeight: theme.FormFieldSecondaryText_fontWeight
    };
  }
);

export const FormFieldsetRoot = createStyledComponent(
  'fieldset',
  ({ disabled, theme: baseTheme }) => {
    const theme = formFieldsetTheme(baseTheme);

    return {
      border: '1px solid transparent',
      borderTopColor: theme.FormFieldset_borderColor,
      padding: 0,

      '& > legend': {
        color: disabled ? theme.color_disabled : theme.FormFieldsetLegend_color,
        fontSize: theme.FormFieldsetLegend_fontSize,
        fontWeight: theme.FormFieldsetLegend_fontWeight,
        lineHeight: theme.size_medium,
        padding: 0,
        paddingLeft: theme.direction === 'rtl' ? theme.space_inline_sm : null,
        paddingRight: theme.direction === 'ltr' ? theme.space_inline_sm : null
      }
    };
  },
  {
    displayName: 'FormFieldset',
    includeStyleReset: true,
    rootEl: 'fieldset'
  }
);

export const FormFieldTextWrapper = createStyledComponent(
  'div',
  ({ hideLabel, theme: baseTheme }) => {
    const theme = formFieldTheme(baseTheme);

    return {
      color: theme.FormFieldLabel_color,
      display: 'flex',
      fontSize: theme.FormFieldLabel_fontSize,
      fontWeight: theme.FormFieldLabel_fontWeight,
      justifyContent: 'space-between',
      marginBottom: theme.FormFieldLabel_marginBottom,
      ...(hideLabel ? hideVisually() : {}),
      '& > *': {
        alignSelf: 'flex-end',
        display: 'inline-block'
      }
    };
  }
);
