
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ratings', function(t) {
    t.increments('id').primary();
    t.integer('value');
    t.integer('username');
    t.integer('book_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ratings');
};
