import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import bounce from 'emberconf-preview/animations/bounce';
import brighten from 'emberconf-preview/animations/brighten';

export default class ShoppingCart extends Component {
  @service cart;
  @service store;
  @tracked isOpen = false;

  constructor() {
    super(...arguments);
  }

  bounce = bounce;
  brighten = brighten;

  @action
  changeItemQuantity(item, amount) {
    this.cart.changeItemQuantity(item, amount);
  }
}
