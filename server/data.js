const knex = require('knex')(require('./knexfile').development);

const bookshelf = require('bookshelf')(knex);

let models = {};

models.Author = bookshelf.Model.extend({
  tableName: 'authors',
  books: function() {
    return this.hasMany(models.Book);
  }
});

models.Book = bookshelf.Model.extend({
  tableName: 'books',
  author: function() {
    return this.belongsTo(models.Author);
  }
});

module.exports = {
  bookshelf,
  ...models
};
