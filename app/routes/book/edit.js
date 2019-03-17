import Route from '@ember/routing/route';

export default Route.extend({
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
