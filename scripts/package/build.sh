#!/bin/bash -e

NODE_ENV="${NODE_ENV:-production}"

# es modules
if [ "$TARGET" != 'site' ]; then
  NODE_ENV=$NODE_ENV babel src --out-dir dist/es --ignore *.spec.js,__demo__ --source-maps --minified
fi

# umd
TARGET=$TARGET NODE_ENV=$NODE_ENV webpack
