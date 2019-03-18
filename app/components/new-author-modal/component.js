import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NewAuthorModal extends Component {
  @service store
  author = { first: '', last: '' }
  @tracked showModal = false

  @action
  async save(ev) {
    ev.preventDefault();

    let author = this.store.createRecord('author', this.author);

    await author.save()
    this.showModal = false;
    if (this.args.onsave) { this.args.onsave(author); }
  }
}
