import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  store: service('store'),

  init() {
    this._super(...arguments);

    this.set('author', {
      first: '',
      last: ''
    });
  },

  actions: {
    save(ev) {
      ev.preventDefault();

      let author = this.get('store').createRecord('author', this.author);

      author.save().then(() => {
        this.set('showModal', false);

        this.onsave(author);
      });
    }
  }
});
