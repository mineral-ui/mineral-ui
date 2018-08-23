/* @flow */
const matcher = new RegExp('^[A-Z]');

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
    // if (val.type.startsWith('Themed(')) {
    //   delete val.props.theme;
    // } else {
    //   delete val.props;
    // }

    if (
      ['ThemeProvider', 'LiveProvider'].includes(val.type) &&
      val &&
      val.props
    ) {
      delete val.props;
    } else if (val && val.props && val.props.theme) {
      delete val.props.theme;
    }

    val.processed = true;
    return serialize(val);
  }
};
