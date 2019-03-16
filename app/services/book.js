import Service from '@ember/service';
import { get, post, put, del } from 'emberconf-preview/utils/fetch';
import Book from '../data/book';


export default Service.extend({
  url: '/api/books',

  findAllOrQuery(search) {
    let url = this.url;

    if (search) {
      url = `${url}?filter[query]=${search}`;
    }

    return get(url).then(b => b.map(a => Book.create(a)));
  },

  find(id) {
    return get(`${this.url}/${id}`).then(b => Book.create(b));
  },

  create(data) {
    return post(this.url, data)
      .then(b => Book.create(b));
  },

  update(id, data) {
    return put(`${this.url}/${id}`, data)
      .then(b => Book.create(b));
  },

  destroy(id) {
    return del(`${this.url}/${id}`);
  }
});
