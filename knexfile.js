'use strict';

const appFolder = 'src'

module.exports = {
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    },
    migrations: {
      directory: `./${appFolder}/migrations`
    },
    seeds: {
      directory: `./${appFolder}/seeds`
    },
    useNullAsDefault: true,
};
