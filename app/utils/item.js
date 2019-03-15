import EmberObject from '@ember/object';

const Item = EmberObject.extend({
  name: '',
  price: 0
});

export const items = [
  Item.create({
    name: 'Ice Cream',
    price: 2.10
  }),
  Item.create({
    name: 'Zoey Mascot Plush',
    price: 10.10
  }),
  Item.create({
    name: 'Ember Hoody',
    price: 55.20
  }),
  Item.create({
    name: 'Ember Sticker Pack',
    price: 6.00
  }),
];

export default Item;
