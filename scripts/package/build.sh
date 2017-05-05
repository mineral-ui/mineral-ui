#!/bin/bash -e

NODE_ENV="${NODE_ENV:-production}"

# es modules
NODE_ENV=$NODE_ENV babel src --out-dir dist/es --ignore *.spec.js,__demo__ --source-maps --minified

# umd
TARGET=$TARGET NODE_ENV=$NODE_ENV webpack
