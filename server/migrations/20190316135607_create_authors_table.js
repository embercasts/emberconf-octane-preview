
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function(t) {
    t.increments('id').primary();
    t.string('first');
    t.string('last');
    t.string('username');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};
