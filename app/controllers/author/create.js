import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorCreateController extends Controller {
  @action
  saveAuthor(values) {
    let author = this.store.createRecord('author', values);

    author.save()
      .then(() => {
        this.transitionToRoute('author');
      });
  }
}
