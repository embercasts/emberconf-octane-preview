import Route from '@ember/routing/route';

export default class BookDetailRoute extends Route {
  model({ id }) {
    return this.store.findRecord('book', id, {
      include: 'ratings,author'
    });
  }
}
