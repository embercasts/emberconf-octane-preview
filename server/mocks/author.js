'use strict';
const data = require('../data');
const { Author } = data;

module.exports = function(app) {
  const express = require('express');
  let authorRouter = express.Router();

  authorRouter.get('/', async function(req, res) {
    try {
      let authors = await Author.fetchAll({ withRelated: ['books'] });

      res.send(
        authors.toJSON()
      );
    } catch(e) {
      res.send(e);
    }
  });

  authorRouter.post('/', async function(req, res) {
    let author = new Author(req.body);
    await author.save();

    res.status(201).send(author.toJSON());
  });

  authorRouter.get('/:id', async function(req, res) {
    let author = await Author.where({ id: req.params.id })
      .fetch({ withRelated: ['books'] });

    res.send(author.toJSON());
  });

  authorRouter.put('/:id', async function(req, res) {
    try {
      let attrs = { ...req.body };
      delete attrs.books;

      let author = await Author.where({ id: req.params.id }).fetch({ withRelated: ['books'] });

      author.set(attrs);
      await author.save();

      res.send(author.toJSON());
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

  authorRouter.delete('/:id', async function(req, res) {
    let author = await Author.where({ id: req.params.id });
    await author.destroy();

    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  app.use('/api/authors', require('body-parser').json());
  app.use('/api/authors', authorRouter);
};
