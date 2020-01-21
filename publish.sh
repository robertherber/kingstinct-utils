#!/bin/bash
set -e

yarn version
yarn build
PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F= "{ print $2 }" | sed -E 's/(version)|[:,\",]//g' | tr -d '[[:space:]]')
echo $PACKAGE_VERSION
yarn publish lib --new-version=$PACKAGE_VERSION