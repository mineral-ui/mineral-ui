#!/bin/bash -e

TARGET="${TARGET:-demo}"

TARGET=$TARGET webpack-dev-server --progress
