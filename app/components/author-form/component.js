import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      first: get(this.author, 'first'),
      last: get(this.author, 'last')
    });
  },

  actions: {
    submitChanges() {
      this.onsubmit({
        first: this.get('first'),
        last: this.get('last')
      });
    }
  }
});
