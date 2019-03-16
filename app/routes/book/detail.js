import Route from '@ember/routing/route';

export default Route.extend({
  model({ id }) {
    return fetch(`/api/books/${id}`)
      .then(r => r.json());
  }
});
