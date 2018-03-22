/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../library/styles';
import { ThemeProvider } from '../../../../library/themes';
import Flex, { FlexItem } from '../../../../library/Flex';
import components from './components';

type Args = {
  Component: React$StatelessFunctionalComponent<*> | React$ComponentType<*>,
  componentName: string,
  props?: Array<Prop>,
  commonProps?: Object
};

type Prop = {
  name: ?string,
  labels: Array<string>,
  values: Array<any> // TODO: Better flow type?
};

type PermutationProps = {
  Component: React$StatelessFunctionalComponent<*> | React$ComponentType<*>,
  title: string,
  commonProps?: Object,
  dynamicProps?: Object
};

/*
 * Following two functions are from: https://stackoverflow.com/a/15308220
 */

// Arbitrary base x number class
var BaseX = function(initRadix) {
  this.radix = initRadix ? initRadix : 1;
  this.value = 0;
  this.increment = function() {
    return (this.value = (this.value + 1) % this.radix) === 0;
  };
};

function cartesianProduct(input) {
  var output = [], // Array containing the resulting combinations
    counters = [], // Array of counters corresponding to our input arrays
    remainder = false, // Did adding one cause the previous digit to rollover?
    temp; // Holds one combination to be pushed into the output array

  // Initialize the counters
  for (var i = input.length - 1; i >= 0; i--) {
    counters.unshift(new BaseX(input[i].length));
  }

  // Get all possible combinations
  // Loop through until the first counter rolls over
  while (!remainder) {
    temp = []; // Reset the temporary value collection array
    remainder = true; // Always increment the last array counter

    // Process each of the arrays
    for (i = input.length - 1; i >= 0; i--) {
      temp.unshift(input[i][counters[i].value]); // Add this array's value to the result

      // If the counter to the right rolled over, increment this one.
      if (remainder) {
        remainder = counters[i].increment();
      }
    }
    output.push(temp); // Collect the results.
  }

  return output;
}

const getProp = (name, value) =>
  name ? { [name]: value } : value ? { [value]: true } : null;

const getPermutations = ({
  Component,
  componentName,
  props,
  commonProps
}: Args) => {
  const changingProps = props; // See https://github.com/facebook/flow/issues/3299
  if (changingProps) {
    const valuePermutations = cartesianProduct(
      changingProps.map(prop => prop.values)
    );
    const labelPermutations = cartesianProduct(
      changingProps.map(prop => prop.labels)
    );

    return valuePermutations.map((permutation, index) => {
      const dynamicProps = permutation.reduce((acc, value, valueIndex) => {
        return {
          ...acc,
          ...getProp(changingProps[valueIndex].name, value)
        };
      }, {});
      const title = permutation
        .reduce(
          (acc, title, titleIndex) => {
            acc.push(`/${labelPermutations[index][titleIndex]}`);
            return acc;
          },
          [componentName]
        )
        .join('');
      const symbolProps = {
        Component,
        title,
        dynamicProps,
        commonProps
      };
      return <Permutation key={index} {...symbolProps} />;
    });
  } else {
    const symbolProps = {
      Component,
      title: componentName,
      commonProps
    };
    return <Permutation key={componentName} {...symbolProps} />;
  }
};

const PermutationRoot = createStyledComponent(FlexItem, ({ theme }) => ({
  '& > p': {
    color: theme.color_caption,
    fontFamily: theme.fontFamily_system,
    fontSize: theme.fontSize_ui,
    margin: `0 0 ${theme.space_stack_sm}`
  }
})).withProps({ grow: 1, padding: 'lg', width: '12rem' });

const Permutation = ({
  Component,
  title,
  commonProps,
  dynamicProps,
  ...restProps
}: PermutationProps) => (
  <PermutationRoot {...restProps}>
    <p>{title}</p>
    <span data-sketch-symbol={title}>
      <Component {...dynamicProps} {...commonProps} />
    </span>
  </PermutationRoot>
);

export default function ComponentPermutations() {
  return (
    <ThemeProvider>
      <div>
        {components.map((component, index) => (
          <Flex wrap key={index}>
            {getPermutations(component)}
          </Flex>
        ))}
      </div>
    </ThemeProvider>
  );
}
