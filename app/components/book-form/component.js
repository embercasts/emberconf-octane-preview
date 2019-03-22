import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class BookForm extends Component {
  @service store
  @tracked title;
  @tracked isbn;
  @tracked publishDate;
  @tracked author;

  constructor() {
    super(...arguments);

    this.title = this.args.book.title;
    this.isbn = this.args.book.isbn;
    this.publishDate = this.args.book.publishDate;
    this.author = this.args.book.author;
  }

  @action
  changeAuthor(id) {
    this.author = this.args.authors.find(a => a.id == id);
  }

  @action
  searchAuthor(query) {
    return this.store.query('author', { filter: { query }});
  }

  @action
  submitChanges() {
    this.args.onsubmit({
      title: this.title,
      isbn: this.isbn,
      publishDate: this.publishDate,
      author: this.author,
    });
  }
}
