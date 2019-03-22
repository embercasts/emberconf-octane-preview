import Route from '@ember/routing/route';

export default class BookCreateRoute extends Route {
  model() {
    return this.store.findAll('author')
      .then(authors => {
        return {
          authors,
          book: {
            title: '',
            isbn: '',
            publishDate: null,
            author: null
          }
        }
      });
  }
}
