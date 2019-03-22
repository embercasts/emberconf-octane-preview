import Controller from '@ember/controller';
import { action } from '@ember/object';


export default class BookEditController extends Controller {
  @action
  saveBook(values) {
    let book = this.model.book;
    book.setProperties(values);

    book.save()
      .then(() => {
        this.transitionToRoute('book.detail', book.id);
      });
  }
}
