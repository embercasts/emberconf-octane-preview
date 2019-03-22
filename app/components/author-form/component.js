import Component from '@component/component';
import { get, action } from '@ember/object';
import { tracked } from '@ember/tracking';

export default class AuthorForm extends Component {
  @tracked first
  @tracked last

  constructor() {
    super(...arguments);

    this.first = get(this.args.author, 'first');
    this.last = get(this.args.author, 'last');
  }

  @action
  submitChanges() {
    this.args.onsubmit({
      first: this.first,
      last: this.last,
    });
  }
}
