import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorEditController extends Controller {
  @action
  saveAuthor(updates) {
    this.model.setProperties(updates);

    this.model.save()
      .then(() => {
        this.transitionToRoute('author');
      });
  }
}
