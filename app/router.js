import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('author', { path: '/authors' }, function() {
    this.route('detail', { path: '/:id' }, function() {
      this.route('new-book');
    });
    this.route('create');
    this.route('edit', { path: '/:id/edit' });
  });
  this.route('book', { path: '/books' }, function() {
    this.route('create');
    this.route('detail', { path: '/:id' }, function() {
      this.route('create-rating');
    });
    this.route('edit', { path: '/:id/edit' });
  });
});

export default Router;
