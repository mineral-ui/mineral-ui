import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ElementType,
  ReactElement
} from 'react';

export declare namespace Button {
  export interface Props
    extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
    as?: ElementType;
    circular?: boolean;
    css?: { [key: string]: any };
    fullWidth?: boolean;
    href?: string;
    iconEnd?: ReactElement;
    iconStart?: ReactElement;
    justifyContent?: string;
    minimal?: boolean;
    primary?: boolean;
    size?: string;
    variant?: string;
    width?: string;
  }
}

export declare function Button(props: Button.Props): ReactElement;
export default Button;
