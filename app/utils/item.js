class Item {
  name = '';
  price = 0;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

export const items = [
  new Item('Ice Cream', 2.10),
  new Item('Zoey Mascot Plush', 10.10),
  new Item('Ember Hoody', 55.20),
  new Item('Ember Sticker Pack', 6.00),
];

export default Item;
