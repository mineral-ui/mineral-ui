/* @flow */
import styled from '@emotion/styled';
import IconAssignment from 'mineral-ui-icons/IconAssignment';
import IconCheck from 'mineral-ui-icons/IconCheck';
import IconSlowMotionVideo from 'mineral-ui-icons/IconSlowMotionVideo';
import IconWarning from 'mineral-ui-icons/IconWarning';
import { palette } from 'mineral-ui-tokens';
import React from 'react';
import _Label from './Label';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

// a tilde surrounded by some spaces and "new"
const REGEX_LABEL_NEW = /^\s+?~\s+?(new)/;
// a tilde surrounded by some spaces and "experimental"
const REGEX_LABEL_EXPERIMENTAL = /^\s+?~\s+?(experimental)/;

const styles = {
  label: ({ theme }) => ({
    marginLeft: theme.space_inline_sm
  }),
  icon: {
    '& svg': {
      verticalAlign: 'text-top'
    },
    '& span': {
      border: 0,
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: 1
    }
  }
};

const Label: StyledComponent<{ [key: string]: any }> = styled(_Label)(
  styles.label
);
const Available: StyledComponent<{ [key: string]: any }> = styled('span')(
  styles.icon
);
const InDevelopment: StyledComponent<{ [key: string]: any }> = styled('span')(
  styles.icon
);
const Planned: StyledComponent<{ [key: string]: any }> = styled('span')(
  styles.icon
);
const Deprecated: StyledComponent<{ [key: string]: any }> = styled('span')(
  styles.icon
);

export const isNew = (child: React$Node, index: number) => {
  if (typeof child !== 'string' || !child.match(REGEX_LABEL_NEW)) {
    return child;
  }

  return (
    <Label key={`label-${index}`} variant="success">
      {child.replace(REGEX_LABEL_NEW, '$1')}
    </Label>
  );
};

export const isExperimental = (child: React$Node, index: number) => {
  if (typeof child !== 'string' || !child.match(REGEX_LABEL_EXPERIMENTAL)) {
    return child;
  }

  return (
    <Label key={`label-${index}`} variant="warning">
      {child.replace(REGEX_LABEL_EXPERIMENTAL, '$1')}
    </Label>
  );
};

export const isAvailable = (child: React$Node, index: number) => {
  if (typeof child !== 'string' || !child.includes('[available]')) {
    return child;
  }

  return (
    <Available key={`icon-${index}`}>
      <IconCheck color={palette.green_60} size="large" title="available" />
      <span>available</span>
    </Available>
  );
};

export const isInDevelopment = (child: React$Node, index: number) => {
  if (typeof child !== 'string' || !child.includes('[in development]')) {
    return child;
  }

  return (
    <InDevelopment key={`icon-${index}`}>
      <IconSlowMotionVideo
        color={palette.bronze_60}
        size="large"
        title="in development"
      />
      <span>in development</span>
    </InDevelopment>
  );
};

export const isPlanned = (child: React$Node, index: number) => {
  if (typeof child !== 'string' || !child.includes('[planned]')) {
    return child;
  }

  return (
    <Planned key={`icon-${index}`}>
      <IconAssignment size="large" color={palette.blue_60} title="planned" />
      <span>planned</span>
    </Planned>
  );
};

export const isDeprecated = (child: React$Node, index: number) => {
  if (typeof child !== 'string' || !child.includes('[deprecated]')) {
    return child;
  }

  return (
    <Deprecated key={`icon-${index}`}>
      <IconWarning color={palette.red_60} size="large" title="deprecated" />
      <span>deprecated</span>
    </Deprecated>
  );
};
