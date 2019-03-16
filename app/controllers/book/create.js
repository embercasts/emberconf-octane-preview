import Controller from '@ember/controller';
import { post } from 'emberconf-preview/utils/fetch';

export default Controller.extend({
  actions: {
    saveBook() {
      post('/api/books', this.model)
        .then(() => {
          this.transitionToRoute('book');
        });
    }
  }
});
