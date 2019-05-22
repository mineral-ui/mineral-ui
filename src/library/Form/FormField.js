/* @flow */
import React, { Children, cloneElement, createElement, Component } from 'react';
import { generateId } from '../utils';
import {
  FormFieldRoot as Root,
  FormFieldCaption,
  FormFieldSecondaryText,
  FormFieldTextWrapper
} from './styled';

import { formFieldPropTypes } from './propTypes';
import type { FormFieldProps } from './types';

const REGEX_GROUP = /(Checkbox|Radio|Group)/i;

export default class FormField extends Component<FormFieldProps> {
  static displayName = 'FormField';

  static propTypes = formFieldPropTypes;

  id: string = this.props.id || `formField-${generateId()}`;

  render() {
    const {
      labelFor,
      marginBottom,
      marginTop,
      marginVertical,
      width,

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
      marginBottom,
      marginTop,
      marginVertical,
      width,

      className,
      ...otherRootProps
    };

    // Label structure differs if input/control is a grouped control which has
    // its own label tag.  e.g. Radio, Checkbox, RadioGroup, CheckboxGroup
    const isGroup = this.isGroup();
    const Label = isGroup ? 'div' : 'label';

    const labelProps = Label === 'label' && labelFor ? { htmlFor: labelFor } : {};
    
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
        <Label {...labelProps}>
          <FormFieldTextWrapper {...textWrapperProps}>
            <span {...labelTextProps}>{label}</span>
            {(required || secondaryText) && (
              <FormFieldSecondaryText secondaryText={secondaryText}>
                {secondaryText || requiredText || null}
              </FormFieldSecondaryText>
            )}
          </FormFieldTextWrapper>
          {control}
        </Label>
        {caption && (
          <FormFieldCaption {...captionProps}>{caption}</FormFieldCaption>
        )}
      </Root>
    );
  }

  getControlName = () => {
    const { children, input } = this.props;
    let controlName;

    if (input && input.displayName) {
      controlName = input.displayName;
    } else if (children) {
      const child = Children.only(children);
      if (child.type && child.type.displayName) {
        controlName = child.type.displayName;
      }
    }

    return controlName;
  };

  isGroup = () => {
    const controlName = this.getControlName();

    return controlName && REGEX_GROUP.test(controlName);
  };
}
