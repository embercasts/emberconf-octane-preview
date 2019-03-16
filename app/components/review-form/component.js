import Component from '@ember/component';

export default Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      body: this.get('review.body'),
      book: this.get('review.book'),
    });
  },

  actions: {
    submitChanges(ev) {
      ev.preventDefault();

      this.onsubmit({
        body: this.body,
        book: this.book,
      });
    }
  }
});
