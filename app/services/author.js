import Service from '@ember/service';
import { get, post, put, del } from 'emberconf-preview/utils/fetch';

export default Service.extend({
  url: '/api/authors',

  findAllOrQuery(search) {
    let url = this.url;

    if (search) {
      url = `${url}?filter[query]=${search}`;
    }

    return get(url);
  },

  find(id) {
    return get(`${this.url}/${id}`);
  },

  create(data) {
    return post(this.url, data);
  },

  update(id, data) {
    return put(`${this.url}/${id}`, data);
  },

  destroy(id) {
    return del(`${this.url}/${id}`);
  }
});
