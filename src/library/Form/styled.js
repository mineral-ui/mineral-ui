/* @flow */
import styled from '@emotion/styled';
import { hideVisually } from 'polished';
import { componentStyleReset, getNormalizedValue } from '../styles';
import {
  formFieldTheme,
  formFieldDividerTheme,
  formFieldsetTheme
} from './themes';

export const FormFieldRoot = styled('div')(({ theme }) =>
  componentStyleReset(theme)
);

export const FormFieldCaption = styled('div')(
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

export const FormFieldDividerRoot = styled('div')(({ theme: baseTheme }) => {
  const theme = formFieldDividerTheme(baseTheme);

  return {
    backgroundColor: theme.FormFieldDivider_borderColor,
    height: theme.FormFieldDivider_borderWidth,
    margin: `${theme.FormFieldDivider_margin} 0`
  };
});

export const FormFieldSecondaryText = styled('span')(
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

export const FormFieldsetRoot = styled('fieldset')(
  ({ disabled, theme: baseTheme }) => {
    const theme = formFieldsetTheme(baseTheme);

    return {
      ...componentStyleReset(baseTheme),

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
  }
);

export const FormFieldTextWrapper = styled('div')(
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
