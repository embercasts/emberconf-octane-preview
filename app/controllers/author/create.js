import Controller from '@ember/controller';
import { post } from 'emberconf-preview/utils/fetch';

export default Controller.extend({
  actions: {
    saveAuthor() {
      post('/api/authors', this.model)
        .then(() => {
          this.transitionToRoute('author');
        });
    }
  }
});
