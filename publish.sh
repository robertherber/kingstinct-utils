#!/bin/bash
set -e

yarn version
yarn build
PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F= "{ print $2 }" | sed -E 's/(version)|[:,\",]//g' | tr -d '[[:space:]]')
echo $PACKAGE_VERSION
if [ -z "$OP_SESSION_my" ]; then eval $(op signin my); fi # ask for 1Password login if not done
export OTP=$(op get totp Npmjs)
yarn publish lib --new-version=$PACKAGE_VERSION --otp $OTP