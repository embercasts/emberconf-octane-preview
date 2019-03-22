import faker from 'faker';
import data from '../data';

export default function(server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  data.authors.map(author => server.create('author', author));
  let books = data.books.map(book => server.create('book', book));

  books.map(book => server.createList('rating', faker.random.number({ min: 2, max: 10 }), { book }));
}
