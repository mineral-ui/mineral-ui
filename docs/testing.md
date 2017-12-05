# Testing

## Test all the things

```sh
npm test
```

## Lint your files

```sh
npm run lint
```

## Run Jest unit tests

Unit tests are defined with the [Jest test framework](https://facebook.github.io/jest/).

```sh
npm run jest
```

#### Run tests in different versions of React

```sh
npm run jest:react
```

or

```sh
npm run jest:react -- --version=16.0.0
```

#### Run a single spec

```sh
npm run jest -- Button
```

#### Run all specs affected by changed files

```sh
npm run jest -- -o
```

#### Watch for file changes and automatically re-run affected specs

```sh
npm run jest -- --watch
```

#### Debugging

1. Add a `debugger;` breakpoint somewhere in your code or test.
1. `npm run jest:debug`
1. Open [chrome://inspect](chrome://inspect) in Chrome.
1. Under "Remote target", click on "inspect". A new debugger window will open up.
1. Click play once to get past the initial breakpoint.  The debugger should then stop at your breakpoint.

## Visual diff tests

Visual diff testing is performed using [Happo.io](https://happo.io/).

Visual diff tests are run automatically on pull-requests when the necessary environment variables are set.  This means that they will not run on pull requests originating from repo forks, given that they don't have access to the respective keys.

Given that you have valid `HAPPO_KEY` and `HAPPO_SECRET` environment variables, the following commands can be used to execute visual diff tests.

#### Run all visual diff tests
```sh
npm run happo run
```

#### Run tests for a single component

```sh
npm run happo run -- --only happo#Link
```

#### Watch for file changes and automatically re-run tests
```sh
npm run happo dev
```

More information can be found at https://github.com/enduire/happo.io
