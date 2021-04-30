#!/usr/bin/env node

const { compile } = require('./dist/index');

try {
  compile();
} catch (error) {
  process.stderr.write(error + '\n');
}
