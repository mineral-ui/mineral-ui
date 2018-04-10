/* @flow */
import React from 'react';
import dedent from 'dedent';
import rgba from 'polished/lib/color/rgba';
import {
  LiveProvider as ReactLiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';
import { createStyledComponent } from '../../library/styles';
import { ThemeProvider } from '../../library/themes';
import getCodeBlockStyles from './utils/getCodeBlockStyles';
import siteColors from './siteColors';

type Props = {
  backgroundColor?: string,
  chromeless?: boolean,
  hideSource?: boolean,
  scope: Object,
  source: string
};

const styles = {
  livePreview: ({ backgroundColor, chromeless, theme }) => {
    return chromeless
      ? { padding: '1rem' }
      : {
          backgroundColor: backgroundColor || theme.color_white,
          border: `1px solid ${rgba(siteColors.slate, 0.3)}`,
          fontFamily: 'comic sans ms',
          padding: theme.space_inset_md,

          '& ::selection': {
            backgroundColor: 'highlight'
          }
        };
  },
  liveEditor: ({ theme }) => ({
    ...getCodeBlockStyles(theme),

    '&:focus': {
      outline: `6px solid ${rgba(theme.color_theme, 0.3)}`
    }
  }),
  liveError: ({ theme }) => ({
    backgroundColor: '#fce3e3', // color.red_10
    color: theme.color_danger,
    fontFamily: theme.fontFamily_monospace,
    fontSize: theme.fontSize_mouse,
    lineHeight: theme.lineHeight_prose,
    overflow: 'auto',
    padding: '0 0.5rem', // Match value of the live-editor from .prism-code
    whiteSpace: 'pre',

    '&:first-line': {
      fontFamily: theme.fontFamily_system,
      fontWeight: theme.fontWeight_semiBold,
      // Can't use margin/padding here, so this is to space off the heading
      // from the code
      lineHeight: 2 * theme.lineHeight_prose
    }
  })
};

const MyLivePreview = createStyledComponent(LivePreview, styles.livePreview, {
  rootEl: 'div'
});
const MyLiveEditor = createStyledComponent(LiveEditor, styles.liveEditor);
const MyLiveError = createStyledComponent(LiveError, styles.liveError);

export default function LiveProvider({
  backgroundColor,
  chromeless,
  hideSource,
  scope,
  source,
  ...restProps
}: Props) {
  const liveProviderProps = {
    code: dedent(source),
    scope,
    mountStylesheet: false,
    ...restProps
  };
  return (
    <ReactLiveProvider {...liveProviderProps}>
      <ThemeProvider>
        <MyLivePreview
          backgroundColor={backgroundColor}
          chromeless={chromeless}
        />
      </ThemeProvider>
      {!hideSource && [
        <MyLiveEditor key={0} ignoreTabKey={true} />,
        <MyLiveError key={1} />
      ]}
    </ReactLiveProvider>
  );
}
