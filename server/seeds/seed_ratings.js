const data = require('../seed-data');
const faker = require('faker');
const _ = require('lodash');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ratings').del()
    .then(function () {
      let allRatings = [
        ...data.books.reduce((ratings, book) => {
          let newRatings = _.range(faker.random.number({min: 2, max: 20}))
            .map(() => ({
              book_id: book.id,
              value: faker.random.number({min: 1, max: 10}),
              username: faker.internet.userName()
            }));

          return [...ratings, ...newRatings];

        }, [])
      ];
      // Inserts seed entries
      return knex('ratings').insert(allRatings);
    });
};
