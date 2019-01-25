/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import Card, {
  CardActions,
  CardBlock,
  CardDivider,
  CardFooter,
  CardStatus,
  CardTitle,
  cardActionsTheme,
  cardBlockTheme,
  cardDividerTheme,
  cardStatusTheme,
  cardTitleTheme
} from '../index';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

describe('Card', () => {
  describe('theme overrides', () => {
    testThemeOverrides(<Card>children</Card>, ['Card_backgroundColor']);
  });
});

describe('CardActions', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <CardActions>children</CardActions>,
      getProcessedComponentThemeKeys(cardActionsTheme)
    );
  });
});

describe('CardBlock', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <CardBlock>children</CardBlock>,
      getProcessedComponentThemeKeys(cardBlockTheme)
    );
  });
});

describe('CardDivider', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <CardDivider />,
      getProcessedComponentThemeKeys(cardDividerTheme)
    );
  });
});

describe('CardFooter', () => {
  describe('theme overrides', () => {
    testThemeOverrides(<CardFooter>children</CardFooter>, [
      'CardFooter_backgroundColor'
    ]);
  });
});

describe('CardStatus', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <CardStatus variant="danger">children</CardStatus>,
      getProcessedComponentThemeKeys(cardStatusTheme)
    );
  });
});

describe('CardTitle', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <CardTitle subtitle="subtitle" secondaryText="secondary">
        children
      </CardTitle>,
      getProcessedComponentThemeKeys(cardTitleTheme, {
        excludeKeys: [
          'CardTitleAvatar_margin',
          'CardTitleAvatarSize',
          'CardTitleAvatarSize_large'
        ]
      })
    );
  });
});
