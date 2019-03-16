'use strict';
const data = require('../data');
const { authors, books } = data;

module.exports = function(app) {
  const express = require('express');
  let authorRouter = express.Router();

  authorRouter.get('/', function(req, res) {
    res.send(
      [
        ...books
      ]
    );
  });

  authorRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  authorRouter.get('/:id', function(req, res) {
    let book = books.find(a => a.id == req.params.id);

    res.send({
      ...book,
      author: authors.find(a => a.id == book['author-id'])
    });
  });

  authorRouter.put('/:id', function(req, res) {
    res.send({
      id: req.params.id
    });
  });

  authorRouter.delete('/:id', function(req, res) {
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
  app.use('/api/books', authorRouter);
};
