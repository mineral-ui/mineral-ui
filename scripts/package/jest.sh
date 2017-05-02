#!/bin/bash -e

cwd=`pwd`
npm run jest --prefix ../../ -- $@ "$cwd/"
