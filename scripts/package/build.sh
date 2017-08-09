#!/bin/bash -e

NODE_ENV="${NODE_ENV:-production}"
SRC_DIR="src"
ES_DIR="lib"
UMD_DIR="dist"

# es modules
if [ "$TARGET" != 'site' ]; then
  NODE_ENV=$NODE_ENV babel "$SRC_DIR" --out-dir "$ES_DIR" --ignore *.spec.js,*.template.js,__demo__ --source-maps --minified
fi

# umd
TARGET=$TARGET NODE_ENV=$NODE_ENV webpack

# flow definitions
if [ "$TARGET" != 'site' ]; then
  flow-copy-source -v -i '**/__tests__/**' -i '**/__demo__/**' -i '**/dist/**' -i '**/lib/**' -i '**/templates/**' "$SRC_DIR" "$UMD_DIR"
fi
