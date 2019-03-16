
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(t) {
    t.increments('id').primary();
    t.string('title');
    t.string('isbn');
    t.string('publish-date');
    t.integer('username');
    t.integer('author_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
