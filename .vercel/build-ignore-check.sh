#!/bin/bash

echo "Checking build-ignore conditions ..."

if git diff --quiet HEAD^ HEAD ./; then
  echo "🛑 Build cancelled. reason: no changes"
  exit 0
fi

if git log --oneline HEAD^..HEAD | grep -q "\[skip ci\]"; then
  echo "🛑 Build cancelled. reason: skip-ci"
  exit 0
fi

echo "✅ Build proceeding ..."
exit 1
