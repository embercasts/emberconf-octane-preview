import EmberObject, { computed } from '@ember/object';
import { A } from '@ember/array';

export default EmberObject.extend({
  itemDiscountMultiplier: 0.01,

  init() {
    this.set('items', A([]));
  },

  addItem(item) {
    this.items.addObject(EmberObject.create({
      item,
      price: item.price,
      quantity: 1
    }));
  },

  changeItemQuantity(item, amount) {
    let itemToChange = this.get('items').find(a => a === item);

    itemToChange.set('quantity', itemToChange.get('quantity') + amount);
  },

  subTotal: computed('items.@each.{quantity,price}', function() {
    return this.get('items').reduce((sum, item) => sum + item.get('price') * item.get('quantity'), 0);
  }),

  numberOfItems: computed('items.[]', function() {
    return this.get('items').length;
  }),

  discount: computed('numberOfItems', 'subTotal', function() {
    return this.get('subTotal') * this.get('itemDiscountMultiplier') * this.get('numberOfItems');
  }),

  total: computed('discount', 'subTotal', function() {
    return this.get('subTotal') - this.get('discount');
  })
});
