import kebabCase from 'lodash.kebabcase';

const whitelistedProps = ['className', 'id', 'tabIndex'];

function customProperties(data, prefix) {
  const props = {};

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      props[`${prefix}-${kebabCase(key)}`] = data[key];
    }
  }

  return props;
}

export default function globalProps(props, whitelist = whitelistedProps) {
  return Object.keys(props).reduce(
    (acc, prop) => {
      if (whitelist.indexOf(prop) !== 0) {
        acc[prop] = props[prop];
      }

      return acc;
    },
    {
      ...customProperties(props.dataset, 'data'),
      ...customProperties(props.ariaset, 'aria')
    }
  );
}
