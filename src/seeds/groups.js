const faker = require('faker');

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('groups').truncate()
        .then(function () {
            const seedData = [];
            for (let index = 0; index < 3; index++) {
                seedData.push({
                    name: faker.name.firstName(),
                    active: faker.random.number(100) > 30 ? 1 : 0,
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now()
                });
            }
            // Inserts seed entries
            return knex('groups').insert(seedData);
        });
};
