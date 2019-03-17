import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  book: service('book'),

  model({ id }) {
    return Promise.all([
      this.store.findRecord('book', id, {
        include: 'ratings,author'
      }),
      this.store.findAll('author')
    ])
      .then(([book, authors]) => {
        return { book, authors };
      });
  }
});
