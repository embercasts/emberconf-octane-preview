import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BookCreateController extends Controller {
  @service store

  @action
  async saveBook(values) {
    let book = this.store.createRecord('book', values);

    let result = await book.save();

    this.transitionToRoute('book');
  }
}
