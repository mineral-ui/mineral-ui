#!/bin/bash -e

babel src --out-dir dist/es --ignore *.spec.js --source-maps --minified
