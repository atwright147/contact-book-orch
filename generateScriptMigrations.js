#!/usr/bin/env node

const fs = require('fs');
const envs = require('./environments.json');
const objectToEnvString = require('./utils/objectToEnvString');

const env = process.argv[2] || 'production';

const template = `#!/usr/bin/env sh

NODE_ENV=${env} ${objectToEnvString(envs[env])} node start.js`;

fs.writeFileSync('./dist/migrate.sh', template, { encoding: 'UTF-8', mode: '766' });
