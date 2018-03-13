/* @flow */
const matcher = new RegExp('(ThemeProvider|LiveProvider|^Themed\\(.*)');

module.exports = {
  test: (val: Object) => {
    return (
      val &&
      val.type &&
      typeof val.type === 'string' &&
      matcher.test(val.type) &&
      !val.processed
    );
  },

  print: (val: Object, serialize: Function) => {
    if (val.type.startsWith('Themed(')) {
      delete val.props.theme;
    } else {
      delete val.props;
    }

    val.processed = true;
    return serialize(val);
  }
};
