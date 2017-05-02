#!/bin/bash -e

npm run lint && npm run jest -- --coverage
