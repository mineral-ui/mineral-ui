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
import { createStyledComponent, getNormalizedValue } from '../styles';
import { generateId } from '../utils';

type Props = {
  /**
   * Caption associated with the input element; commonly used to provide help
   * text
   */
  caption?: string | React$Element<*>,
  /** Form input element */
  children?: React$Node,
  /** @Private CSS className */
  className?: string,
  /** Visually hide label, but keep available for assistive technologies */
  hideLabel?: boolean,
  /** Form input class; alternative to `children` */
  input?: React$ComponentType<*>,
  /** Props to be applied directly to the root element, rather than the input */
  rootProps?: Object,
  /** Label associated with the input element */
  label: string | React$Element<*>,
  /** Marks associated input as required */
  required?: boolean,
  /** Text used to indicate a required field */
  requiredText?: string | React$Element<*>,
  /**
   * Secondary text associated with the input element; takes precedence over
   * `requiredText`
   */
  secondaryText?: string | React$Element<*>,
  /** Available variants */
  variant?: 'success' | 'warning' | 'danger'
};

const REGEX_GROUP = /(Checkbox|Radio|Group)/i;

export const componentTheme = (baseTheme: Object) => ({
  FormFieldCaption_color_text: baseTheme.color_gray_80,
  FormFieldCaption_fontSize: baseTheme.fontSize_mouse,
  FormFieldCaption_marginTop: baseTheme.space_stack_xxs,
  FormFieldCaption_marginTop_isGroup: baseTheme.space_stack_sm,

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
  caption: ({ isGroup, theme: baseTheme, variant }) => {
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
      marginTop: isGroup
        ? getNormalizedValue(theme.FormFieldCaption_marginTop_isGroup, fontSize)
        : getNormalizedValue(theme.FormFieldCaption_marginTop, fontSize)
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
 * The FormField component enhances form inputs with an accessible label and
 * optionally displays additional help text.
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

    // Label structure differs if input/control is a grouped control which has
    // its own label tag.  e.g. Radio, Checkbox, RadioGroup, CheckboxGroup
    const isGroup = this.isGroup();
    const Label = isGroup ? 'div' : 'label';

    const textWrapperProps = {
      hideLabel,
      key: `${this.id}-textWrapper`
    };

    const labelTextProps = {
      id: `${this.id}-labelText`
    };

    const captionProps = {
      caption,
      isGroup,
      variant,
      id: `${this.id}-caption`
    };

    const controlProps = (props = {}) => {
      return {
        'aria-describedby': caption && captionProps.id,
        key: `${this.id}-control`,
        required,
        rootProps: isGroup
          ? {
              'aria-labelledby': labelTextProps.id,
              'aria-describedby': caption && captionProps.id,
              ...props.rootProps
            }
          : props.rootProps,
        variant,
        // Note: Props are spread to input rather than Root
        ...restProps
      };
    };

    let control = null;
    if (input) {
      control = createElement(input, controlProps());
    } else if (children) {
      const child = Children.only(children);
      control = cloneElement(child, controlProps(child.props));
    }

    return (
      <Root {...rootProps}>
        <Label>
          <TextWrapper {...textWrapperProps}>
            <span {...labelTextProps}>{label}</span>
            {(required || secondaryText) && (
              <SecondaryText secondaryText={secondaryText}>
                {secondaryText ? secondaryText : requiredText}
              </SecondaryText>
            )}
          </TextWrapper>
          {control}
        </Label>
        {caption && <Caption {...captionProps}>{caption}</Caption>}
      </Root>
    );
  }

  getControlName = () => {
    const { children, input } = this.props;
    let controlName;

    if (input && input.name) {
      controlName = input.name;
    } else if (children) {
      const child = Children.only(children);
      if (child.type && child.type.name) {
        controlName = child.type.name;
      }
    }

    return controlName;
  };

  isGroup = () => {
    const controlName = this.getControlName();

    return controlName && REGEX_GROUP.test(controlName);
  };
}
