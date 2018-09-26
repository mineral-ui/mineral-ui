// flow-typed signature: d13ec352060ac01646c567cbcd99b929
// flow-typed version: e322ed3ec1/fast-memoize_v2.x.x/flow_>=v0.53.x

declare module 'fast-memoize' {
  declare type Cache<K, V> = {
    get: (key: K) => V,
    set: (key: K, value: V) => void,
    has: (key: K) =>  boolean
  }

  declare type Options = {
    cache?: Cache<*, *>;
    serializer?: (...args: any[]) => any;
    strategy?: <T>(fn: T, options?: Options) => T;
  }


  declare module.exports: <T>(fn: T, options?: Options) => T;
}
