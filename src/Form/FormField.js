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
import React, { Children, cloneElement, createElement, Component } from 'react';
import { hideVisually } from 'polished';
import { createStyledComponent, getNormalizedValue, pxToEm } from '../styles';
import { generateId } from '../utils';

type Props = {
  /** Caption associated with the input element. Commonly used to provide help text. */
  caption?: string | React$Element<*>,
  /** Form input element */
  children?: React$Node,
  /** @Private CSS className */
  className?: string,
  /** Visually hide label, but keep available for assistive technologies */
  hideLabel?: boolean,
  /** Form input class. Alternative to children. */
  input?: React$ComponentType<*>,
  /** Props to be applied directly to the root element, rather than the input */
  rootProps?: Object,
  /** Label associated with the input element */
  label: string | React$Element<*>,
  /** Marks associated input as required */
  required?: boolean,
  /** Text used to indicate a required field */
  requiredText?: string | React$Element<*>,
  /** Secondary text associated with the input element; takes precedence over `requiredText` */
  secondaryText?: string | React$Element<*>,
  /** Available variants */
  variant?: 'success' | 'warning' | 'danger'
};

export const componentTheme = (baseTheme: Object) => ({
  FormFieldCaption_color_text: baseTheme.color_gray_80,
  FormFieldCaption_fontSize: baseTheme.fontSize_mouse,

  FormFieldLabel_color_text: baseTheme.color_gray_80,
  FormFieldLabel_fontSize: baseTheme.fontSize_ui,
  FormFieldLabel_fontWeight: baseTheme.fontWeight_semiBold,
  FormFieldLabel_marginBottom: baseTheme.space_stack_sm,

  FormFieldSecondaryText_fontSize: baseTheme.fontSize_mouse,
  FormFieldSecondaryText_color_text: baseTheme.color_gray_80,
  FormFieldSecondaryText_color_text_required: baseTheme.color_text_danger,

  ...baseTheme
});

const styles = {
  caption: ({ theme: baseTheme, variant }) => {
    let theme = componentTheme(baseTheme);
    if (variant) {
      // prettier-ignore
      theme = {
        ...theme,
        FormFieldCaption_color_text: baseTheme[`color_text_${variant}`]
      };
    }

    const fontSize = theme.FormFieldCaption_fontSize;

    return {
      color: theme.FormFieldCaption_color_text,
      fontSize,
      // 1.5 provides same top gap as the spec'd lineHeight of 16 would
      marginTop: getNormalizedValue(pxToEm(1.5), fontSize)
    };
  },
  textWrapper: ({ hideLabel, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      color: theme.FormFieldLabel_color_text,
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
  },
  secondaryText: ({ secondaryText, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      color: secondaryText
        ? theme.FormFieldSecondaryText_color_text
        : theme.FormFieldSecondaryText_color_text_required,
      fontSize: theme.FormFieldSecondaryText_fontSize
    };
  }
};

const Root = createStyledComponent(
  'div',
  {},
  {
    displayName: 'FormField',
    includeStyleReset: true
  }
);
const TextWrapper = createStyledComponent('div', styles.textWrapper);
const SecondaryText = createStyledComponent('span', styles.secondaryText);
const Caption = createStyledComponent('div', styles.caption);

/**
 * Mineral UI allows your app to enhance form inputs with extra messaging, provide hints to users and help them fix errors.
 *
 * The FormField component wraps an input with an accessible label and displays
 * optional secondary text or a message.
 */
export default class FormField extends Component<Props> {
  static defaultProps = {
    requiredText: 'Required'
  };

  id: string = `formField-${generateId()}`;

  render() {
    const {
      caption,
      children,
      className,
      hideLabel,
      input,
      label,
      required,
      requiredText,
      rootProps: otherRootProps,
      secondaryText,
      variant,
      ...restProps
    } = this.props;

    const rootProps = {
      className,
      ...otherRootProps
    };

    const captionProps = {
      caption,
      variant,
      id: `${this.id}-caption`
    };

    const controlProps = {
      'aria-describedby': caption && captionProps.id,
      required,
      variant,
      // Note: Props are spread to input rather than Root
      ...restProps
    };

    const control = input
      ? createElement(input, controlProps)
      : children ? cloneElement(Children.only(children), controlProps) : null;

    return (
      <Root {...rootProps}>
        <label>
          <TextWrapper hideLabel={hideLabel}>
            {label}
            {(required || secondaryText) && (
              <SecondaryText secondaryText={secondaryText}>
                {secondaryText ? secondaryText : requiredText}
              </SecondaryText>
            )}
          </TextWrapper>
          {control}
        </label>
        {caption && <Caption {...captionProps}>{caption}</Caption>}
      </Root>
    );
  }
}
