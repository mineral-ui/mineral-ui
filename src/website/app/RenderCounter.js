/* @flow */
import React, { PureComponent } from 'react';
import { createStyledComponent } from '../../library/styles';

type Props = {};

type State = {
  data: ?Data
};

type Data = Map<string, number>;

type PerformanceEntry = { name: string };

const REGEX_RENDER_ENTRY = /^💎 \w+ \[render\]$/;
const isPerformanceSupported = Boolean(
  global.performance && global.performance.mark && global.PerformanceObserver
);

const formatEntry = (key: string) => `💎 ${key} [render]`;

const parseEntry = (entry: PerformanceEntry) => {
  const match = entry.name.match(REGEX_RENDER_ENTRY);
  const key = match && match[0].split(' ')[1];
  return key;
};

/**
 * NOTE: There is a cost associated with importing and calling this function,
 * both in terms of bundled file size and processing time, therefore usages
 * should be limited to development only and not committed to git.
 */
export const countRender = (key: string) => {
  process.env.NODE_ENV !== 'production' &&
    isPerformanceSupported &&
    global.performance.mark(formatEntry(key));
};

const Root = createStyledComponent(
  'div',
  ({ theme }) => ({
    backgroundColor: theme.color_theme_20,
    bottom: 0,
    display: 'inline-block',
    fontSize: theme.fontSize_ui,
    maxHeight: '100vh',
    overflow: 'auto',
    padding: theme.space_inset_md,
    position: 'fixed',
    right: 0,
    zIndex: theme.zIndex_800,

    '& th': {
      textAlign: 'left'
    },

    '& tbody td:last-child': {
      textAlign: 'right'
    },

    button: {
      marginLeft: theme.space_inline_md
    }
  }),
  {
    includeStyleReset: true
  }
);

/**
 * RenderCounter - Display a table of render counts for the instrumented
 * components.
 *
 * Usage:
 *
 * Add `<RenderCounter />` to app layout.
 *
 * React doesn't mark the render phase, so it must be manually instrumented.
 * Add call to increment render count in respective component render methods.
 *   e.g. `countRender('Button');``
 */
export default class RenderCounter extends PureComponent<Props, State> {
  state: State = {
    data: undefined
  };

  performanceObserver: any;

  componentDidMount() {
    isPerformanceSupported && this.observe();
  }

  componentWillUnmount() {
    this.performanceObserver = undefined;
  }

  observe = () => {
    this.performanceObserver = new global.PerformanceObserver((list) => {
      const data: Data = list.getEntries().reduce((acc, entry) => {
        const key = parseEntry(entry);
        const value = (acc.get(key) || 0) + 1;
        key && acc.set(key, value);
        return acc;
      }, new Map());
      data.size && this.performanceObserver && this.update(data);
    });

    this.performanceObserver.observe({ entryTypes: ['mark'] });
  };

  update = (newData: Data) => {
    this.setState(({ data: prevData }) => {
      const data: Data = new Map(prevData);
      newData.forEach((value, key, map) => {
        data.set(key, (data.get(key) || 0) + map.get(key));
      });
      return { data };
    });
  };

  reset = () => {
    this.setState(({ data: prevData }) => {
      const data: Data = new Map(prevData);
      data.forEach((value, key, map) => map.set(key, 0));
      return { data };
    });
  };

  render() {
    const { data } = this.state;

    return data ? (
      <Root>
        <table>
          <caption>
            Render Counter
            <button onClick={this.reset}>Reset</button>
          </caption>
          <thead>
            <tr>
              <th>Component</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {Array.from(data.keys()).map((key) => (
              <tr id={key} key={key}>
                <td>{key}</td>
                <td>{data.get(key)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Root>
    ) : null;
  }
}
