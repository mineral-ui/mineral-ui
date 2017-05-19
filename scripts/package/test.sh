#!/bin/bash -e

npm run lint && npm run flow && npm run jest -- --coverage
