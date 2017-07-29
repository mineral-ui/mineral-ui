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

### Debugging with VSCode

Place a `debugger;` statement in your code, open the spec file to debug and press the `F5` button.
Step over/into/out functions will work correctly after the `debugger` statement is encountered.

The following configuration must be added to `.vscode/launch.json` to enable [debugging Jest specs within VSCode](https://code.visualstudio.com/docs/editor/debugging).

**Note:** Replace the `runtimeExecutable` parameter with the path to your node executable.

```json
  "configurations": [
    {
      "args": [
        "--no-cache",
        "--runInBand",
        "${file}"
      ],
      "cwd": "${workspaceRoot}",
      "name": "Jest",
      "outDir": null,
      "program": "${workspaceRoot}/node_modules/jest/bin/jest.js",
      "request": "launch",
      "runtimeExecutable": "{{ /path/to/node/executable: /Users/user/.nvm/versions/node/v6.10.2/bin/node }}",
      "runtimeArgs": ["--nolazy"],
      "sourceMaps": true,
      "stopOnEntry": false,
      "type": "node"
    },
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to Port",
      "address": "localhost",
      "port": 5858
    }
  ]
}
```
