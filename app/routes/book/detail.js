import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  book: service('book'),

  model({ id }) {
    return this.store.findRecord('book', id, {
      include: 'ratings,author'
    });
  }
});
