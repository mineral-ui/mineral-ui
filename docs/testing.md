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

## Run tests for an individual package

```sh
cd packages/button
npm test
npm run lint
npm run jest
```

**Note:** Test coverage report will show 0 for imported modules located in
external packages when running tests within an individual package.
This is because tests are run *only* for the specified package.
Run specs at root level to see test coverage for all modules.

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
