import React, { SVGProps } from 'react';

export declare namespace Icon {
  interface Props extends SVGProps<SVGSVGElement> {
    clickable?: boolean;
    css?: { [key: string]: any };
    cursor?: string;
    margin?: number | string;
    marginBottom?: number | string;
    marginHorizontal?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
    marginTop?: number | string;
    marginVertical?: number | string;
    size?: number | string;
  }
}

export declare const Icon: (
  props: Icon.Props
) => React.ReactElement<
  any,
  | string
  | ((
      props: any
    ) => React.ReactElement<
      any,
      string | any | (new (props: any) => React.Component<any, any, any>)
    > | null)
  | (new (props: any) => React.Component<any, any, any>)
>;
export default Icon;
