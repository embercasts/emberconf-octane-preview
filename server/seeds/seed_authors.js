const data = require('../seed-data');



exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        ...data.authors
      ]);
    });
};
