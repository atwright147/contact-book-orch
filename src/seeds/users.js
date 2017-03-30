const faker = require('faker');

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').truncate()
        .then(function () {
            const seedData = [];
            for (let index = 0; index < 10; index++) {
                seedData.push({
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    email: faker.internet.exampleEmail(),
                    password: 'password',
                    active: faker.random.number(100) > 30 ? 1 : 0,
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now()
                });
            }
            // Inserts seed entries
            return knex('users').insert(seedData);
        });
};
