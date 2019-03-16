import Route from '@ember/routing/route';

export default Route.extend({
  model({ id }) {
    return fetch(`/api/authors/${id}`)
      .then(r => r.json());
  }
});
