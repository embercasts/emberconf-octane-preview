import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveBook() {
      let book = this.store.createRecord('book', this.model);

      book.save()
        .then(() => {
          this.transitionToRoute('book');
        });
    }
  }
});
