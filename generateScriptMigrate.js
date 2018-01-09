#!/usr/bin/env node

const fs = require('fs');
const envs = require('./environments.json');
const objectToEnvString = require('./utils/objectToEnvString');

const env = process.argv[2] || 'production';

const template = `#!/usr/bin/env sh

NODE_ENV=${env} ${objectToEnvString(envs[env])} node /var/www/node_modules/.bin/knex migrate:latest`;

fs.writeFileSync('./dist/migrate.sh', template, { encoding: 'UTF-8', mode: '766' });
