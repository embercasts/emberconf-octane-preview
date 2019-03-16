import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  author: service('author'),

  actions: {
    saveAuthor() {
      let author = this.store.createRecord('author', this.model);

      author.save()
        .then(() => {
          this.transitionToRoute('author');
        });
    }
  }
});
