import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  author: service('author'),

  actions: {
    saveAuthor() {
      this.author.create(this.model)
        .then(() => {
          this.transitionToRoute('author');
        });
    }
  }
});
