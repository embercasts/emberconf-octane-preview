'use strict';
const data = require('../data');
const { Rating } = data;

module.exports = function(app) {
  const express = require('express');
  let ratingRouter = express.Router();

  ratingRouter.get('/', async function(req, res) {
    try {
      let ratings = await Rating.fetchAll({ withRelated: ['book'] });

      res.send(
        ratings.toJSON()
      );
    } catch(e) {
      res.send(e);
    }
  });

  ratingRouter.post('/', async function(req, res) {
    let rating = new Rating(req.body);
    await rating.save();

    res.status(201).send(rating.toJSON());
  });

  ratingRouter.get('/:id', async function(req, res) {
    let rating = await Rating.where({ id: req.params.id })
      .fetch({ withRelated: ['book'] });

    res.send(rating.toJSON());
  });

  ratingRouter.put('/:id', async function(req, res) {
    try {
      let attrs = { ...req.body };
      delete attrs.book;

      let rating = await Rating.where({ id: req.params.id }).fetch({ withRelated: ['book'] });

      rating.set(attrs);
      await rating.save();

      res.send(rating.toJSON());
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

  ratingRouter.delete('/:id', async function(req, res) {
    let rating = await Rating.where({ id: req.params.id });
    await rating.destroy();

    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  app.use('/api/ratings', require('body-parser').json());
  app.use('/api/ratings', ratingRouter);
};
