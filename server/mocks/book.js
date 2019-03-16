'use strict';
const data = require('../data');
const { Book } = data;

module.exports = function(app) {
  const express = require('express');
  let bookRouter = express.Router();

  bookRouter.get('/', async function(req, res) {
    try {
      let books = await Book.fetchAll({ withRelated: ['author'] });

      res.send(
        books.toJSON()
      );
    } catch(e) {
      res.send(e);
    }
  });

  bookRouter.post('/', async function(req, res) {
    let book = new Book(req.body);
    await book.save();

    res.status(201).send(book.toJSON());
  });

  bookRouter.get('/:id', async function(req, res) {
    let book = await Book.where({ id: req.params.id })
      .fetch({ withRelated: ['author'] });

    res.send(book.toJSON());
  });

  bookRouter.put('/:id', async function(req, res) {
    let book = await Book.where({ id: req.params.id })
      .fetch({ withRelated: ['author'] });

    book.set(req.body);
    await book.save();

    res.send(book.toJSON());
  });

  bookRouter.delete('/:id', async function(req, res) {
    let book = await Book.where({ id: req.params.id })
      .fetch({ withRelated: ['author'] });
    await book.destroy();

    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  app.use('/api/books', require('body-parser').json());
  app.use('/api/books', bookRouter);
};
