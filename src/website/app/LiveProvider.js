import React from 'react';
import dedent from 'dedent';
import {
  LiveProvider as ReactLiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';
import { createStyledComponent } from '../../utils';

type Props = {
  backgroundColor?: string,
  hideSource?: boolean,
  chromeless?: boolean,
  scope: Object,
  source: string
};

const styles = {
  livePreview: ({ backgroundColor, chromeless, theme }) => {
    return chromeless
      ? { padding: '1rem' }
      : {
          backgroundColor,
          border: `1px solid ${theme.borderColor}`,
          padding: theme.spacing_double
        };
  },
  liveEditor: ({ theme }) => ({
    fontSize: theme.fontSize_ui,
    maxHeight: `${parseFloat(theme.spacing_quad) * 10}em`,
    overflow: 'auto'
  })
};

const MyLivePreview = createStyledComponent(LivePreview, styles.livePreview, {
  rootEl: 'div'
});
const MyLiveEditor = createStyledComponent(LiveEditor, styles.liveEditor);

export default function LiveProvider({
  backgroundColor,
  hideSource,
  chromeless,
  scope,
  source
}: Props) {
  return (
    <ReactLiveProvider
      code={dedent(source)}
      scope={scope}
      mountStylesheet={false}>
      <MyLivePreview
        backgroundColor={backgroundColor}
        chromeless={chromeless}
      />
      {!hideSource && [<MyLiveEditor key={0} />, <LiveError key={1} />]}
    </ReactLiveProvider>
  );
}
