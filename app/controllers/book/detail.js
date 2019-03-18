import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BookDetailController extends Controller {
  @service cart;

  @action
  addToCart() {
    this.cart.addItem(this.model);
  }
}
