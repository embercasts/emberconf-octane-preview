import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  store: service('store'),

  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      title: this.get('book.title'),
      isbn: this.get('book.isbn'),
      publishDate: this.get('book.publishDate'),
      author: this.get('book.author'),
    });
  },

  actions: {
    searchAuthor(query) {
      debugger;
      return this.get('store').query('author', { filter: { query }});
    },

    submitChanges(ev) {
      ev.preventDefault();

      this.onsubmit({
        title: this.title,
        isbn: this.isbn,
        publishDate: this.publishDate,
        author: this.author,
      });
    }
  }
});
