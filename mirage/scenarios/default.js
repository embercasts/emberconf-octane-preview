import faker from 'faker';

export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  let authors = server.createList('author', 10);
  let bookGroups = authors.map(author => {
    return server.createList('book', 3, { author });
  });

  let ratings = bookGroups.map(books => {
    books.map(book => server.createList('rating', 4, { book }));
  });
}
