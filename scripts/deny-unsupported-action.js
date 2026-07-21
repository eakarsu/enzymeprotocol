#!/usr/bin/env node
'use strict';

const action = process.argv.slice(2).join(' ') || 'requested action';
console.error(
  `Blocked ${action}: this repository is retained as a historical reference and does not support publishing or public-network operations.`,
);
process.exitCode = 1;
