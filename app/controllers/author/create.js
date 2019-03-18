import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveAuthor(values) {
      let author = this.store.createRecord('author', values);

      author.save()
        .then(() => {
          this.transitionToRoute('author');
        });
    }
  }
});
