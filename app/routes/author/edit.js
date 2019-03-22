import Route from '@ember/routing/route';

export default class AuthorEditRoute extends Route {
  model({ id }) {
    return this.store.findRecord('author', id, {
      include: 'books'
    });
  }
}
