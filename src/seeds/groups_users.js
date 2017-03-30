const faker = require('faker');

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('groups_users').truncate()
        .then(function () {
            const seedData = [];
            for (let index = 0; index < 10; index++) {
                seedData.push({
                    user_id: index + 1,
                    group_id: faker.random.number({ min: 1, max: 3 })
                });
            }
            // Inserts seed entries
            return knex('groups_users').insert(seedData);
        });
};


