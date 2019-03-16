import Route from '@ember/routing/route';
import { get } from 'emberconf-preview/utils/fetch';

export default Route.extend({
  model({ id }) {
    return get(`/api/authors/${id}`);
  }
});
