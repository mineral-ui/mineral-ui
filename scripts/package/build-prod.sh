#!/bin/bash -e

npm run clean && NODE_ENV=production npm run build:umd && NODE_ENV=production npm run build:es
