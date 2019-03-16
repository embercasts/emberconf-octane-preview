import Controller from '@ember/controller';
import { put } from 'emberconf-preview/utils/fetch';

export default Controller.extend({
  actions: {
    saveAuthor(updates) {
      let id = this.get('model.id');

      put(`/api/authors/${id}`, {...this.model, ...updates })
        .then(() => {
          this.transitionToRoute('author');
        });
    }
  }
});
