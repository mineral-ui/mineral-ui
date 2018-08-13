/* @flow */
import React, { Component } from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '../../themes';
import Button from '../../Button';
import { MenuItem } from '../../Menu';
import Select from '../../Select';
import SelectTrigger from '../../Select/SelectTrigger';
import Pagination, { componentTheme } from '../Pagination';
import examples from '../../../website/app/demos/Pagination/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { mountInThemeProvider } from '../../../../utils/enzymeUtils';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

const defaultProps = {
  currentPage: 1,
  onPageChange: jest.fn(),
  pageSize: 10,
  totalCount: 100
};

// Object keys are used as `visibleRange`; values are used as `currentPage`s
const ranges = {
  '1': [1, 2, 3, 8, 9, 10],
  '2': [1, 2, 3, 8, 9, 10],
  '3': [1, 3, 4, 7, 8, 10],
  '4': [1, 3, 4, 7, 8, 10],
  '5': [1, 4, 5, 6, 7, 10]
};

function mountPagination(props = {}) {
  const paginationProps = {
    ...defaultProps,
    ...props
  };
  return mountInThemeProvider(<Pagination {...paginationProps} />);
}

/* NOTE: The mountApp() function and App component are provided for such cases
when one needs to call Enzyme functions, such as update(), setProps(),
setState(), etc. on the ReactWrapper but those are not available on the
ReactWrapper returned from mountTable() as it is not the root wrapper. */

const mountApp = (props = {}) => {
  const appProps = {
    ...defaultProps,
    ...props
  };

  return mount(<App {...appProps} />);
};

class App extends Component<*, *> {
  state = {
    currentPage: this.props.currentPage,
    pageSize: this.props.pageSize
  };

  handlePageChange = (currentPage) => {
    this.setState({ currentPage });
  };

  handlePageSizeChange = (pageSize) => {
    this.setState({ pageSize });
  };

  render() {
    const paginationProps = {
      ...this.props,
      currentPage: this.state.currentPage,
      onPageChange: this.handlePageChange,
      pageSize: this.state.pageSize
    };

    return (
      <ThemeProvider>
        <Pagination {...paginationProps} />
      </ThemeProvider>
    );
  }
}

const findPageJumper = (pagination) => {
  return pagination.find('input');
};
const findPageSizer = (pagination) => {
  return pagination.find(Select);
};

describe('Pagination', () => {
  testDemoExamples(examples, {
    contextPolyfill: true
  });

  it('renders', () => {
    const [, pagination] = mountPagination();

    expect(pagination.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <Pagination
        currentPage={1}
        onPageChange={jest.fn()}
        pageSize={10}
        totalCount={100}
        showPageJumper
      />,
      getProcessedComponentThemeKeys(componentTheme)
    );
  });

  describe('Page Jumper', () => {
    let app, assertCurrentPage, pagination, pageJumper;
    beforeEach(() => {
      app = mountApp({
        showPageJumper: true
      });
      pagination = app.find(Pagination);
      pageJumper = findPageJumper(pagination);

      assertCurrentPage = ({
        assertion,
        blur,
        value
      }: {
        assertion: number,
        blur?: boolean,
        value: number
      }) => {
        pageJumper.instance().value = value;
        if (blur) {
          pageJumper.simulate('blur');
        } else {
          pageJumper.simulate('keydown', { key: 'Enter' });
        }
        app.update();

        pagination = app.find(Pagination);
        const primaryButton = pagination.findWhere(
          (node) => node.type() === Button && node.props().primary
        );

        expect(primaryButton.props().children).toEqual(assertion);
      };
    });

    describe('navigates to correct page', () => {
      it('on blur', () => {
        assertCurrentPage({ assertion: 7, blur: true, value: 7 });
      });
      it('on enter', () => {
        assertCurrentPage({ assertion: 7, value: 7 });
      });
    });
    describe('does not change page', () => {
      describe('when value is beyond range', () => {
        it('is > last page', () => {
          assertCurrentPage({ assertion: 1, value: 11 });
        });
        it('is 0', () => {
          assertCurrentPage({ assertion: 1, value: 0 });
        });
        it('is < 0', () => {
          assertCurrentPage({ assertion: 1, value: -1 });
        });
      });
    });
  });

  describe('Page Sizer', () => {
    it('navigates to correct page when new page size would update to an invalid current page', () => {
      const pageSizes = [2, 3, 4];
      const app = mountApp({
        currentPage: 50,
        pageSize: pageSizes[0],
        pageSizes,
        showPageSizer: true
      });

      let pagination = app.find(Pagination);
      let pageSizer = findPageSizer(pagination);

      pageSizer
        .find(SelectTrigger)
        .find('div')
        .first()
        .simulate('click');

      app.update();
      pagination = app.find(Pagination);
      pageSizer = findPageSizer(pagination);

      const lastMenuItem = pageSizer.findWhere(
        (node) =>
          node.type() === MenuItem &&
          node.props().onClick &&
          node.props().value === '4'
      );
      lastMenuItem.simulate('click');

      app.update();
      pagination = app.find(Pagination);
      const primaryButton = pagination.findWhere(
        (node) => node.type() === Button && node.props().primary
      );

      expect(primaryButton.props().children).toEqual(25);
    });
  });

  describe('Visible Range', () => {
    Object.keys(ranges).forEach((range) => {
      describe(`of ${range}`, () => {
        ranges[range].forEach((currentPage) => {
          it(`with current page of ${currentPage}`, () => {
            const [, pagination] = mountPagination({
              currentPage,
              pageSize: 10,
              totalCount: ranges[range][ranges[range].length - 1] * 10,
              visibleRange: parseInt(range)
            });
            const buttons = pagination.find(Button);
            const buttonChildren = buttons.reduce((acc, button) => {
              acc = acc + button.props().children + ' ';
              return acc;
            }, '');
            expect(buttonChildren).toMatchSnapshot();
          });
        });
      });
    });
  });
});
