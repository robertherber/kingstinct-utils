#!/bin/bash
(
  export PKG=kingstinct;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install -D "$PKG@latest"
)