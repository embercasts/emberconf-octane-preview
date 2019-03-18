import { tracked } from '@glimmer/tracking';
import Service from '@ember/service';

class CartItem {
  @tracked price;
  @tracked quantity = 1;
  @tracked item;

  constructor(item) {
    this.item = item;
    this.price = item.price;
  }

  changeQuantity(amount) {
    this.quantity += amount;
  }
}

export default class CartService extends Service {
  itemDiscountMultiplier = 0.01;
  @tracked items = [];

  addItem(item) {
    this.items = [...this.items, new CartItem(item)];
  }

  changeItemQuantity(item, amount) {
    let itemToChange = this.items.find(a => a === item);

    itemToChange.changeQuantity(amount);
  }

  get subTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  get numberOfItems() {
    return this.items.length;
  }

  get discount() {
    return this.subTotal * this.itemDiscountMultiplier * this.numberOfItems;
  }

  get total() {
    return this.subTotal - this.discount;
  }
}
