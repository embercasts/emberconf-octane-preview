import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  author: service('author'),
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
