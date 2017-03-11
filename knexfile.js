'use strict';

const appFolder = 'src'

module.exports = {
    client: 'mysql',
    connection: {
        host: 'db',
        user: 'user',
        password: 'password',
        database: 'db'
    },
    migrations: {
      directory: `./${appFolder}/migrations`
    },
    seeds: {
      directory: `./${appFolder}/seeds`
    },
    useNullAsDefault: true,
};
