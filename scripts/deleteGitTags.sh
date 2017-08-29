#!/bin/bash -e

for tag in `git tag`
do
  #git push origin :$tag
  git tag -d $tag
done
