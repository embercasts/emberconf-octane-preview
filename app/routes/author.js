import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthorRoute extends Route {
  @service('author') author;

  queryParams = {
    search: {
      refreshModel: true
    }
  };

  model({ search }) {
    return this.author.findAllOrQuery(search);
  }
}
