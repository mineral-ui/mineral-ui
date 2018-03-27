// flow-typed signature: 06d60aee15a0f747c71ef5c6c3c9c73c
// flow-typed version: 48c34babb0/react-media_v1.x.x/flow_>=v0.54.1

declare module 'react-media' {
  declare type ReactMediaQueryObject = {
    [prop: string]: string | number | boolean
  };

  declare module.exports: React$ComponentType<{
    defaultMatches?: boolean,
    query?: string | ReactMediaQueryObject | Array<ReactMediaQueryObject>,
    render?: () => React$Node,
    children?: React$Node | (matches: boolean) => React$Node,
    targetWindow?: {
      matchMedia(query: string): void
    }
  }>;
}
