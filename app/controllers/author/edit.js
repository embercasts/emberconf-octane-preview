import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  author: service('author'),
  actions: {
    saveAuthor(updates) {
      let id = this.get('model.id');

      this.author.update(id, updates)
        .then(() => {
          this.transitionToRoute('author');
        });
    }
  }
});
