import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import Cart from 'emberconf-preview/utils/cart';
import { items } from 'emberconf-preview/utils/item';
import { action } from '@ember/object';

export default class ItemStore extends Component {
  @tracked availableItems;
  @tracked cart;

  constructor() {
    super(...arguments);

    this.cart = new Cart();
    this.availableItems = items;
  }

  @action
  addToCart(item) {
    this.cart.addItem(item);
  }

  @action
  changeItemQuantity(item, amount) {
    this.cart.changeItemQuantity(item, amount);
  }
}
