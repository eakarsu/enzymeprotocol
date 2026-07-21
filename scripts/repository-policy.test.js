#!/usr/bin/env node
'use strict';
/* eslint-disable @typescript-eslint/no-var-requires */

const assert = require('assert');
const path = require('path');
const { assertSupportedNetwork, requestedNetwork, validatePolicy } = require('./repository-policy-lib');

assert.strictEqual(requestedNetwork(['compile']), undefined);
assert.strictEqual(requestedNetwork(['deploy', '--network', 'localhost']), 'localhost');
assert.strictEqual(requestedNetwork(['--network=hardhat', 'test']), 'hardhat');
assert.doesNotThrow(() => assertSupportedNetwork(['test']));
assert.doesNotThrow(() => assertSupportedNetwork(['deploy', '--network', 'localhost']));
assert.throws(() => assertSupportedNetwork(['deploy', '--network', 'mainnet']), /retained historical reference/);
assert.throws(() => assertSupportedNetwork(['--network=kovan', 'verify']), /retained historical reference/);
assert.deepStrictEqual(validatePolicy(path.resolve(__dirname, '..')), []);

console.log('Repository policy tests passed (8 assertions).');
