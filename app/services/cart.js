import { tracked } from '@glimmer/tracking';
import Service from '@ember/service';

class CartItem {
  @tracked price;
  @tracked quantity = 1;
  @tracked book;

  constructor(book) {
    this.book = book;
    this.price = book.price;
  }

  changeQuantity(amount) {
    this.quantity += amount;
  }
}

export default class CartService extends Service {
  itemDiscountMultiplier = 0.01;
  @tracked items = [];

  addItem(book) {
    let existingCartItem = this.items.find(a => a.book === book);
    if (existingCartItem) {
      return this.changeItemQuantity(existingCartItem, 1);
    }

    this.items = [...this.items, new CartItem(book)];
  }

  changeItemQuantity(item, amount) {
    let itemToChange = this.items.find(a => a === item);

    itemToChange.changeQuantity(amount);
  }

  get subTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  get numberOfItems() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  get discount() {
    return this.subTotal * this.itemDiscountMultiplier * this.numberOfItems;
  }

  get total() {
    return this.subTotal - this.discount;
  }
}
