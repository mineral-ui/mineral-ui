/* @flow */
const REGEX_COMPONENT = new RegExp('^[A-Z]');

module.exports = {
  test: (val: object) => {
    return (
      val &&
      val.type &&
      val.props &&
      typeof val.type === 'string' &&
      REGEX_COMPONENT.test(val.type) &&
      !val.processed
    );
  },

  print: (val: object, serialize: Function) => {
    if (['ThemeProvider', 'LiveProvider'].includes(val.type)) {
      delete val.props;
    } else {
      delete val.props.theme;
    }

    val.processed = true;
    return serialize(val);
  }
};
