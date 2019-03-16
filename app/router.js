import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('author', { path: '/authors' }, function() {
    this.route('detail', { path: '/:id' });
  });
  this.route('book', { path: '/books' }, function() {
    this.route('detail', { path: '/:id' });
  });
});

export default Router;
