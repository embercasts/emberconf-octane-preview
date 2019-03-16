import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  author: service('author'),

  model({ id }) {
    return this.author.find(id);
  }
});
