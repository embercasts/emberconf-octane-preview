import Route from '@ember/routing/route';

export default class AuthorRoute extends Route {
  queryParams = {
    search: {
      refreshModel: true
    }
  };

  model({ search }) {
    let url = '/api/books';

    if (search) {
      url = `${url}?filter[query]=${search}`;
    }

    return fetch(url)
      .then(r => r.json());
  }
}
