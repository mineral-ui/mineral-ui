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

### Jest command line options

All [Jest command line options](https://facebook.github.io/jest/docs/cli.html) are allowed in both the root directory and individual package directories.

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
1. `npm run test:debug`
1. Open [chrome://inspect](chrome://inspect) in Chrome.
1. Under "Remote target", click on "inspect". A new debugger window will open up. 
1. Click play once to get past the initial breakpoint.  The debugger should then stop at your breakpoint.
