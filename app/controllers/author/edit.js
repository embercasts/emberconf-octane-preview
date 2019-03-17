import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveAuthor(updates) {
      this.model.setProperties(updates);

      this.model.save()
        .then(() => {
          this.transitionToRoute('author');
        });
    }
  }
});
