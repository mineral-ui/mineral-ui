/* @flow */
import type { ThemeFn } from '../../../../library/themes/types';

export type BestPractice = {
  backgroundColor?: string,
  description: string,
  example: React$Node,
  type: string
};
export type BestPractices = Array<BestPractice>;

type ThemeFns = Array<ThemeFn<>>;

export type Example = {
  backgroundColor?: string,
  description?: React$Node,
  hideFromProd?: boolean,
  hideSource?: boolean,
  id: string,
  propValues?: Object,
  scope?: Object,
  source?: string,
  title: React$Node
};
export type Examples = Array<Example>;

export type AdditionalPropDoc = {
  title: string,
  description: React$Node,
  propDocs: ComponentPropDocs
};
export type AdditionalPropDocs = Array<AdditionalPropDoc>;

export type ComponentDocType = {
  title: string,
  slug: string,
  description?: React$Node,
  examples?: Examples,
  propDocs?: ComponentPropDocs,
  propsComment?: string | React$Element<*>,
  additionalPropDocs?: AdditionalPropDocs,
  theme?: ThemeFn<> | ThemeFns,
  whenHowToUse?: string,
  bestPractices?: BestPractices
};

export type ComponentDocs = Array<ComponentDocType>;

export type ComponentPropDocs = {
  [key: string]: ComponentPropDoc
};

export type ComponentPropDoc = {
  description: string,
  defaultValue?: string,
  required?: boolean,
  type: string | { name: string, value: string }
};
