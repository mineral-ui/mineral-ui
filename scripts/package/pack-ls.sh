#!/bin/bash -e

tar -tvf $(npm pack) && rm mineral-ui-*.tgz
