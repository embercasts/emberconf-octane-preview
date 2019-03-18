import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BookCreateController extends Controller {
  @action
  async saveBook(values) {
    let book = this.store.createRecord('book', values);

    let result = await book.save();

    this.transitionToRoute('book');
  }
}
