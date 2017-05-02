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
cd packages/site
npm test
npm run lint
npm run jest
```

### Jest command line options

All [Jest command line options](https://facebook.github.io/jest/docs/cli.html) are allowed in both the root directory and individual package directories.

#### Run a single spec

```sh
npm run jest -- HelloWorld
```

#### Run all specs affected by changed files

```sh
npm run jest -- -o
```

#### Watch for file changes and automatically re-run affected specs

```sh
npm run jest -- --watch
```

### VSCode debug config

Add the following configuration to `.vscode/launch.json` to enable [debugging Jest specs within VSCode](https://code.visualstudio.com/docs/editor/debugging).

```json
  "configurations": [
    {
      "args": [
        "--runInBand",
        "-c",
        "${workspaceRoot}/.jestrc",
        "--no-cache",
        "${file}"
      ],
      "cwd": "${workspaceRoot}",
      "externalConsole": false,
      "name": "Jest",
      "outDir": null,
      "program": "${workspaceRoot}/node_modules/jest/bin/jest.js",
      "request": "launch",
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
```
